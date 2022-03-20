import Container from '@components/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { ServerErrorIllustration } from '@svg/illustrations';

interface Props {
	statusCode?: number | string;
}

const ServerError = ({ statusCode }: Props): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});
	const router = useRouter();

	return (
		<Box
			bgcolor={theme.palette.alternate.main}
			position={'relative'}
			minHeight={'100vh'}
			display={'flex'}
			alignItems={'center'}
			justifyContent={'center'}
			height={1}
		>
			<Container>
				<Grid container>
					<Grid item container justifyContent={'center'} xs={12} md={6}>
						<Box height={1} width={1} maxWidth={500}>
							<ServerErrorIllustration />
						</Box>
					</Grid>
					<Grid
						item
						container
						alignItems={'center'}
						justifyContent={'center'}
						xs={12}
						md={6}
					>
						<Box>
							<Typography
								variant="h6"
								component="p"
								color="text.secondary"
								align={isMd ? 'left' : 'center'}
							>
								{statusCode
									? `An error ${statusCode} occurred on server`
									: 'An error occurred on client'}
								. Please try again later or if you think this is a problem with
								us, please{' '}
								<Link href="" underline="none">
									tell us
								</Link>
							</Typography>
							<Box
								marginTop={4}
								display={'flex'}
								justifyContent={{ xs: 'center', md: 'flex-start' }}
							>
								<Button
									variant="contained"
									color="primary"
									size="large"
									startIcon={<ArrowBack />}
									onClick={router.reload}
								>
									Kindly reload
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ServerError;
