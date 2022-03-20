import { InputBase, useMediaQuery } from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import CustomAvatar from '@components/molecules/CustomAvatar';
import { MenuRounded } from '@mui/icons-material';
import { useContext } from 'react';
import { DashboardContext } from '@context/DashboardContext';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	border: '1px solid #e5e8ec',
	borderRadius: '50px',
	borderColor: theme.palette.divider,
	backgroundColor: theme.palette.alternate.main,
	'&:hover': {
		backgroundColor: alpha(theme.palette.primary.main, 0.1),
	},
	marginRight: 0,
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		borderRadius: theme.shape.borderRadius,
		marginRight: theme.spacing(2),
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'text.main',
	width: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '40vw',
		},
	},
}));

const SearchBox = (): JSX.Element => {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	const { handleSidebar } = useContext(DashboardContext);

	return (
		<Search>
			<SearchIconWrapper>
				{isMd ? (
					<SearchIcon color="primary" />
				) : (
					<MenuRounded
						sx={{ color: theme.palette.text.primary, zIndex: 2000 }}
						onClick={handleSidebar}
					/>
				)}
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Search"
				inputProps={{ 'aria-label': 'search' }}
				endAdornment={!isMd && <CustomAvatar />}
			/>
		</Search>
	);
};

export default SearchBox;
