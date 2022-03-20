const getCookiesCollection = (rawCookie: string): Record<string, string> => {
	const cookies: Record<string, string> = {};
	rawCookie &&
		rawCookie.split(';').forEach((cookie: string) => {
			const parts: RegExpMatchArray | null = cookie.match(/(.*?)=(.*)$/);
			if (parts && parts.length) {
				cookies[parts[1].trim()] = (parts[2] || '').trim();
			}
		});

	return cookies;
};

export default getCookiesCollection;
