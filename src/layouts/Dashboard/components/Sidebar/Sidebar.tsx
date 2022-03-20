import { SidebarNav } from './components';
import { Drawer, Toolbar } from '@mui/material';

export const drawerWidth = 240;

interface Props {
	// eslint-disable-next-line @typescript-eslint/ban-types
	onSidebarClose: () => void;
	open: boolean;
	variant: 'permanent' | 'persistent' | 'temporary' | undefined;
	pages: Array<PageItem>;
}

const Sidebar = ({
	open,
	variant,
	onSidebarClose,
	pages,
}: Props): JSX.Element => {
	return (
		<Drawer
			anchor="left"
			onClose={onSidebarClose}
			open={open}
			variant={variant}
			sx={{
				'& .MuiPaper-root': {
					width: '100%',
					maxWidth: drawerWidth,
					height: { xs: '100%' },
				},
			}}
		>
			<Toolbar variant={'dense'} />
			<SidebarNav pages={pages} onSidebarClose={onSidebarClose} />
		</Drawer>
	);
};

export default Sidebar;
