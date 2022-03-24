import { ReactNode, useState, useEffect, useContext } from 'react';
import { Topbar } from './components';
import { Box, Drawer, Toolbar, useMediaQuery } from '@mui/material';
import MuiAppBar, {
	AppBarProps as MuiAppBarProps,
} from '@mui/material/AppBar';
import { alpha, styled, useTheme } from '@mui/material/styles';
import Container from '@components/Container';
import { DashboardContext } from '@context/DashboardContext';
import { LinearProgressBar, MenuContent } from '@components/atoms';
import { BottomNavigation } from '@components/molecules';

interface Props {
	children: ReactNode;
	isSideDrawerOpen?: boolean;
	showOrHideDetails?: () => void;
	showDetailsPanelSelect?: boolean;
}

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const Main = styled('main', {
	shouldForwardProp: (prop) => prop !== 'open',
})<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginRight: 0,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 450,
	}),
}));

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${450}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 450,
	}),
}));

const useMounted = () => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => setMounted(true), []);

	return mounted;
};

const Dashboard = ({
	children,
	isSideDrawerOpen = false,
	showOrHideDetails,
	showDetailsPanelSelect = false,
}: Props): JSX.Element => {
	const { isSidebarOpen, handleSidebar } = useContext(DashboardContext);

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});
	const isMounted = useMounted();

	return (
		<Box
			sx={{
				height: '100vh',
				flexGrow: 1,
			}}
		>
			<AppBar
				position="fixed"
				sx={{
					// background: theme.palette.alternate.main,
					background: theme.palette.background.paper,
					zIndex: theme.zIndex.drawer + 1,
					borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
				}}
				elevation={0}
			>
				<Toolbar variant={'dense'}>
					<Container
						maxWidth={1}
						paddingY={{ xs: 0 }}
						paddingX={{ xs: 0, md: 0.5 }}
					>
						<Topbar />
					</Container>
				</Toolbar>
			</AppBar>
			<Toolbar variant={'dense'} />

			{isMd && (
				<Drawer
					variant="permanent"
					PaperProps={{
						sx: {
							background: theme.palette.alternate.main,
							borderRight: 'none',
						},
					}}
				>
					<Toolbar />
					<MenuContent />
				</Drawer>
			)}

			<Main open={isSideDrawerOpen}>
				<Box
					display="flex"
					flex="1 1 auto"
					overflow="hidden"
					paddingLeft={{ md: '10%' }} // Replace with 148px if it doesn't work
				>
					<Box display="flex" flex="1 1 auto" overflow="hidden">
						<Box flex="1 1 auto" height="100%" overflow="auto">
							{isMounted ? children : <LinearProgressBar />}
						</Box>
					</Box>
				</Box>
			</Main>
			{isMd ? null : (
				<Container>
					<BottomNavigation />
				</Container>
			)}
		</Box>
	);
};

export default Dashboard;
