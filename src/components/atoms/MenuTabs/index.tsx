import { Tab, Tabs } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

interface MenuTabProps {
	label?: string;
	icon?: any;
}

const MenuTabs = styled(Tabs)({
	'& .MuiTabs-indicator': {
		display: 'none',
	},
});

const MenuTab = styled((props: MenuTabProps) => (
	<Tab disableRipple {...props} />
))(({ theme }) => ({
	marginBottom: 10,
	marginTop: 10,
	textTransform: 'none',
	minWidth: 72,
	fontWeight: theme.typography.fontWeightMedium,
	'&:hover': {
		color: theme.palette.primary.main,
		// backgroundColor: theme.palette.background.level1,
		opacity: 1,
		borderRadius: theme.shape.borderRadius,
	},
	'&.Mui-selected': {
		color: theme.palette.primary.main,
		fontWeight: theme.typography.fontWeightMedium,
		backgroundColor: alpha(theme.palette.primary.main, 0.1),
		borderRadius: theme.shape.borderRadius,
	},
	'&:focus': {
		color: theme.palette.primary.main,
	},
}));

export { MenuTabs, MenuTab };
