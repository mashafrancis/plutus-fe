// views
import BulletinView from 'views/BulletinView';
// third-party-icons
import { WidgetsRounded } from '@mui/icons-material';
// interfaces
import { MenuComponentProps } from '@components/molecules/MenuRoutes/interfaces';

export const DashboardMenus: MenuComponentProps[] = [
	{
		icon: <WidgetsRounded />,
		primaryText: 'Bulletin',
		component: BulletinView,
		id: 'bulletin',
	},
];
