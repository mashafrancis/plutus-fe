import { Stack } from '@mui/material';
import { useTheme } from '@mui/system';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const darkLogo =
	'https://res.cloudinary.com/almondgreen/image/upload/v1648013568/Plutus/plutus-icon-dark_a18wf4.png';
const logo =
	'https://res.cloudinary.com/almondgreen/image/upload/v1648015773/Plutus/plutus-icon-light_kdmkl3.png';

const Logo = (): JSX.Element => {
	const router = useRouter();
	const {
		palette: { mode },
	} = useTheme();

	return (
		<div
			data-testid="plutus-logo"
			onClick={() => router.push('/')}
			onKeyDown={() => router.push('/')}
			role="presentation"
			style={{ cursor: 'pointer', maxWidth: '50px' }}
		>
			<Box
				component={'img'}
				src={mode === 'light' ? logo : darkLogo}
				alt="plutus-logo"
				// height={0.3}
				width={0.7}
			/>
		</div>
	);
};

export default Logo;
