import { useState, useEffect } from 'react';
import { alpha, Box, Divider, Stack } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import fancyId from '@utils/fancyId';
import { ChevronRight } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface Props {
	onSidebarClose: () => void;
	item: {
		groupTitle: string;
		groupIcon: JSX.Element;
		pages: Array<PageItem>;
	};
	isOpen?: boolean;
}

const CollapsibleItem = ({
	item,
	isOpen = false,
	onSidebarClose,
}: Props): JSX.Element => {
	const theme = useTheme();
	const { push } = useRouter();
	const [open, setOpen] = useState(isOpen);
	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		setActiveLink(window && window.location ? window.location.pathname : '');
	}, []);

	const handleClick = (): void => {
		setOpen(!open);
	};

	return (
		<Box>
			<Box
				component={Button}
				justifyContent={'space-between'}
				paddingX={2}
				paddingY={2}
				sx={{ cursor: 'pointer', color: 'text.secondary' }}
				onClick={() => handleClick()}
				variant="text"
				endIcon={open ? <ExpandMore /> : <ChevronRight />}
				disableElevation
				fullWidth
			>
				<Box
					component={Stack}
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={1}
				>
					<Stack
						direction="row"
						justifyContent="flex-start"
						alignItems="center"
						spacing={4}
					>
						{item.groupIcon || null}
						<Typography
							variant="body2"
							color={'text.primary'}
							sx={{
								fontWeight: 600,
								display: 'block',
								marginLeft: '0 !important',
							}}
						>
							{item.groupTitle}
						</Typography>
					</Stack>
				</Box>
			</Box>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{item.pages.map((p) => (
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
			</Collapse>
			<Divider sx={{ paddingY: 0 }} />
		</Box>
	);
};

export default CollapsibleItem;
