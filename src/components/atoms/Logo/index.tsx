import { Stack } from '@mui/material';
import { useTheme } from '@mui/system';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

const darkLogo =
	'https://res.cloudinary.com/almondgreen/image/upload/v1647772498/Plutus/plutus-icon_fxdwz5.png';
const logo =
	'https://res.cloudinary.com/almondgreen/image/upload/v1647772498/Plutus/plutus-icon_fxdwz5.png';

const Logo = (): JSX.Element => {
	const router = useRouter();
	const {
		palette: { mode },
	} = useTheme();

	return (
		<div
			data-testid="safaricom-logo"
			onClick={() => router.push('/')}
			onKeyDown={() => router.push('/')}
			role="presentation"
			style={{ cursor: 'pointer', maxWidth: '50px' }}
		>
			<Box
				component={'img'}
				src={mode === 'light' ? logo : darkLogo}
				alt="safaricom-logo"
				// height={0.3}
				width={1}
			/>
		</div>
	);
};

export default Logo;
