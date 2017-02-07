var n = require('../src/numeros.js')

describe('Transform numbers between standards', function() {
	it('Transform from international to brazilian', function() {
		expect(n.toBrazilian(123456.789)).toEqual('123.456,789');
	});

	it('Transform from brazilian to international', function() {
		expect(n.toInternational('123.456,789')).toEqual(123456.789);
	});
});


describe('Cases with no explicit integer part', function() {
	it('When a number has no \'0\' before the .', function() {
		expect(n.toBrazilian(.333)).toEqual('0,333')
	});

	it('When a formated number has no \'0\' before the ,', function() {
		expect(n.toInternational(',333')).toEqual(0.333)
	});
});


describe('Cases when the input isn\'t of the expected type', function() {
	it('When converting to international, the expected input must a string', function() {

		var string = '',
				number = 0,
				object = {},
				bool = true,
				f = function(){};

		expect(function() {
			n.toInternational(string)
		}).not.toThrow(new TypeError('The input must be a string.'));

		expect(function() {
			n.toInternational(number)
		}).toThrow(new TypeError('The input must be a string.'));

		expect(function() {
			n.toInternational(object)
		}).toThrow(new TypeError('The input must be a string.'));

		expect(function() {
			n.toInternational(bool)
		}).toThrow(new TypeError('The input must be a string.'));

		expect(function() {
			n.toInternational(f)
		}).toThrow(new TypeError('The input must be a string.'));

		expect(function() {
			n.toInternational(undefined)
		}).toThrow(new TypeError('The input must be a string.'));
	});


	it('When converting to brazilian, the expected input must a number', function() {

		var number = 0,
				string = '',
				object = {},
				bool = true,
				f = function(){};

		expect(function() {
			n.toBrazilian(number)
		}).not.toThrow(new TypeError('The input must be a number.'));

		expect(function() {
			n.toBrazilian(string)
		}).toThrow(new TypeError('The input must be a number.'));

		expect(function() {
			n.toBrazilian(object)
		}).toThrow(new TypeError('The input must be a number.'));

		expect(function() {
			n.toBrazilian(bool)
		}).toThrow(new TypeError('The input must be a number.'));

		expect(function() {
			n.toBrazilian(f)
		}).toThrow(new TypeError('The input must be a number.'));

		expect(function() {
			n.toBrazilian(undefined)
		}).toThrow(new TypeError('The input must be a number.'));
	});
});
