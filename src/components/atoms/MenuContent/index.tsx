import { ChangeEvent, useContext } from 'react';
// components
import { ComponentContext } from '@context/ComponentContext';
import { MenuTab, MenuTabs } from '@components/atoms';
import { DashboardMenus } from '@components/molecules/MenuRoutes';

const MenuContent = (): JSX.Element => {
	const { selectedIndex, setSelectedIndex } = useContext(ComponentContext);

	const handleOnChange = (
		event: ChangeEvent<HTMLDivElement>,
		value: number,
	) => {
		setSelectedIndex(value);
	};

	const a11yProps = (index: number | string) => {
		return {
			id: `menu-tab-${index}`,
			'aria-controls': `menu-tabpanel-${index}`,
		};
	};

	return (
		<MenuTabs
			style={{ padding: 20 }}
			value={selectedIndex}
			// @ts-expect-error
			onChange={handleOnChange}
			orientation="vertical"
			scrollButtons={false}
			textColor="primary"
			aria-label="menu tabs"
			visibleScrollbar={false}
		>
			{DashboardMenus.slice(0, 6).map((item) => (
				<MenuTab
					key={item.primaryText}
					label={item.primaryText}
					icon={item.icon}
					{...a11yProps(selectedIndex)}
				/>
			))}
		</MenuTabs>
	);
};

export default MenuContent;
