var n = require('../numeros.js')

describe('Transform numbers between standards', function() {
	it('Transform from international to brazilian', function() {
		expect(n.toBrazilian(123456.789)).toEqual('123.456,789');
	});

	it('Transform from brazilian to international', function() {
		expect(n.toInternational('123.456,789')).toEqual(123456.789);
	});
});
