import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Minimal from 'layouts/Minimal';
import Container from 'components/Container';
import { Form, MobileForm } from './components';
import { Grid } from '@mui/material';
import {
	LoginIllustration,
	LoginMobileIllustration,
} from '@svg/illustrations';

const LoginView = (): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	return (
		// <Minimal>
			<Box
				position="relative"
				minHeight="100vh"
				display="flex"
				alignItems="center"
				justifyContent="center"
				// sx={{
				// 	width: 1,
				// 	height: 1,
				// 	overflow: 'hidden',
				// }}
			>
				<Container
					maxWidth={{ sm: 720, md: 960 }}
					// paddingY={{ xs: 0, sm: 6, md: 8 }}
					// paddingX={{ xs: 0, md: 2 }}
				>
					<Grid
						container
						direction="row"
						justifyContent="space-evenly"
						alignItems="center"
						spacing={0}
					>
						{/*<Grid item xs={4} maxHeight={{ xs: '100vh', md: 'unset' }}>*/}
						{/*	<LoginMobileIllustration />*/}
						{/*</Grid>*/}
						<Grid
							item
							xs={12}
							// md={5}
						>
							{<MobileForm />}
						</Grid>
					</Grid>
				</Container>
			</Box>
		// </Minimal>
	);
};

export default LoginView;
