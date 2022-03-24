import { useContext, createElement } from 'react';
// third-party libraries
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { DashboardMenus } from '@components/molecules/MenuRoutes';
import { ComponentContext } from '@context/ComponentContext';
import { Box } from '@mui/material';
import Container from '@components/Container';
import Dashboard from '../../layouts/Dashboard';
import { TabPanel } from '@components/atoms';

const Index = (): JSX.Element => {
	const theme = useTheme();

	const history = useRouter();

	const { selectedIndex } = useContext(ComponentContext);

	return (
		<Box
			sx={{ overflowX: 'hidden', background: theme.palette.alternate.main }}
		>
			<Dashboard>
				<Container
					sx={{ position: 'relative' }}
					maxWidth={{ sm: 720, md: '90%' }} // Replace md with 1440px if it doesn't work
					width={1}
					paddingY={{ xs: 1, sm: 6, md: 3 }}
					paddingX={{ xs: 1 }}
				>
					<TabPanel index={selectedIndex} value={selectedIndex}>
						{createElement(DashboardMenus[selectedIndex].component, {
							history,
						})}
					</TabPanel>
				</Container>
			</Dashboard>
		</Box>
	);
};

export default Index;
