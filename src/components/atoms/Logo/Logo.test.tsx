// react library
import { screen, render } from '../../../testUtils';
// components
import Logo from './index';

describe('Logo component', () => {
	it('should render correctly', () => {
		const view = render(<Logo />);
		expect(view).toMatchSnapshot();

		const elem = screen.getByTestId('safaricom-logo');
		expect(elem).toBeInTheDocument();
	});
});
