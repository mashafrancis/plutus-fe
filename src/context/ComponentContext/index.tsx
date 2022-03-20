import { useState, createContext, SyntheticEvent, MouseEvent } from 'react';
import { ComponentContextProps, ComponentContextState } from './interfaces';

const selectedIndex = JSON.parse(
	typeof window !== 'undefined'
		? (window.localStorage.getItem('selectedIndex') as string)
		: '0',
);

const ComponentContext = createContext({
	isMenuOpen: false,
	selectedIndex: selectedIndex ?? 0,
	setMenuOpen: (_open: boolean) => {},
	setSelectedIndex: (_selectedIndex: number) => {},
	setSnackMessage: (_message: string) => {},
	setOpenSnack: (_open: boolean) => {},
	handleCloseSnack: (e: any) => {},
	snackMessage: '',
	isSnackOpen: false,
});

const ComponentProvider = ({
	children,
	...props
}: ComponentContextProps): JSX.Element => {
	const [state, setState] = useState<ComponentContextState>({
		isOpen: false,
		isMenuOpen: false,
		selectedIndex:
			JSON.parse(
				typeof window !== 'undefined'
					? (window.localStorage.getItem('selectedIndex') as string)
					: '0',
			) ?? 0,
		isSnackOpen: false,
		snackMessage: '',
	});

	const setMenuOpen = (isOpen: boolean) =>
		setState((prevState) => ({ ...prevState, isMenuOpen: isOpen }));

	const setOpenSnack = (isOpen: boolean) =>
		setState((prevState) => ({ ...prevState, isSnackOpen: isOpen }));

	const setSnackMessage = (message: string) =>
		setState((prevState) => ({ ...prevState, snackMessage: message }));

	const setSelectedIndex = (selectedIndex: number) => {
		setState((prevState) => ({ ...prevState, selectedIndex }));
		window.localStorage.setItem(
			'selectedIndex',
			JSON.stringify(selectedIndex),
		);
	};

	const handleCloseSnack = (
		event: SyntheticEvent | MouseEvent,
		reason?: string,
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setState((prevState) => ({ ...prevState, isSnackOpen: false }));
	};

	const {
		// eslint-disable-next-line no-shadow
		selectedIndex,
		isMenuOpen,
		isSnackOpen,
		snackMessage,
	} = state;

	return (
		<ComponentContext.Provider
			value={{
				isMenuOpen,
				selectedIndex,
				setSelectedIndex,
				setMenuOpen,
				setSnackMessage,
				handleCloseSnack,
				setOpenSnack,
				isSnackOpen,
				snackMessage,
				...props,
			}}
		>
			{children}
		</ComponentContext.Provider>
	);
};

export { ComponentContext, ComponentProvider };
