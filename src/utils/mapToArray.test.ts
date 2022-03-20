import mapToArray from '@utils/mapToArray';

describe('The mapToArray helper function', () => {
	const arrayOrObjects = [{ id: '1' }];
	const arrayOfArrays = [['1']];

	it('should convert an array of object to an array of array', () => {
		expect(mapToArray(arrayOrObjects)).toEqual(arrayOfArrays);
	});
});
