import { Stack, Typography, Box } from '@mui/material';
import dayjs from '@utils/dayjsTime';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Logo from '@components/atoms/Logo';
import { ArrowForward, ArrowRightAlt } from '@mui/icons-material';

const MobileFormView = (): JSX.Element => {
	const { push } = useRouter();
	const handleDashboard = () => push('/login');

	const firstColumn = (): JSX.Element => (
		<Stack
			direction="column"
			justifyContent="flex-start"
			alignItems="flex-start"
			spacing={1}
		>
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
		</Stack>
	);

	const secondColumn = (): JSX.Element => (
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
	);

	const thirdColumn = (): JSX.Element => (
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
	);

	return (
		<Stack
			direction="column"
			justifyContent="space-around"
			alignItems="flex-start"
			spacing={10}
			marginRight={'12px'}
		>
			{firstColumn()}
			{secondColumn()}
			{thirdColumn()}
		</Stack>
	);
};

export default MobileFormView;
