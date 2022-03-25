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
		<Minimal>
			<Box
				sx={{
					width: 1,
					height: 1,
					overflow: 'hidden',
				}}
			>
				<Container
					paddingY={{ xs: 0, sm: 6, md: 8 }}
					paddingX={{ xs: 0, md: 2 }}
				>
					<Grid container spacing={1}>
						{isMd ? (
							<Grid item container justifyContent={'center'} xs={12} md={6}>
								<Box height={1} width={1} maxWidth={500}>
									<LoginIllustration />
								</Box>
							</Grid>
						) : (
							<Grid item container xs={4}>
								<Box height={1} width={1}>
									<LoginMobileIllustration />
								</Box>
							</Grid>
						)}
						<Grid
							item
							container
							alignItems="center"
							justifyContent="center"
							xs={8}
							// md={5}
						>
							{<MobileForm />}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Minimal>
	);
};

export default LoginView;
