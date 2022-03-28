import {Stack, Typography, Box, Grid, Divider} from '@mui/material';
import dayjs from '@utils/dayjsTime';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Logo from '@components/atoms/Logo';
import { ArrowForward, ArrowRightAlt } from '@mui/icons-material';
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const MobileFormView = (): JSX.Element => {
	const { push } = useRouter();
	const handleDashboard = () => push('/login');

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

	const firstColumn = (): JSX.Element => (
		<Grid item xs>
			<Stack
				direction="row"
				justifyContent="space-between"
				alignItems="center"
				spacing={2}
			>
				<Typography variant="h2">
					{dayjs(Date.now()).format('hh:mm a')}
				</Typography>
			</Stack>
			<Typography variant="h5">
				{dayjs(Date.now()).format('MMM.DD.YYYY | dddd')}
			</Typography>
		</Grid>
	);

	const secondColumn = (): JSX.Element => (
		<Grid item xs>
			<Stack
				direction="column"
				justifyContent="flex-end"
				alignItems="flex-start"
				spacing={1}
			>
				<Logo />
				<Typography variant="h3">Plutus</Typography>
				<Typography variant="h6">
					Account for your financial records income and expenses.
				</Typography>
			</Stack>
		</Grid>
	);

	const thirdColumn = (): JSX.Element => (
		<Grid item xs>
			<Button
				variant="contained"
				color="primary"
				size="large"
				fullWidth
				onClick={handleDashboard}
				endIcon={<ArrowForward />}
			>
				Login
			</Button>
		</Grid>
	);

	return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
			<Grid
				container
				direction="column"
				justifyContent="space-between"
				alignItems="stretch"
        spacing={isMd ? 8 : 16}
			>
				{firstColumn()}
				{secondColumn()}
				{thirdColumn()}
			</Grid>
		</Box>
	);
};

export default MobileFormView;
