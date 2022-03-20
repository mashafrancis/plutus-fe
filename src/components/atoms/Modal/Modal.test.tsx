// react libraries
import { render } from '@testing-library/react';
// component
import Modal from './index';
import { Typography } from '@mui/material';

describe('Modal component', () => {
	const props = {
		isModalOpen: false,
		renderHeader: () => 'Header',
		renderContent: <Typography>Content</Typography>,
		onClose: () => {},
	};

	it('should render correctly', () => {
		const { asFragment } = render(<Modal {...props} />);
		expect(asFragment()).toMatchSnapshot();
	});
});
