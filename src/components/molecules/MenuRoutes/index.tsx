// views
import AnalyticsView from 'views/AnalyticsView';
// third-party-icons
import {
	AccountBalanceWalletTwoTone,
	BeachAccessTwoTone,
	EmojiFoodBeverageTwoTone,
	LibraryBooksTwoTone,
	WidgetsRounded,
	WidgetsTwoTone,
} from '@mui/icons-material';
// interfaces
import { MenuComponentProps } from '@components/molecules/MenuRoutes/interfaces';

export const DashboardMenus: MenuComponentProps[] = [
	{
		icon: <WidgetsTwoTone />,
		primaryText: 'Analytics',
		component: AnalyticsView,
		id: 'analytics',
	},
	{
		icon: <BeachAccessTwoTone />,
		primaryText: 'Transactions',
		component: AnalyticsView,
		id: 'transactions',
	},
	{
		icon: <AccountBalanceWalletTwoTone />,
		primaryText: 'Accounts',
		component: AnalyticsView,
		id: 'accounts',
	},
	{
		icon: <LibraryBooksTwoTone />,
		primaryText: 'Reports',
		component: AnalyticsView,
		id: 'reports',
	},
	{
		icon: <EmojiFoodBeverageTwoTone />,
		primaryText: 'Budget',
		component: AnalyticsView,
		id: 'budget',
	},
];
