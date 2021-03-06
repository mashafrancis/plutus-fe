import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HomeIllustration } from '@svg/illustrations';
import { useRouter } from 'next/router';
import Container from '@components/Container';
import { ArrowForward } from '@mui/icons-material';

const Hero = (): JSX.Element => {
	const theme = useTheme();
	const { push } = useRouter();

	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const handleDashboard = () => push('/login');

	const LeftSide = () => (
		<Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
			<Box marginBottom={2}>
				<Typography variant="h2" color="text.primary" sx={{ fontWeight: 700 }}>
					The secret lives of
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
						finances.
					</Typography>
				</Typography>
			</Box>
			<Box marginBottom={3}>
				<Typography variant="h6" component="p" color="text.secondary">
					“Too many people spend money they earned..to buy things they don’t
					want..to impress people that they don’t like.”
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
					endIcon={<ArrowForward />}
				>
					Proceed to dashboard
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
		<Container
			paddingX={0}
			paddingTop={{ xs: 8, sm: 6, md: 0 }}
			maxWidth={{ sm: 1, md: 1236 }}
			minHeight={isMd ? 'unset' : '100vh'}
		>
			<Box
				display={'flex'}
				flexDirection={{ xs: 'column', md: 'row' }}
				position={'relative'}
				minHeight={isMd ? '100vh' : 'unset'}
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
	);
};

export default Hero;
