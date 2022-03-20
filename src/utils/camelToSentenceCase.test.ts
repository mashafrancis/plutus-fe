import camelToSentenceCase from '@utils/camelToSentenceCase';

describe('The camelToSentenceCase helper function', () => {
	it('should convert a camel case to sentence case', () => {
		expect(camelToSentenceCase('safaricomIsCool')).toEqual(
			'Safaricom Is Cool',
		);
	});
});
