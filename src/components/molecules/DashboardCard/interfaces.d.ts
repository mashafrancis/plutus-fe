import { ReactNode } from 'react';

export interface DashboardCardProps {
	heading?: string;
	body: ReactNode;
	redirect?: (cardId: string) => void;
	actionItem?: ReactNode;
	sx?: any;
	[x: string]: any;
}
