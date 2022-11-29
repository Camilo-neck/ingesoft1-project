// My Components
import Layout from '@/ui/Layout';
// React/next imports
import React from 'react';
import Image from 'next/image';
import { useState } from 'react'
// Firebase imports
import { auth } from 'config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, UserInfo, signInWithEmailAndPassword, Auth } from 'firebase/auth'
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
import Router, { useRouter } from 'next/router';

const Register = () => {
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
			.then(async (userCredential) => {
				// Signed in 
				await fetch(`http://127.0.0.1:3000/api/createUser`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						uid: userCredential.user.uid,
						nombre: name,
						correo: email,
						tipoUsuario: role,
						urlFotoPerfil: userCredential.user.photoURL ? userCredential.user.photoURL : '',
						chazasPropias: role==='chacero' ? [] : undefined,
					})
				})
				handleLoginEmail(auth, email, password)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	}

	const handleLoginEmail = (auth: Auth, email: string, password: string) => {
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
		handleRegisterEmail()
		setName('')
		setEmail('')
		setPassword('')
		Router.push('/')
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
			</div> */}
			<div className='flex flex-row'>
				<div className="bg-no-repeat h-screen w-[50%] flex items-center"
					style={{ backgroundImage: "url('images/register_bg.png')" }}>
					<Image className='translate-x-44' src="/images/3d-young-woman.svg" alt='3d woman' width={500} height={500} />
				</div>
				<div className='bg-[#F7F8FF] flex items-center justify-center w-full rounded-lg'>
					<div className='flex flex-col gap-12'>
						<p className='text-3xl font-bold text-center'>Crear Cuenta</p>
						<div className='flex flex-row gap-8'>
							<Button className='p-2 rounded-md' variant='outlined' color='inherit' startIcon={<GoogleIcon />}>Crear cuenta con Google</Button>
							<Button className='p-2 rounded-md' variant='outlined' color='inherit' startIcon={<FacebookIcon />}>Crear cuenta con Facebook</Button>
						</div>
						<p className='text-gray-500 text-center'>-OR-</p>
						<form className='flex flex-col gap-4 justify-items-start' onSubmit={handleSubmit}>
							<TextField
								value={name}
								onChange={(e) => setName(e.target.value)}
								id="name-input"
								fullWidth
								label="Nombre"
								variant="standard" />
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
							<div className='flex flex-col'>
								<hr className='border mb-1'/>
								<label className='font-semibold text-gray-800'>Seleccione su Rol</label>
								<ToggleButtonGroup className='self-center' color='secondary' exclusive onChange={handleRoleChange} value={role}>
									<ToggleButton value='estudiante' sx={{borderRadius: '4rem'}}>
										<BackpackIcon />
										Estudiante
									</ToggleButton>
									<ToggleButton value='chacero' sx={{borderRadius: '4rem'}}>
										<StoreMallDirectoryIcon />
										Chacero
									</ToggleButton>
								</ToggleButtonGroup>
							</div>
							<Button
								className='self-center py-2 text-black font-semibold bg-[#D5DFF6] hover:bg-[#c6d6fa] rounded-md'
								fullWidth
								color='secondary'
								type='submit'
							>
								Registrarse
							</Button>
							<Link className='text-sm text-gray-600 font-light no-underline hover:underline ' href='/login'>
								¿Ya tienes cuenta? Iniciar sesión
							</Link>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;