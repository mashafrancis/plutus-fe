import {
	GridOverlay,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
	useGridApiContext,
} from '@mui/x-data-grid';
import {
	Box,
	LinearProgress,
	Pagination,
	PaginationItem,
	Typography,
} from '@mui/material';
import { ChangeEvent } from 'react';
import {
	NoDataIllustration,
	ErrorOnPageIllustration,
} from '@svg/illustrations';

function CustomPagination() {
	const apiRef = useGridApiContext();
	const state = apiRef.current.state;

	return (
		<Pagination
			color="primary"
			variant="outlined"
			shape="rounded"
			page={state.pagination.page + 1}
			count={state.pagination.pageCount}
			// @ts-expect-error
			renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
			onChange={(event: ChangeEvent<unknown>, value: number) =>
				apiRef.current.setPage(value - 1)
			}
		/>
	);
}

function CustomLoadingOverlay() {
	return (
		<GridOverlay>
			<div style={{ position: 'absolute', top: 0, width: '100%' }}>
				<LinearProgress />
			</div>
		</GridOverlay>
	);
}

function CustomToolbar() {
	return (
		<GridToolbarContainer>
			<GridToolbarColumnsButton />
			<GridToolbarFilterButton />
			<GridToolbarDensitySelector />
			<GridToolbarExport />
		</GridToolbarContainer>
	);
}

function CustomNoRowsOverlay() {
	return (
		<GridOverlay style={{ backgroundColor: 'rgba(190,192,197,0.06)' }}>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Box sx={{ paddingBottom: 2 }}>
					<NoDataIllustration />
				</Box>
				<Typography>Sorry! No data available.</Typography>
			</div>
		</GridOverlay>
	);
}

function CustomErrorOverlay() {
	return (
		<GridOverlay style={{ backgroundColor: 'rgba(190,192,197,0.06)' }}>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Box sx={{ paddingBottom: 2 }}>
					<ErrorOnPageIllustration />
				</Box>
				<Typography>
					Sorry! Error found on page. Kindly reload or adjust metrics.
				</Typography>
			</div>
		</GridOverlay>
	);
}

export {
	CustomLoadingOverlay,
	CustomPagination,
	CustomToolbar,
	CustomNoRowsOverlay,
	CustomErrorOverlay,
};
