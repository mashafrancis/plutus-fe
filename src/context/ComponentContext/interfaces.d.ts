import { ReactNode } from 'react';

export interface ComponentContextProps {
	children: ReactNode;
}

export interface ComponentContextState {
	isOpen: boolean;
	isMenuOpen: boolean;
	selectedIndex: number;
	isSnackOpen: boolean;
	snackMessage: string;
}
