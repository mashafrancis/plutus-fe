import dynamicSort from '@utils/dynamicSort';

const unsortedData = [
	{ name: 'Cherry' },
	{ name: 'Apple' },
	{ name: 'Banana' },
];
const sortedDataAsc = [
	{ name: 'Apple' },
	{ name: 'Banana' },
	{ name: 'Cherry' },
];
const sortedDataDesc = [
	{ name: 'Cherry' },
	{ name: 'Banana' },
	{ name: 'Apple' },
];

describe('The dynamicSort helper function', () => {
	it('should sort and array ascending', () => {
		expect(unsortedData.sort(dynamicSort('name', 'asc'))).toEqual(
			sortedDataAsc,
		);
	});
	it('should sort and array descending', () => {
		expect(unsortedData.sort(dynamicSort('name', 'desc'))).toEqual(
			sortedDataDesc,
		);
	});
	it('should not sort array if elements are the same', () => {
		expect(
			[{ name: 'Cherry' }, { name: 'Cherry' }].sort(
				dynamicSort('name', 'asc'),
			),
		).toEqual([{ name: 'Cherry' }, { name: 'Cherry' }]);
	});
});
