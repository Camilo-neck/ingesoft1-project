// My Components
import Layout from '@/ui/Layout';
// React/next imports
import React from 'react';
import Image from 'next/image';
import { useState } from 'react'
// Firebase imports
import { auth } from 'config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, UserInfo, signInWithEmailAndPassword } from 'firebase/auth'
// Material UI imports
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// Material UI Icons
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import BackpackIcon from '@mui/icons-material/Backpack';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import Link from 'next/link';
import { ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useRouter } from 'next/router';

const Login = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState(false)
	const [role, setRole] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [user, setUser] = useState<UserInfo | null>(null)
	const router = useRouter()

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
		const error = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(e.target.value)
		setEmailError(!error)
	}

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
		const error = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*?[#?!@$%^&*-_]).{8,}$/).test(e.target.value)
		setPasswordError(!error)
	}

	const handleRoleChange = (e: React.MouseEvent<HTMLElement>, newRole: string) => {
		setRole(newRole)
	}

	const handleRegisterEmail = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in 
				var user = userCredential.user;
				setUser(user)
				// ...
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				// ..
			});
	}

	const handleLoginEmail = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				console.log(user)
				setUser(user)
				// ...
			})
	}

	const handleRegisterG = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential?.accessToken;
				// The signed-in user info.
				const user = result.user;
				setUser(user)
			}).catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			})
	}

	const handleLogout = () => {
		auth.signOut()
			.then(() => {
				setUser(null)
			})
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleLoginEmail()
		router.push('/')
	}

	return (
		<>
			{/* <p>Username:{user?.displayName ? user?.displayName : user?.email}</p>
			<div className='mt-10 ml-2 flex flex-row'>
				<div>
					<p>Email:</p>
					<input
						className='p-1 rounded-md bg-gray-300'
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<p>Password:</p>
					<input
						className='p-1 rounded-md bg-gray-300'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className='p-1 border border-blue-500 bg-blue-400 hover:bg-blue-500 m-1 rounded-lg px-4 transition-all ease-linear duration-100'
						onClick={handleRegisterEmail}
					>
						Register
					</button>
				</div>
				<div>
					<p>Email</p>
					<input
						className='p-1 rounded-md bg-gray-300'
						type='text'
						value={loginEmail}
						onChange={(e) => setLoginEmail(e.target.value)}
					/>
					<p>Password:</p>
					<input
						className='p-1 rounded-md bg-gray-300'
						type='password'
						value={loginPassword}
						onChange={(e) => setLoginPassword(e.target.value)}
					/>
					<button
						className='p-1 border border-blue-500 bg-blue-400 hover:bg-blue-500 m-1 rounded-lg px-4 transition-all ease-linear duration-100'
						onClick={handleLoginEmail}
					>
						Login
					</button>
				</div>
				<div>
					<button
						className='p-1 border border-blue-500 bg-blue-400 hover:bg-blue-500 m-1 rounded-lg px-4 transition-all ease-linear duration-100'
						onClick={handleRegisterG}
					>
						Register with google
					</button>
					<button className='border' onClick={handleLogout}>
						SignOut
					</button>
				</div>
									<Button className='p-2 rounded-md' variant='outlined' color='inherit' startIcon={<GoogleIcon />}>Iniciar sesión con Google </Button>
						<Button className='p-2 rounded-md' variant='outlined' color='inherit' startIcon={<FacebookIcon />}>Iniciar sesión con Facebook</Button>
						<p className='text-gray-500 text-center'>-OR-</p>
			</div> */}
			<div className='flex flex-col md:flex-row'>
				<div className="bg-no-repeat h-screen w-[50%] hidden md:flex items-center"
					style={{ backgroundImage: "url('images/register_bg.png')" }}>
					<Image className=' translate-x-0 xl:translate-x-44 ' src="/images/3d men.svg" alt='3d woman' width={400} height={400} />
				</div>
				<div className='bg-[#F7F8FF] flex pt-10 md:pt-0 items-center justify-center w-full rounded-lg'>
					<div className='flex flex-col gap-2'>
						<p className='text-3xl font-bold text-center'>Iniciar Sesión</p>
						<div className='flex flex-row gap-8'>

						</div>
					
						<form className='flex flex-col gap-4 w-64 md:w-[35rem] justify-items-start' onSubmit={handleSubmit}>
							<TextField
								error={emailError}
								value={email}
								onChange={handleEmailChange}
								id="email-input"
								type='email'
								fullWidth
								label="Email"
								variant="standard"
								helperText={emailError && 'Ingrese un correo correcto'} />
							<TextField
								error={passwordError}
								value={password}
								onChange={handlePasswordChange}
								id="pass-input"
								type='password'
								fullWidth
								label="Contraseña"
								variant="standard"
								helperText={passwordError && 'Mínimo ocho caractéres, al menos una letra mayúscula,\n\n una letra minúscula y un número'} />
							<Button
								className='self-center py-2 text-black font-semibold bg-[#D5DFF6] hover:bg-[#c6d6fa] rounded-md'
								fullWidth
								color='secondary'
								type='submit'
							>
								Iniciar sesión
							</Button>
							<Link className='text-sm text-gray-600 font-light no-underline hover:underline ' href='/register'>
								No tienes cuenta? Registrate
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;