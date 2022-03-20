import {
	Avatar,
	Menu,
	MenuItem,
	Tooltip,
	ListItemText,
	Button,
	IconButton,
	ListItemIcon,
} from '@mui/material';
import fancyId from '@utils/fancyId';
import { useState, MouseEvent, useEffect } from 'react';
import {
	AccountCircleOutlined,
	HelpOutline,
	Logout,
	Mood,
} from '@mui/icons-material';
import { alpha, useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import stringToColor from '@utils/stringToColor';
import { useSession, signOut } from 'next-auth/react';

function stringAvatar(name: string) {
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(' ')[0][0]}`,
	};
}

interface Props {
	hasMultipleRoles?: boolean;
	[x: string]: any;
}

const CustomAvatar = ({
	hasMultipleRoles = false,
	...rest
}: Props): JSX.Element => {
	const router = useRouter();
	const theme = useTheme();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const { data: session } = useSession();

	const fullName = session?.user?.name ?? 'Safaricom Doe';

	const handleToggleProfileMenu = (event: MouseEvent<HTMLElement>) =>
		open ? handleProfileClose() : setAnchorEl(event.currentTarget);

	const handleProfileClose = () => setAnchorEl(null);

	const logoutActiveUser = async (e): Promise<void> => {
		e.preventDefault();
		await signOut({
			callbackUrl: `${window.location.origin}`,
		});
	};

	let menuItems = [
		{
			name: 'Profile',
			icon: <AccountCircleOutlined />,
			link: 'account',
			secondaryText: 'Account settings',
		},
		{
			name: 'Help',
			icon: <HelpOutline />,
			link: 'help',
			secondaryText: 'Find support',
		},
	];

	if (router.pathname === '/') {
		menuItems = menuItems.filter((item) => {
			return item.name !== 'Settings';
		});
	}

	return (
		<>
			<Tooltip title={fullName}>
				<IconButton onClick={handleToggleProfileMenu} size="small">
					<Avatar
						alt={fullName}
						aria-describedby="menu-popover"
						aria-controls="menu-popover"
						aria-haspopup="true"
						sx={{
							width: '30px',
							height: '30px',
							bgcolor: stringToColor(fullName),
						}}
						{...stringAvatar(fullName)}
						{...rest}
					/>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleProfileClose}
				onClick={handleProfileClose}
				PaperProps={{
					elevation: 0,
					sx: {
						width: 230,
						maxWidth: '100%',
						zIndex: theme.zIndex.appBar + 1,
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: theme.zIndex.appBar + 1,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				{menuItems.map((item) => {
					const handleClick = async () => {
						handleProfileClose();
						await router.push(item.link);
					};

					return (
						<MenuItem
							key={fancyId()}
							onClick={handleClick}
							sx={{
								borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
							}}
						>
							<ListItemIcon sx={{ minWidth: 44, marginRight: 1 }}>
								<Avatar
									sx={{
										backgroundColor: '#e8f0fe',
										color: theme.palette.primary.main,
									}}
								>
									{item.icon}
								</Avatar>
							</ListItemIcon>
							<ListItemText
								primary={item.name}
								primaryTypographyProps={{ fontSize: 12, fontWeight: 500 }}
								secondaryTypographyProps={{ fontSize: 10, fontWeight: 400 }}
								secondary={item.secondaryText}
							/>
						</MenuItem>
					);
				})}
				{router.pathname === '/dashboard' && hasMultipleRoles && (
					<MenuItem
						sx={{
							borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
						}}
					>
						<ListItemIcon sx={{ minWidth: 44, marginRight: 1 }}>
							<Avatar
								sx={{
									backgroundColor: '#e8f0fe',
									color: theme.palette.primary.main,
								}}
							>
								<Mood fontSize="small" />
							</Avatar>
						</ListItemIcon>
						<ListItemText
							primary="Change role"
							primaryTypographyProps={{ fontSize: 12, fontWeight: 500 }}
							secondaryTypographyProps={{ fontSize: 10, fontWeight: 400 }}
							secondary="Switch between roles"
						/>
					</MenuItem>
				)}

				<MenuItem>
					<Button
						fullWidth
						variant="contained"
						type="submit"
						color="primary"
						size="small"
						startIcon={<Logout fontSize="small" />}
						onClick={logoutActiveUser}
					>
						Logout
					</Button>
				</MenuItem>
			</Menu>
		</>
	);
};

export default CustomAvatar;
