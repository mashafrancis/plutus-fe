import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Hero } from './components';
import { Main } from '../../layouts';
import Container from '@components/Container';

const IndexView = (): JSX.Element => {
	const theme = useTheme();
	return (
		<Box sx={{ overflowX: 'hidden' }}>
			<Main>
				<Box
					bgcolor={'alternate.main'}
					sx={{
						position: 'relative',
						// '&::after': {
						// 	position: 'absolute',
						// 	content: '""',
						// 	width: '40%',
						// 	zIndex: 1,
						// 	top: 0,
						// 	left: '5%',
						// 	height: '100%',
						// 	backgroundSize: '14px 14px',
						// 	backgroundImage: `radial-gradient(${alpha(
						// 		theme.palette.primary.dark,
						// 		0.4,
						// 	)} 20%, transparent 20%)`,
						// 	opacity: 0.2,
						// },
					}}
				>
					<Container>
						<Hero />
					</Container>
				</Box>
			</Main>
		</Box>
	);
};

export default IndexView;
