import dayjsTime from '@utils/dayjsTime';

describe('The dayjsTime helper function', () => {
	const now = dayjsTime.utc().utcOffset(0, true).toISOString();
	it('should generate color from string', () => {
		expect(typeof now).toBe('string');
	});
});
