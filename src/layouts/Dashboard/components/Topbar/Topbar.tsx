import Box from '@mui/material/Box';
// components
import { DarkModeToggler } from '@components/atoms';
import CustomAvatar from '@components/molecules/CustomAvatar';
import Logo from '@components/atoms/Logo';
import { Theme, Tooltip, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Topbar = (): JSX.Element => {
	const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
	const theme = useTheme();

	// :TODO: Add dark mode toggler
	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
		>
			<Box sx={{ display: isSm ? 'flex' : 'none' }} alignItems={'center'}>
				<Logo />
			</Box>

			{/*<SearchBox />*/}

			<Box sx={{ display: isSm ? 'flex' : 'none' }} alignItems={'center'}>
				<Tooltip title="Toggle theme mode">
					<Box
						sx={{ display: isSm ? 'none' : 'none' }}
						marginLeft={isSm ? 3 : 1}
					>
						<DarkModeToggler
							moonColor={theme.palette.secondary.main}
							sunColor={theme.palette.primary.main}
						/>
					</Box>
				</Tooltip>
				<Box marginLeft={isSm ? 3 : 1}>
					<CustomAvatar />
				</Box>
			</Box>
		</Box>
	);
};

export default Topbar;
