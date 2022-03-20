import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { HomeIllustration } from '@svg/illustrations';
import { useRouter } from 'next/router';

const Hero = (): JSX.Element => {
	const theme = useTheme();
	const { push } = useRouter();

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const handleDashboard = () => push('/dashboard/people');

	return (
		<Grid container spacing={4}>
			<Grid item container xs={12} md={6} alignItems={'center'}>
				<Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
					<Box marginBottom={2}>
						<Typography
							variant="h2"
							color="text.primary"
							sx={{ fontWeight: 700 }}
						>
							Lorem ipsum dolor sit
							<br />
							<Typography
								color={'primary'}
								component={'span'}
								variant={'inherit'}
								sx={{
									background: `linear-gradient(180deg, transparent 82%, ${alpha(
										theme.palette.secondary.main,
										0.3,
									)} 0%)`,
								}}
							>
								consectetur
							</Typography>
						</Typography>
					</Box>
					<Box marginBottom={3}>
						<Typography variant="h6" component="p" color="text.secondary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
						</Typography>
					</Box>
					<Box
						display="flex"
						flexDirection={{ xs: 'column', sm: 'row' }}
						alignItems={{ xs: 'stretched', sm: 'flex-start' }}
					>
						<Button
							variant="contained"
							color="primary"
							size="large"
							fullWidth={!isMd}
							onClick={handleDashboard}
						>
							Dashboard
						</Button>
						<Box
							component={Button}
							color="primary"
							size="large"
							marginTop={{ xs: 2, sm: 0 }}
							marginLeft={{ sm: 2 }}
							fullWidth={!isMd}
							endIcon={
								<Box
									component={'svg'}
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 20"
									width={24}
									height={24}
								>
									<path
										fillRule="evenodd"
										d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
										clipRule="evenodd"
									/>
								</Box>
							}
						>
							Learn more
						</Box>
					</Box>
				</Box>
			</Grid>
			<Grid
				item
				container
				alignItems={'center'}
				justifyContent={'center'}
				xs={12}
				md={6}
				sx={{
					'& .lazy-load-image-background.lazy-load-image-loaded': {
						width: '100%',
						height: '100%',
					},
				}}
			>
				<HomeIllustration />
			</Grid>
		</Grid>
	);
};

export default Hero;
