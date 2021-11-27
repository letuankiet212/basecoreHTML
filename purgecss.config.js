module.exports = {
	content: ["*.html", "*.kit", "*.php", "./js/lity.js"],
	safelist: ["html", "body", "lity", "iframe", "l-50%", "t-50%", /lity/, /video/, /slick/],
	defaultExtractor: (content) => content.match(/[\w-:./]+(?<!:)/g) || [],
};
