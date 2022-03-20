const generateUrlWithQuery = (
	url: string,
	queryParams: Record<string, string | string[]> = {},
) => {
	if (!queryParams) return url;
	const queryKeys = Object.keys(queryParams);
	let endpoint = `${url}?`;

	if (queryKeys.length > 0) {
		queryKeys.forEach((key) => {
			if (key !== 'query') {
				endpoint = `${endpoint}${key}=${queryParams[key]}&`;
			}
		});
	}

	return endpoint.substr(0, endpoint.length - 1);
};

export default generateUrlWithQuery;
