module.exports = function (eleventyConfig) {
  // Word sources (e.g. the editable CV) stay in the repo but are not published
  eleventyConfig.addPassthroughCopy("assets", { filter: (path) => !path.endsWith(".docx") });
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("lt-LT", { year: "numeric", month: "long", day: "numeric" })
  );

  eleventyConfig.addCollection("writing", (collectionApi) =>
    collectionApi.getFilteredByGlob("writing/posts/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
