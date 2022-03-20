import { Box, Grid, Skeleton } from '@mui/material';
import { DataTable } from '@components/molecules';
import { Dashboard } from '../../../layouts';
import fancyId from '@utils/fancyId';
import generateArray from '@utils/generateArray';

export const skeletonColumns = (columns: any[]) => {
	return columns?.map((item) => {
		if (item.renderCell) {
			delete item.renderCell;
		}

		return {
			...item,
			renderCell: () => (
				<Box sx={{ minWidth: item.minWidth ? item.minWidth - 30 : 100 }}>
					<Skeleton animation="wave" />
				</Box>
			),
		};
	});
};

export const skeletonRows = (columns: any[]) => {
	const modifiedColumns = () =>
		columns?.reduce(
			(acc, cur) => ({ ...acc, [cur.field]: '', id: fancyId() }),
			{},
		);

	return generateArray(25, modifiedColumns);
};

interface Props {
	pageTitle?: string;
	columns: any[];
}

const SkeletonLoader = ({ pageTitle, columns }: Props): JSX.Element => {
	const modColumns = columns?.map((item) => {
		if (item.renderCell) {
			delete item.renderCell;
		}

		return {
			...item,
			renderCell: () => (
				<Box sx={{ minWidth: item.minWidth ? item.minWidth - 30 : 100 }}>
					<Skeleton animation="wave" />
				</Box>
			),
		};
	});

	const createSkeletonRows = () =>
		columns?.reduce(
			(acc, cur) => ({ ...acc, [cur.field]: '', id: fancyId() }),
			{},
		);

	const rows = generateArray(30, createSkeletonRows);

	return (
		<Dashboard
			pageTitle={
				pageTitle ? (
					pageTitle
				) : (
					<Box sx={{ width: 150 }}>
						<Skeleton animation="wave" />
					</Box>
				)
			}
		>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<DataTable rows={rows} columns={modColumns} />
				</Grid>
			</Grid>
		</Dashboard>
	);
};

export default SkeletonLoader;
