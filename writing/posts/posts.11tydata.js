module.exports = {
  layout: "post.njk",
  lang: "en",
  eleventyComputed: {
    permalink: (data) => {
      // Op-eds published elsewhere are listed as links only, with no local page
      if (data.externalUrl) return false;
      const slug = data.page.fileSlug.replace(/^\d{4}-\d{2}-\d{2}-/, "");
      return `/tekstai/${slug}/`;
    },
  },
};
