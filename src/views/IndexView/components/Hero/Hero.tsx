import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HomeIllustration } from '@svg/illustrations';
import { useRouter } from 'next/router';
import Container from '@components/Container';
import { Divider } from '@mui/material';

const Hero = (): JSX.Element => {
	const theme = useTheme();
	const { push } = useRouter();

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const handleDashboard = () => push('/dashboard/people');

	const LeftSide = () => (
		<Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
			<Box marginBottom={2}>
				<Typography variant="h2" color="text.primary" sx={{ fontWeight: 700 }}>
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
					Dashboard
				</Button>
			</Box>
		</Box>
	);

	const RightSide = (): JSX.Element => {
		return (
			<Box
				height={1}
				width={1}
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
			>
				<Box
					height={1}
					width={1}
					maxWidth={700}
					sx={{
						'& .lazy-load-image-background.lazy-load-image-loaded': {
							width: '100%',
							height: '100%',
						},
					}}
				>
					<HomeIllustration />
				</Box>
			</Box>
		);
	};

	return (
		<Box
			sx={{
				width: 1,
				height: 1,
				overflow: 'hidden',
			}}
		>
			<Container
				paddingX={0}
				paddingTop={{ xs: 8, sm: 6, md: 0 }}
				maxWidth={{ sm: 1, md: 1236 }}
			>
				<Box
					display={'flex'}
					flexDirection={{ xs: 'column', md: 'row' }}
					position={'relative'}
					minHeight={'100vh'}
				>
					<Box
						width={1}
						order={{ xs: 2, md: 1 }}
						display={'flex'}
						alignItems={'center'}
					>
						<Container>
							<LeftSide />
						</Container>
					</Box>
					<Box
						sx={{
							flex: { xs: '0 0 100%', md: '0 0 50%' },
							position: 'relative',
							maxWidth: { xs: '100%', md: '50%' },
							order: { xs: 1, md: 2 },
						}}
					>
						<Box
							sx={{
								width: { xs: 1, md: '50vw' },
								height: '100%',
								position: 'relative',
							}}
						>
							<Box
								sx={{
									width: '100%',
									height: '100%',
									overflow: 'hidden',
								}}
							>
								<Box
									sx={{
										overflow: 'hidden',
										left: '0%',
										width: 1,
										height: 1,
										position: { xs: 'relative', md: 'absolute' },
										clipPath: {
											xs: 'none',
											md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
										},
										shapeOutside: {
											xs: 'none',
											md: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
										},
									}}
								>
									<RightSide />
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
			<Divider />
		</Box>
	);
};

export default Hero;
