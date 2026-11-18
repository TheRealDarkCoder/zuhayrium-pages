// Builds the site from src/ into _site/. Content pages are plain HTML (or Markdown) with a
// front matter block; layouts in src/_includes add everything around them.

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Front matter dates can be a day (2024-11-28), a month (2024-11) or a year ("2014").
// Eleventy keeps month and year dates as written, so they are shown at that precision.
function dateParts(value) {
  if (value instanceof Date) {
    return {
      iso: value.toISOString().slice(0, 10),
      text: `${value.getUTCDate()} ${MONTHS[value.getUTCMonth()]} ${value.getUTCFullYear()}`,
    };
  }
  const [year, month] = String(value).split("-");
  return month ? { iso: `${year}-${month}`, text: `${MONTHS[Number(month) - 1]} ${year}` } : { iso: year, text: year };
}

function slug(text) {
  return text
    .toLowerCase()
    .replace(/&[#a-z0-9]+;/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Gives every <h2> in an article an id (keeping any it already has) and lists the headings
// for the "On this page" contents, so authors never maintain either by hand.
function outline(html) {
  const used = new Set();
  const headings = [];
  const withIds = html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g, (match, attrs = "", inner) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = attrs.match(/\sid="([^"]+)"/)?.[1];
    if (!id) {
      const base = slug(text) || "section";
      id = base;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
      attrs += ` id="${id}"`;
    }
    used.add(id);
    headings.push({ id, text });
    return `<h2${attrs}>${inner}</h2>`;
  });
  return { html: withIds, headings };
}

export default function (eleventyConfig) {
  // Pages keep file-style addresses (src/blogs/x.html → /blogs/x.html), the ones the site has
  // always had, instead of Eleventy's default /blogs/x/. Front matter can still override this.
  eleventyConfig.addGlobalData("permalink", () => (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`);

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/.htaccess");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/humans.txt");
  // Images and scripts placed next to a page (diagrams, interactive figures) are copied as-is.
  eleventyConfig.addPassthroughCopy("src/**/*.{png,jpg,jpeg,gif,webp,svg,js}");

  eleventyConfig.addFilter("isoDate", (date) => dateParts(date).iso);
  eleventyConfig.addFilter("shortDate", (date) => dateParts(date).text);
  eleventyConfig.addFilter("outline", outline);

  // Groups a date-sorted collection into periods, keeping its order (oldest first). The period
  // is the year unless an entry names one in front matter, such as `period: Before 2015`.
  eleventyConfig.addFilter("byPeriod", (items) => {
    const periods = [];
    for (const item of items) {
      const label = String(item.data.period ?? item.date.getUTCFullYear());
      if (periods.at(-1)?.label !== label) periods.push({ label, items: [] });
      periods.at(-1).items.push(item);
    }
    return periods;
  });

  return {
    dir: { input: "src", output: "_site" },
    // Content is written as plain HTML or Markdown, not template code: braces in inline
    // scripts and code samples stay exactly as written.
    htmlTemplateEngine: false,
    markdownTemplateEngine: false,
  };
}
