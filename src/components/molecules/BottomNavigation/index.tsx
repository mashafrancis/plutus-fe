import { useContext } from 'react';
// third party
import {
	BottomNavigation,
	BottomNavigationAction,
	Box,
	CssBaseline,
	Paper,
} from '@mui/material';
// components
import { ComponentContext } from '@context/ComponentContext';
import { alpha, useTheme } from '@mui/material/styles';
import { DashboardMenus } from '@components/molecules/MenuRoutes';

const PageBottomNavigation = (): JSX.Element => {
	const { selectedIndex, setSelectedIndex } = useContext(ComponentContext);
	const theme = useTheme();

	const handleChange = (event, newValue) => setSelectedIndex(newValue);

	return (
		<Box sx={{ pb: 7 }}>
			<CssBaseline />
			<Paper
				sx={{
					position: 'fixed',
					bottom: 0,
					left: 0,
					right: 0,
					background: theme.palette.alternate.main,
					// borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
				}}
				elevation={0}
				data-testid="bottom-navigation"
			>
				<BottomNavigation
					value={selectedIndex}
					onChange={handleChange}
					showLabels
				>
					{DashboardMenus.map((menuNav, index) => (
						<BottomNavigationAction
							// sx={{ fontSize: 10 }}
							key={menuNav.id}
							label={menuNav.primaryText}
							icon={menuNav.icon}
							value={index}
						/>
					))}
				</BottomNavigation>
			</Paper>
		</Box>
	);
};

export default PageBottomNavigation;
