/* eslint-disable react/prop-types */
import Head from 'next/head';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/utils';
import { CacheProvider } from '@emotion/react';
import { SessionProvider } from 'next-auth/react';
import { wrapper } from '../lib/store';
import { SWRConfig } from 'swr';
// components
import Page from '../components/Page';
import createEmotionCache from '../createEmotionCache';
import { ErrorBoundary } from '@components/molecules/ErrorBoundary';
// styles
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'aos/dist/aos.css';
import 'assets/css/index.css';
import 'assets/css/fonts.css';
import { ErrorBoundaryPage } from '@views/index';

interface Props extends AppProps {
	emotionCache?: EmotionCache;
	fallback?: Record<string, any>;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = ({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: Props): JSX.Element => {
	const localStorageProvider = () => {
		const isBrowser: boolean = ((): boolean =>
			typeof window !== 'undefined')();
		// When initializing, we restore the data from `localStorage` into a map.
		const map = new Map(
			JSON.parse(isBrowser ? localStorage.getItem('app-cache') : '' || '[]'),
		);

		// Before unloading the app, we write back all the data into `localStorage`.
		isBrowser &&
			window.addEventListener('beforeunload', () => {
				const appCache = JSON.stringify(Array.from(map.entries()));
				localStorage.setItem('app-cache', appCache);
			});

		return map;
	};

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<title>Plutus | the finance god</title>
			</Head>
			<ErrorBoundary
				FallbackComponent={ErrorBoundaryPage}
				onReset={() => window.location.replace('/')}
			>
				<SessionProvider session={pageProps.session}>
					{/*<SWRConfig*/}
					{/*	value={{*/}
					{/*		refreshInterval: 3000,*/}
					{/*		fetcher: (resource, init) =>*/}
					{/*			fetch(resource, init).then((res) => res.json()),*/}
					{/*		provider: localStorageProvider,*/}
					{/*	}}*/}
					{/*>*/}
					<Page>
						<Component {...pageProps} />
					</Page>
					{/*</SWRConfig>*/}
				</SessionProvider>
			</ErrorBoundary>
		</CacheProvider>
	);
};

export default wrapper.withRedux(App);
