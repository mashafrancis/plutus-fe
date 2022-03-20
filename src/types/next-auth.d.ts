import { Session } from 'next-auth';

declare module 'next-auth' {
	interface Session {
		user: {
			name: string | null;
			email: string | null;
			accessToken: string | null;
			refreshToken: string | null;
			accessTokenExpires: string | null;
		};
	}
}
