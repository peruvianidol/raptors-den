module.exports = function(eleventyConfig) {

  eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css',
	});

  eleventyConfig.addPassthroughCopy("_src/assets/images/");

  return {
    dir: {
      input: '_src',
      output: '_site'
    },
 
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };

};