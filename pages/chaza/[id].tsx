import { useRouter } from 'next/router';
import type { NextPage } from 'next'
import LayoutProfile from '@/ui/LayoutProfile'
import Banner from '@/ui/Banner'
import { useEffect, useState } from 'react';


const Chaza: NextPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const [chazaInfo, setChazaInfo] = useState(null);

	useEffect(() => {
		async function f(){
			const res = await fetch(`http://localhost:3000/api/chazaId?id=${id}`);
			console.log('res');
			const data = await res.json();
			setChazaInfo(data);
		}
		f();
	}, [id])

	return (
		chazaInfo ? (
		<LayoutProfile chaza={chazaInfo} >
		</LayoutProfile>
		) : (
			<div>
				<h1>Chaza no encontrada</h1>
			</div>
		)

	)
}
export default Chaza;