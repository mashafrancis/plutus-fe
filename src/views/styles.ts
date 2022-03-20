import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';

export const useTableStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& .MuiDataGrid-columnSeparator': {
				display: 'none !important',
			},
			'& .MuiDataGridCell:focusWithin': {
				// outline: 'solid #1967D2 0.8px',
				outlineOffset: '-1px',
				outline: 'none',
			},
			// '& .MuiDataGrid-colCell, .MuiDataGrid-cell': {
			// 	paddingLeft: 2,
			// 	paddingRight: 2,
			// },
			'& .MuiPaginationItemRoot': {
				borderRadius: 0,
			},
			'& .MuiDataGrid-columnHeaders': {
				backgroundColor: theme.palette.alternate.dark,
			},
			'& .MuiDataGrid-columnHeaderTitleContainer': {
				padding: '0 !important',
			},
			'& .MuiDataGrid-columnHeaderTitle': {
				// color: theme.palette.primary.main,
				fontWeight: 500,
			},
			'& .tableCell': {
				fontWeight: 500,
				fontSize: 20,
			},
			'& .MuiDataGridCell': {
				[theme.breakpoints.down('sm')]: {
					fontSize: 12,
				},
			},
			'& .MuiDataGrid-row:nth-child(even)': {
				backgroundColor: alpha(theme.palette.alternate.dark, 0.3),
			},
			'& .data-cell-grid.normal': {
				backgroundColor: '#D9E9BA',
				color: '#3E4E56',
				borderColor: '#ffffff',
			},
			'& .data-cell-grid.warn': {
				backgroundColor: 'rgba(255,176,0,0.20)',
				color: '#3E4E56',
				borderColor: '#ffffff',
			},
			'& .data-cell-grid.danger': {
				backgroundColor: '#F9E3E3',
				color: '#980910',
				borderColor: '#ffffff',
			},
		},
	}),
);
