import { Box, Divider, Drawer, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';

const drawerWidth = 450;

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// backgroundColor: alpha(theme.palette.divider, 0.1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

interface Props {
	drawerTitle: string | JSX.Element;
	drawerBody: JSX.Element;
	isDrawerOpen: boolean;
	handleToggleDrawer: () => void;
}

const SideDrawerDetails = ({
	drawerTitle,
	drawerBody,
	isDrawerOpen,
	handleToggleDrawer,
}: Props): JSX.Element => {
	const theme = useTheme();

	return (
		<Drawer
			sx={{
				width: drawerWidth,
				top: '100px',
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					top: '100px',
				},
			}}
			variant="persistent"
			anchor="right"
			open={isDrawerOpen}
		>
			{/*<Toolbar variant={'dense'} />*/}
			<Box
				height={1}
				sx={{ backgroundColor: (theme) => theme.palette.alternate.main }}
			>
				<DrawerHeader>
					<IconButton
						aria-label="close"
						sx={{
							color: (theme) => theme.palette.primary.main,
						}}
						onClick={handleToggleDrawer}
					>
						{theme.direction === 'rtl' ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
					{drawerTitle}
				</DrawerHeader>
				<Divider />
				{drawerBody}
			</Box>
		</Drawer>
	);
};

export default SideDrawerDetails;
