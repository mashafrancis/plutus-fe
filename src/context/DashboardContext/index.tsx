import { createContext, ReactNode, useEffect, useState } from 'react';
import dayjsTime from '@utils/dayjsTime';
import { DateRange } from '@mui/lab/DateRangePicker';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useStorage from '@hooks/useLocalStorage';

interface Props {
	children: ReactNode;
}

const mZoneId =
	typeof window !== 'undefined'
		? (window.localStorage.getItem('mZoneId') as string)
		: '';

const DashboardContext = createContext({
	handleSidebar: () => {},
	isSidebarOpen: false,
	dateRange: null,
	handleStartDate: ({ _startDate = '' }: Record<string, string>) => {},
	selectedRangeDisplay: '2 hour',
	startDate: '',
	endDate: '',
	handleManagementZone: (_zone: string) => {},
	managementZoneId: '',
	setManagementZoneId: (_zone: string) => {},
});

const DashboardProvider = ({ children }: Props) => {
	const now = dayjsTime.utc().utcOffset(0, true).toISOString();
	const [openSidebar, setOpenSidebar] = useState<boolean>(false);
	const [dateRange, setDateRange] = useState<DateRange<Date>>([null, null]);
	const [startDate, setStartDate] = useState<string | null>(null);
	const [endDate, setEndDate] = useState<string>(now);
	const [selectedRangeDisplay, setSelectedRangeDisplay] =
		useState<string>('2 hours');
	const [managementZoneId, setManagementZoneId] = useState<string>(mZoneId);

	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	});

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	//     console.log('Class: , Function: , Line 40 interval():', 'interval');
	// 		setEndDate(dayjsTime.utc().utcOffset(0, true).toISOString());
	// 	}, 60_000);
	//
	// 	return () => clearInterval(interval);
	// }, []);

	const handleStartDate = (selectedStartDate) => {
		let time: string;

		const selectedRangeKey = Object.keys(selectedStartDate)[0];
		const selectedRangeValue = selectedStartDate[selectedRangeKey];

		switch (selectedRangeKey) {
			case 'minute':
				setSelectedRangeDisplay(`${selectedRangeValue} minutes`);
				time = dayjsTime
					.utc()
					.utcOffset(0, true)
					.subtract(selectedRangeValue, 'minute')
					.toISOString();
				break;
			case 'hour':
				setSelectedRangeDisplay(`${selectedRangeValue} hours`);
				time = dayjsTime
					.utc()
					.utcOffset(0, true)
					.subtract(selectedRangeValue, 'hour')
					.toISOString();
				break;
			case 'day':
				setSelectedRangeDisplay(`${selectedRangeValue} days`);
				time = dayjsTime
					.utc()
					.utcOffset(0, true)
					.subtract(selectedRangeValue, 'day')
					.toISOString();
				break;
			default:
				return (time = dayjsTime.utc().utcOffset(0, true).toISOString());
		}

		// const time = dayjsTime.utc().utcOffset(0, true).subtract(7, 'days').toISOString();
		// const time = dayjsTime().subtract(7, 'days').toISOString();
		// console.log('Class: , Function: handleStartDate, Line 100 time():', time);
		setStartDate(time);
	};

	const handleSidebar = (): void => setOpenSidebar((prevState) => !prevState);

	const handleManagementZone = (zone: string): void => {
		setManagementZoneId(zone);
		// if (typeof window !== "undefined") {
		//   setManagementZoneId(zone);
		// }
	};

	return (
		<DashboardContext.Provider
			value={{
				handleSidebar,
				isSidebarOpen: isMd ? false : openSidebar,
				dateRange,
				handleStartDate,
				selectedRangeDisplay,
				startDate,
				endDate,
				managementZoneId,
				handleManagementZone,
				setManagementZoneId,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};

export { DashboardContext, DashboardProvider };
