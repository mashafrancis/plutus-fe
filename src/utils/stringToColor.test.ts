import stringToColor from '@utils/stringToColor';

describe('The stringToColor helper function', () => {
	const url = '/';
	it('should generate color from string', () => {
		expect(stringToColor('safaricom')).toEqual('#0142c9');
	});
});
