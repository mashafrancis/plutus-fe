import {
	ReactNode,
	useState,
	useEffect,
	createContext,
	useContext,
} from 'react';
import { Sidebar, Topbar } from './components';
import {
	Box,
	Button,
	Chip,
	Drawer,
	Stack,
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery,
} from '@mui/material';
import MuiAppBar, {
	AppBarProps as MuiAppBarProps,
} from '@mui/material/AppBar';
import { alpha, styled, useTheme } from '@mui/material/styles';
import Container from '@components/Container';
import { drawerWidth } from './components/Sidebar/Sidebar';
import { pages } from '../navigation';
import { DashboardContext } from '@context/DashboardContext';
import { LinearProgressBar, MenuContent } from '@components/atoms';
import { FirstPageRounded, LastPageRounded } from '@mui/icons-material';

interface Props {
	children: ReactNode;
	pageTitle?: string | ReactNode;
	sideMenuInfo?: string | ReactNode;
	isSideDrawerOpen?: boolean;
	showOrHideDetails?: () => void;
	showDetailsPanelSelect?: boolean;
	showTimeRangeSelect?: boolean;
	showManagementZonesSelect?: boolean;
	showPeakValue?: boolean;
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
	pageTitle = '',
	sideMenuInfo = '',
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

	const dashboardMenuDetails = () => (
		<Box
			bgcolor={'alternate.main'}
			marginLeft={{ md: `${drawerWidth}px` }}
			sx={{
				borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
				borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
				// zIndex: theme.zIndex.drawer + 1,
				position: 'relative',
			}}
		>
			<Container
				sx={{ position: 'relative' }}
				maxWidth={{ sm: 720, md: '95%' }}
				width={1}
				paddingY={{ xs: 1 }}
				paddingX={{ xs: 0 }}
			>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					spacing={2}
				>
					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
						spacing={2}
					>
						<Typography
							sx={{
								padding: '6px 0',
								width: 'fit-content',
								fontWeight: 500,
								[theme.breakpoints.down('sm')]: {
									fontSize: 11,
									paddingLeft: 2,
									paddingRight: 2,
								},
							}}
							variant="body2"
							color="primary"
						>
							{pageTitle}
						</Typography>
						<Chip
							label={sideMenuInfo}
							color="secondary"
							size="small"
							sx={{
								display: sideMenuInfo ? 'flex' : 'none',
							}}
						/>
					</Stack>
					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
						spacing={2}
					>
						<Tooltip
							title={`${isSideDrawerOpen ? 'Hide' : 'Show'} details panel`}
						>
							<Button
								sx={{
									fontWeight: 500,
									display: showDetailsPanelSelect ? 'flex' : 'none',
									minWidth: 'unset',
								}}
								variant="outlined"
								onClick={showOrHideDetails}
							>
								{isSideDrawerOpen ? <LastPageRounded /> : <FirstPageRounded />}
							</Button>
						</Tooltip>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);

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

			<Sidebar
				onSidebarClose={handleSidebar}
				open={isSidebarOpen}
				variant={isMd ? 'permanent' : 'temporary'}
				pages={pages}
			/>
			{dashboardMenuDetails()}
			<Main open={isSideDrawerOpen}>
				<Box
					display="flex"
					flex="1 1 auto"
					overflow="hidden"
					marginLeft={{ md: `${drawerWidth}px` }} // Replace with 148px if it doesn't work
				>
					<Box display="flex" flex="1 1 auto" overflow="hidden">
						<Box flex="1 1 auto" height="100%" overflow="auto">
							<Container
								sx={{ position: 'relative' }}
								maxWidth={{ sm: 720, md: '95%' }} // Replace md with 1440px if it doesn't work
								width={1}
								paddingY={{ xs: 1 }}
								paddingX={{ xs: 0 }}
							>
								{isMounted ? children : <LinearProgressBar />}
							</Container>
						</Box>
					</Box>
				</Box>
			</Main>
		</Box>
	);
};

export default Dashboard;
