import Box from '@mui/material/Box';
import { CollapsibleItem } from './components';
import fancyId from '@utils/fancyId';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
	// eslint-disable-next-line @typescript-eslint/ban-types
	onSidebarClose: () => void;
	pages: Array<PageItem>;
}

const SidebarNav = ({ pages, onSidebarClose }: Props): JSX.Element => {
	const theme = useTheme();
	const { push } = useRouter();
	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		setActiveLink(window && window.location ? window.location.pathname : '');
	}, []);

	return (
		<Box paddingY={2} display={'flex'} flexDirection={'column'} height={1}>
			{pages.map((p) => (
				<Box marginBottom={1 / 2} paddingX={1} key={fancyId()}>
					<Button
						fullWidth
						sx={{
							justifyContent: 'space-between',
							borderRadius: 1,
							paddingLeft: 4.5,
							color:
								activeLink === p.href
									? theme.palette.primary.main
									: theme.palette.text.primary,
							backgroundColor:
								activeLink === p.href
									? alpha(theme.palette.primary.main, 0.1)
									: 'transparent',
							fontWeight: activeLink === p.href ? 600 : 400,
						}}
						onClick={() => {
							push(p.href);
							onSidebarClose();
						}}
					>
						{p.title}
					</Button>
				</Box>
			))}

			{/*{pages.map((item) => (*/}
			{/*	<Box key={fancyId()}>*/}
			{/*		<CollapsibleItem*/}
			{/*			item={item}*/}
			{/*			isOpen={true}*/}
			{/*			onSidebarClose={onSidebarClose}*/}
			{/*		/>*/}
			{/*	</Box>*/}
			{/*))}*/}
			<Box sx={{ flexGrow: 1 }} />
		</Box>
	);
};

export default SidebarNav;
