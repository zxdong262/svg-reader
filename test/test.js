
var reader = require('..')
var chai = require('chai')
var expect = chai.expect
var pkg = require('../package.json')
var resolve = require('path').resolve
var _ = require('lodash')

describe(pkg.name, function() {

	var icons = reader(resolve('./test/fontello.svg'))
	var arr = Object.keys(icons)

	console.log(icons)
	for(var i = 0, len = arr.length;i < len;i ++) {
		var obj = icons[arr[i]]

		it('width should be a number', function() {
			expect(obj.width).to.be.a('number')
		})
		it('height should be a number', function() {
			expect(obj.height).to.be.a('number')
		})
		it('ascent should be a number', function() {
			expect(obj.ascent).to.be.a('number')
		})
		it('path should be a string', function() {
			expect(obj.path).to.be.a('string')
		})
		it('name should be a string', function() {
			expect(obj.name).to.be.a('string')
		})
		it('svg should be a string', function() {
			expect(obj.svg).to.be.a('string')
		})
	}


})