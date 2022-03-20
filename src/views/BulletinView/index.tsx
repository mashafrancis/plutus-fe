import { Grid } from '@mui/material';
import { DataTable } from '@components/molecules';
import {
	skeletonColumns,
	skeletonRows,
} from '@components/molecules/SkeletonLoader';
import { GridColDef } from '@mui/x-data-grid';
import fancyId from '@utils/fancyId';
import { Dashboard } from '../../layouts';

const BulletinView = (): JSX.Element => {
	const data = [];

	const columns: GridColDef[] = [
		{ field: 'user', headerName: 'User', minWidth: 300 },
	];

	const rows = data?.map((item) => ({
		id: fancyId(),
		user: item.user,
	}));

	return (
		<Dashboard showPeakValue pageTitle="Bulletin">
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<DataTable
						rows={!data ? skeletonRows(columns) : rows}
						columns={!data ? skeletonColumns(columns) : columns}
						// error={error}
					/>
				</Grid>
			</Grid>
		</Dashboard>
	);
};

export default BulletinView;
