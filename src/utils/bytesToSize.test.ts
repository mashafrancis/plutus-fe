import bytesToSize from '@utils/bytesToSize';

describe('The bytes to size helper function', () => {
	it('should convert number size 0 to 0 Bytes', () => {
		expect(bytesToSize(0)).toEqual('0 Bytes');
	});
	it('should convert number size 1024 to 1 KB', () => {
		expect(bytesToSize(1024)).toEqual('1 KB');
	});
	it('should convert number size 1024 to 1 KB with decimal less than 0', () => {
		expect(bytesToSize(1024, -2)).toEqual('1 KB');
	});
	it('should convert other numbers to their sizes suffix', () => {
		expect(bytesToSize(1024 * 1024)).toEqual('1 MB');
		expect(bytesToSize(1024 * 1024 * 1024)).toEqual('1 GB');
		expect(bytesToSize(1024 * 1024 * 1024 * 1024)).toEqual('1 TB');
		expect(bytesToSize(1024 * 1024 * 1024 * 1024 * 1024)).toEqual('1 PB');
		expect(bytesToSize(1024 * 1024 * 1024 * 1024 * 1024 * 1024)).toEqual(
			'1 EB',
		);
		expect(
			bytesToSize(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024),
		).toEqual('1 ZB');
		expect(
			bytesToSize(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024),
		).toEqual('1 YB');
	});
});
