import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Minimal from 'layouts/Minimal';
import Container from 'components/Container';
import { Form } from './components';
import { Grid } from '@mui/material';
import { LoginIllustration } from '@svg/illustrations';

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
				<Container>
					<Grid container spacing={6}>
						{isMd ? (
							<Grid item container justifyContent={'center'} xs={12} md={6}>
								<Box height={1} width={1} maxWidth={500}>
									<LoginIllustration />
								</Box>
							</Grid>
						) : null}
						<Grid
							item
							container
							alignItems={'center'}
							justifyContent={'center'}
							xs={12}
							md={5}
						>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Minimal>
	);
};

export default LoginView;
