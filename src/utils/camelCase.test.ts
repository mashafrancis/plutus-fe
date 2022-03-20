import camelCase from './camelCase';

describe('The camelCase helper function', () => {
	it('should convert a string to camel case', () => {
		expect(camelCase('Safaricom is cool')).toEqual('safaricomIsCool');
		expect(camelCase('Safaricom Is cool')).toEqual('safaricomIsCool');
		expect(camelCase('safaricom is Cool')).toEqual('safaricomIsCool');
	});
});
