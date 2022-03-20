import { Button, Grid, Stack, Typography } from '@mui/material';
import { DataTable } from '@components/molecules';
import {
	skeletonColumns,
	skeletonRows,
} from '@components/molecules/SkeletonLoader';
import { GridColDef } from '@mui/x-data-grid';
import fancyId from '@utils/fancyId';
import { Dashboard } from '../../layouts';
import { AccountCircleTwoTone, Add } from '@mui/icons-material';
import { Modal } from '@components/atoms';
import { Form } from '@views/PeopleView/components';
import { useState } from 'react';

const PeopleView = (): JSX.Element => {
	const [openCreateUserModal, setCreateUserModalOpen] =
		useState<boolean>(false);
	const data = [];

	const columns: GridColDef[] = [
		{ field: 'user', headerName: 'User', minWidth: 300 },
	];

	const rows = data?.map((item) => ({
		id: fancyId(),
		user: item.user,
	}));

	const handleCreateUserModal = () =>
		setCreateUserModalOpen((prevState) => !prevState);

	const AddUserButton = (): JSX.Element => {
		return (
			<Button size="small" startIcon={<Add />} onClick={handleCreateUserModal}>
				Create new user
			</Button>
		);
	};

	const renderModalHeader = (): JSX.Element => (
		<Stack
			direction="row"
			justifyContent="flex-start"
			alignItems="center"
			spacing={2}
		>
			<AccountCircleTwoTone />
			<Typography variant="h6">Create a new user</Typography>
		</Stack>
	);

	const renderCreateUserModal = (): JSX.Element => (
		<Modal
			isModalOpen={openCreateUserModal}
			maxWidth="xs"
			renderHeader={renderModalHeader()}
			renderContent={<Form handleCreateUserModal={handleCreateUserModal} />}
			onClose={handleCreateUserModal}
			onDismiss={handleCreateUserModal}
		/>
	);

	return (
		<Dashboard showPeakValue pageTitle="People management">
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<DataTable
						rows={!data ? skeletonRows(columns) : rows}
						columns={!data ? skeletonColumns(columns) : columns}
						otherToolbarElements={<AddUserButton />}
						// error={error}
					/>
					{renderCreateUserModal()}
				</Grid>
			</Grid>
		</Dashboard>
	);
};

export default PeopleView;
