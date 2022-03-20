import { useState, useEffect, createContext, useMemo, ReactNode } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import AOS from 'aos';
import { PaletteMode } from '@mui/material';
import getTheme from '../theme';
import { ComponentProvider } from '@context/ComponentContext';
import { DashboardProvider } from '@context/DashboardContext';
import { useDispatch, useSelector } from 'react-redux';
import { OurStore } from '../lib/store';
import { SnackBar } from '@components/atoms';
import { ErrorBoundaryPage } from '@views/index';
import { ErrorBoundary } from '@components/molecules/ErrorBoundary';
import { useRouter } from 'next/router';
import { displaySnackMessage } from '../lib/slices/snack';

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

interface Props {
	children: ReactNode;
}

const Page = ({ children }: Props): JSX.Element => {
	const [mode, setMode] = useState<'light' | 'dark'>('light');
	const { data: session } = useSession();
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles);
		}

		AOS.init({
			once: true,
			delay: 50,
			duration: 500,
			easing: 'ease-in-out',
		});
	}, []);

	useEffect(() => {
		if (session?.error === 'RefreshAccessTokenError') {
			dispatch(
				displaySnackMessage({
					message: 'Your token has expired. Kindly login to continue.',
				}),
			);
			router.push('/login');
			// signIn();
		}
	}, [session]);

	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = useMemo(() => getTheme(mode as PaletteMode), [mode]);

	const snack = useSelector((store: OurStore) => store.snack);

	return (
		<StyledEngineProvider injectFirst>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={theme}>
					<ErrorBoundary
						FallbackComponent={ErrorBoundaryPage}
						onReset={() => window.location.replace('/')}
					>
						<DashboardProvider>
							<ComponentProvider>
								<style jsx>{`
									a {
										margin: 0 10px 0 0;
									}
								`}</style>
								{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
								<CssBaseline />
								{<Paper elevation={0}>{children}</Paper>}
								<SnackBar snack={snack} />
							</ComponentProvider>
						</DashboardProvider>
					</ErrorBoundary>
				</ThemeProvider>
			</ColorModeContext.Provider>
		</StyledEngineProvider>
	);
};

export default Page;
