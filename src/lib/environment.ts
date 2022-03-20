interface Environment {
	// environment: string;
	// isProduction: boolean;
	apiUrl: string;
	clientUrl: string;
	// baseDomain: string;
	apiToken: string;
}

export const environment: Environment = {
	// environment: process.env.NEXT_PUBLIC_ENVIRONMENT!,
	// isProduction: process.env.NEXT_PUBLIC_ENVIRONMENT! === 'production',
	apiUrl: process.env.NEXT_PUBLIC_API_URL!,
	clientUrl: process.env.NEXT_PUBLIC_URL!,
	// baseDomain: process.env.BASE_DOMAIN!,
	apiToken: process.env.NEXT_API_TOKEN!,
};

export default environment;
