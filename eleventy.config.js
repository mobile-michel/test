module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin/config.yml");
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  };