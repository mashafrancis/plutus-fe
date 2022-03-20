import getCookiesCollection from '@utils/getCookiesCollection';

describe('The getCookiesCollection helper function', () => {
	it('should return an empty object when an empty string or null or undefined is passed', () => {
		expect(getCookiesCollection('')).toEqual({});
		expect(getCookiesCollection(null)).toEqual({});
		expect(getCookiesCollection(undefined)).toEqual({});
	});
	it('should return an empty object when a string without "=" is passed', () => {
		expect(getCookiesCollection('safaricom')).toEqual({});
	});
	it('should return a parsed cookie values', () => {
		const cookieString = 'safaricom=blah;service=availability';
		expect(getCookiesCollection('safaricom=blah')).toEqual({
			safaricom: 'blah',
		});
		expect(getCookiesCollection(cookieString)).toEqual({
			safaricom: 'blah',
			service: 'availability',
		});
	});
});
