import { Stack, Button, Box } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
// components
import { DarkModeToggler, Link } from '@components/atoms';
import CustomAvatar from '@components/molecules/CustomAvatar';
import Logo from '@components/atoms/Logo';
import { AccountCircleTwoTone } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Topbar = (): JSX.Element => {
	const theme = useTheme();
	const { push, replace } = useRouter();
	const { data: session } = useSession();

	const handleLogin = () =>
		!!session ? push('dashboard/open-problems') : push('login');

	const renderAuthButtons = () => (
		<>
			<Box marginLeft={3}>
				{!!session ? (
					<Stack direction="row" spacing={2}>
						<Button
							onClick={() => replace('dashboard')}
							variant="outlined"
							color="primary"
						>
							{'Go to dashboard'}
						</Button>
						<CustomAvatar />
					</Stack>
				) : (
					<Button
						variant="outlined"
						color="primary"
						size="medium"
						onClick={handleLogin}
						startIcon={<AccountCircleTwoTone color="primary" />}
					>
						Account
					</Button>
				)}
			</Box>
		</>
	);

	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			width={1}
		>
			<Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
				<Logo />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
				<Logo />
			</Box>

			<Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
				<Box marginLeft={3}>
					<DarkModeToggler
						moonColor={theme.palette.secondary.main}
						sunColor={theme.palette.primary.main}
					/>
				</Box>
				{renderAuthButtons()}
			</Box>
		</Box>
	);
};

export default Topbar;
