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
			const chaza = await fetch(`http://localhost:3000/api/chazaId?id=${id}`).
			then(res => res.json());
			const comentarios_id = chaza.comentarios;
			const comentarios = [];
			for (const comentario_id of comentarios_id) {
				const comentario = await fetch(`http://localhost:3000/api/comentario?comentario=${comentario_id}`).
				then(res => res.json());
				comentarios.push(comentario);
			}
			for (const comentario of comentarios) {
				const usuario = await fetch(`http://localhost:3000/api/userId?uid=${comentario.usuario}`).
				then(res => res.json());
				comentario.usuario = usuario.log ? {} : usuario;
			}
			chaza.comentarios = comentarios;
			chaza.uid = id;
			setChazaInfo(chaza);
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