const { default: config } = require('nextein/config');

module.exports = config({
	exportPathMap: function () {
		return {
			'/': { page: '/' },
			'/posts': { page: '/posts'},
		}
	}
})
