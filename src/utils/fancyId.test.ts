import fancyId from '@utils/fancyId';

const fancyId1 = fancyId();
const fancyId2 = fancyId();

describe('The fancyId helper function', () => {
	it('should generate a unique ID when called', () => {
		expect(fancyId1).not.toEqual(fancyId2);
	});
	it('string should have an underscore _ and be a string', () => {
		expect(fancyId1).toBeDefined();
		expect(fancyId1).toContain('_');
	});
});
