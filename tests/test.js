var n = require('../src/numeros.js')

describe('Transform numbers between standards', function() {
	it('Transform from international to brazilian', function() {
		expect(n.toBrazilian(1.789)).toEqual('1,789');
		expect(n.toBrazilian(12.789)).toEqual('12,789');
		expect(n.toBrazilian(123.789)).toEqual('123,789');
		expect(n.toBrazilian(1234.789)).toEqual('1.234,789');
		expect(n.toBrazilian(12345.789)).toEqual('12.345,789');
		expect(n.toBrazilian(123456.789)).toEqual('123.456,789');
		expect(n.toBrazilian(1234567.789)).toEqual('1.234.567,789');
		expect(n.toBrazilian(12345678.789)).toEqual('12.345.678,789');
		expect(n.toBrazilian(123456789.789)).toEqual('123.456.789,789');
		expect(n.toBrazilian(1234567890.789)).toEqual('1.234.567.890,789');
		expect(n.toBrazilian(12345678901.789)).toEqual('12.345.678.901,789');
		expect(n.toBrazilian(123456789012.789)).toEqual('123.456.789.012,789');
		expect(n.toBrazilian(1234567890123.789)).toEqual('1.234.567.890.123,789');
		expect(n.toBrazilian(123456789012.3789)).toEqual('123.456.789.012,3789');
		expect(n.toBrazilian(12345678901.23789)).toEqual('12.345.678.901,23789');
		expect(n.toBrazilian(1234567890.123789)).toEqual('1.234.567.890,123789');
		expect(n.toBrazilian(123456789.0123789)).toEqual('123.456.789,0123789');
		expect(n.toBrazilian(12345678.90123789)).toEqual('12.345.678,90123789');
		expect(n.toBrazilian(1234567.890123789)).toEqual('1.234.567,890123789');
		expect(n.toBrazilian(123456.7890123789)).toEqual('123.456,7890123789');
		expect(n.toBrazilian(12345.67890123789)).toEqual('12.345,67890123789');
		expect(n.toBrazilian(1234.567890123789)).toEqual('1.234,567890123789');
		expect(n.toBrazilian(123.4567890123789)).toEqual('123,4567890123789');
		expect(n.toBrazilian(12.34567890123789)).toEqual('12,34567890123789');
		expect(n.toBrazilian(1.234567890123789)).toEqual('1,234567890123789');
	});

	it('Transform from brazilian to international', function() {
		expect(n.toInternational('1,789')).toEqual(1.789);
		expect(n.toInternational('12,789')).toEqual(12.789);
		expect(n.toInternational('123,789')).toEqual(123.789);
		expect(n.toInternational('1.234,789')).toEqual(1234.789);
		expect(n.toInternational('12.345,789')).toEqual(12345.789);
		expect(n.toInternational('123.456,789')).toEqual(123456.789);
		expect(n.toInternational('1.234.567,789')).toEqual(1234567.789);
		expect(n.toInternational('12.345.678,789')).toEqual(12345678.789);
		expect(n.toInternational('123.456.789,789')).toEqual(123456789.789);
		expect(n.toInternational('1.234.567.890,789')).toEqual(1234567890.789);
		expect(n.toInternational('12.345.678.901,789')).toEqual(12345678901.789);
		expect(n.toInternational('123.456.789.012,789')).toEqual(123456789012.789);
		expect(n.toInternational('1.234.567.890.123,789')).toEqual(1234567890123.789);
		expect(n.toInternational('123.456.789.012,3789')).toEqual(123456789012.3789);
		expect(n.toInternational('12.345.678.901,23789')).toEqual(12345678901.23789);
		expect(n.toInternational('1.234.567.890,123789')).toEqual(1234567890.123789);
		expect(n.toInternational('123.456.789,0123789')).toEqual(123456789.0123789);
		expect(n.toInternational('12.345.678,90123789')).toEqual(12345678.90123789);
		expect(n.toInternational('1.234.567,890123789')).toEqual(1234567.890123789);
		expect(n.toInternational('123.456,7890123789')).toEqual(123456.7890123789);
		expect(n.toInternational('12.345,67890123789')).toEqual(12345.67890123789);
		expect(n.toInternational('1.234,567890123789')).toEqual(1234.567890123789);
		expect(n.toInternational('123,4567890123789')).toEqual(123.4567890123789);
		expect(n.toInternational('12,34567890123789')).toEqual(12.34567890123789);
		expect(n.toInternational('1,234567890123789')).toEqual(1.234567890123789);
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
				f = function(){},
				expectedError = new TypeError('The input must be a string.');

		expect(function() {
			n.toInternational(string)
		}).not.toThrow(expectedError);

		expect(function() {
			n.toInternational(number)
		}).toThrow(expectedError);

		expect(function() {
			n.toInternational(object)
		}).toThrow(expectedError);

		expect(function() {
			n.toInternational(bool)
		}).toThrow(expectedError);

		expect(function() {
			n.toInternational(f)
		}).toThrow(expectedError);

		expect(function() {
			n.toInternational(undefined)
		}).toThrow(expectedError);

		expect(function() {
			n.toInternational(null)
		}).toThrow(expectedError);
	});


	it('When converting to brazilian, the expected input must a number', function() {

		var number = 0,
				string = '',
				object = {},
				bool = true,
				f = function(){},
				expectedError = new TypeError('The input must be a number.');

		expect(function() {
			n.toBrazilian(number)
		}).not.toThrow(expectedError);

		expect(function() {
			n.toBrazilian(string)
		}).toThrow(expectedError);

		expect(function() {
			n.toBrazilian(object)
		}).toThrow(expectedError);

		expect(function() {
			n.toBrazilian(bool)
		}).toThrow(expectedError);

		expect(function() {
			n.toBrazilian(f)
		}).toThrow(expectedError);

		expect(function() {
			n.toBrazilian(undefined)
		}).toThrow(expectedError);

		expect(function() {
			n.toBrazilian(null)
		}).toThrow(expectedError);
	});
});
