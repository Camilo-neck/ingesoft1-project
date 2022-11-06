import Layout from '@/ui/Layout';
import React from 'react';
import { auth } from 'config/firebase'
import { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, UserInfo, signInWithEmailAndPassword } from 'firebase/auth'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginEmail, setLoginEmail] = useState('')
	const [loginPassword, setLoginPassword] = useState('')
	const [user, setUser] = useState<UserInfo | null>(null)

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
		signInWithEmailAndPassword(auth, loginEmail, loginPassword)
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

	return (
		<Layout>
			<p>Username:{user?.displayName ? user?.displayName : user?.email}</p>
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
			</div>
		</Layout>
	);
};

export default Register;