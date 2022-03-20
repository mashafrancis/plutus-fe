// views
import PeopleView from 'views/PeopleView';
// third-party-icons
import { WidgetsRounded } from '@mui/icons-material';
// interfaces
import { MenuComponentProps } from '@components/molecules/MenuRoutes/interfaces';

export const DashboardMenus: MenuComponentProps[] = [
	{
		icon: <WidgetsRounded />,
		primaryText: 'People',
		component: PeopleView,
		id: 'people',
	},
];
