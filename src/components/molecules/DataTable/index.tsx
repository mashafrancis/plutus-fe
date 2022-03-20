import {
	DataGrid,
	GridColDef,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarFilterButton,
} from '@mui/x-data-grid';
import {
	CustomLoadingOverlay,
	CustomPagination,
	CustomNoRowsOverlay,
	CustomErrorOverlay,
} from '@components/atoms';
import { Divider } from '@mui/material';
import { useTableStyles } from '@views/styles';
import { useDispatch } from 'react-redux';
import { ReactElement } from 'react';

interface Props {
	rows: any;
	columns: GridColDef[];
	onSelectionModel?: (newSelectionModel) => void;
	selectionModel?: any;
	isLoading?: boolean;
	onRowDoubleClick?: () => void;
	documentExportName?: string;
	error?: any;
	otherToolbarElements?: ReactElement | null;
}

const DataTable = ({
	rows,
	columns,
	onSelectionModel,
	selectionModel,
	isLoading,
	onRowDoubleClick,
	documentExportName = 'download',
	error = undefined,
	otherToolbarElements = null,
	...rest
}: Props): JSX.Element => {
	const classes = useTableStyles();

	const dispatch = useDispatch();

	const customToolbar = () => {
		return (
			<GridToolbarContainer>
				<GridToolbarColumnsButton />
				<Divider orientation="vertical" variant="middle" flexItem />
				<GridToolbarFilterButton />
				<Divider orientation="vertical" variant="middle" flexItem />
				<GridToolbarDensitySelector />
				<Divider orientation="vertical" variant="middle" flexItem />
				{otherToolbarElements}
			</GridToolbarContainer>
		);
	};

	return (
		<div style={{ height: '85vh', width: '100%' }}>
			<div style={{ display: 'flex', height: '100%' }}>
				<div style={{ flexGrow: 1 }} className={classes.root}>
					<DataGrid
						{...rest}
						rows={rows}
						columns={columns.map((column) => ({
							...column,
							disableClickEventBubbling: true,
						}))}
						autoPageSize
						pagination
						density="compact"
						components={{
							Toolbar: customToolbar,
							Pagination: CustomPagination,
							LoadingOverlay: CustomLoadingOverlay,
							NoRowsOverlay: CustomNoRowsOverlay,
							ErrorOverlay: CustomErrorOverlay,
						}}
						onRowDoubleClick={onRowDoubleClick}
						onSelectionModelChange={onSelectionModel}
						selectionModel={selectionModel}
						loading={isLoading}
						error={error}
					/>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
