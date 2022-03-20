import generateUrlWithQuery from '@utils/generateUrlWithQuery';

describe('The generateUrlWithQuery helper function', () => {
	const url = '/';
	it('should generate a url with query params', () => {
		expect(generateUrlWithQuery(url, { id: '1', name: 'safaricom' })).toEqual(
			'/?id=1&name=safaricom',
		);
	});
	it('should return the same url if no query params are given', () => {
		expect(generateUrlWithQuery(url, null)).toEqual(url);
		expect(generateUrlWithQuery(url, undefined)).toEqual(url);
		expect(generateUrlWithQuery(url, {})).toEqual(url);
	});
});
