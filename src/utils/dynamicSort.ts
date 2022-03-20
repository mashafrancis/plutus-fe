const dynamicSort = (property: string, order: 'desc' | 'asc') => {
	let sort_order = 1;
	if (order === 'desc') {
		sort_order = -1;
	}
	return (a, b) => {
		if (a[property].toLowerCase() < b[property].toLowerCase()) {
			return -1 * sort_order;
		} else if (a[property].toLowerCase() > b[property].toLowerCase()) {
			return sort_order;
		} else {
			return 0;
		}
	};
};

export default dynamicSort;
