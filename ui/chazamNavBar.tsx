'use client';

import * as React from 'react';
import  Image  from 'next/image';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';

// Firebase imports
import { auth } from 'config/firebase'
import { Auth, onAuthStateChanged, User } from 'firebase/auth';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

export default function CNavBar() {
	const [currentUser, setCurrentUser] = React.useState<User | null>(null);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
		React.useState<null | HTMLElement>(null);
	const [search, setSearch] = React.useState<string>('');
	const router = useRouter();

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		if (search === '') {
			return;
		}
		router.push(`/catalog?nombre=${search}`);
	}

	const authState = (currauth: Auth) =>  onAuthStateChanged(currauth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const curruser = user;
			setCurrentUser(curruser);
			// ...
		} else {
			// User is signed out
			// ...
			setCurrentUser(null);
		}
	});

	React.useEffect(() => {
		authState(auth);
	}, [auth, authState]);

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>	
			<Link href={'/viewProfile'}>
				<MenuItem>Profile</MenuItem>
			</Link>
			<MenuItem onClick={() => auth.signOut().then(() => {setCurrentUser(null); handleMenuClose()})}>Sign Out</MenuItem>
			<MenuItem onClick={handleMenuClose}>Close</MenuItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem>
				<IconButton size="large" aria-label="show 4 new mails" color="inherit">
					<Badge badgeContent={4} color="error">
						<MailIcon />
					</Badge>
				</IconButton>
				<p>Messages</p>
			</MenuItem>
			<MenuItem>
				<IconButton
					size="large"
					aria-label="show 17 new notifications"
					color="inherit"
				>
					<Badge badgeContent={17} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
				<p>Notifications</p>
			</MenuItem>
			<MenuItem onClick={handleProfileMenuOpen}>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</IconButton>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" className='rounded-sm'>
				<Toolbar>
					
					<Link href={"/"}>
					<Image src={'/images/Corgi_logo.svg'} alt='corgi logo' width={40} height={50} />
					</Link>
					<Link href={"/"}>
						
					<Typography
						variant="h6"
						noWrap
						component="div"
						className='font-semibold'
						sx={{ display: { xs: 'none', sm: 'block' } }}
					>
						Corgis
					</Typography>
					</Link>
					
					<form className='flex-grow' onSubmit={(e: any) => handleSearch(e)}>
						<Search className='rounded-xl'>
							<SearchIconWrapper>
								<SearchIcon className='text-gray-700'/>
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								className='w-full'
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								inputProps={{ 'aria-label': 'search'}}
								sx= {{color: 'rgb(55, 65, 81)', borderRadius: '15px'}}
							/>
						</Search>
					</form>
					{/* <Box sx={{ width: '2rem' }} /> */}
					<Box sx={{ display: { md: 'flex' }, marginLeft: '2rem' }}>
						{/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
							<Badge badgeContent={4} color="error">
								<MailIcon />
							</Badge>
						</IconButton>
						<IconButton
							size="large"
							aria-label="show 17 new notifications"
							color="inherit"
						>
							<Badge badgeContent={17} color="error">
								<NotificationsIcon />
							</Badge>
						</IconButton> */}
						{currentUser ? (
						<IconButton
							size="large"
							edge="end"
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							{/* <AccountCircle /> */}
							<Image className='rounded-full' src={currentUser.photoURL ? currentUser.photoURL : '/images/blank-profile-picture.webp'} alt='photo' width={30} height={30}/>
						</IconButton>
						) : (
							<Link href={'/login'} className="text-slate-800 flex flex-row gap-2">
								<AccountCircle />
								<span className='hidden lg:block'>Autenticarse</span>
							</Link>
						)}
					</Box>
					{/* <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
					</Box> */}
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
}