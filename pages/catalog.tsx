import Layout from "@/ui/Layout";
import IconButton from "@mui/material/IconButton";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { headers } from "next/headers";
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import { GetServerSideProps } from "next";
import Link from "next/link";
import CSliderOfCards from "@/ui/CSliderofCards";
import { useRouter } from "next/router";
import { Avatar } from "@mui/material";

const Catalog = (props: { chazas: any[]; categories:any[] }) => {
	const [chazas, setChazas] = useState(props.chazas);
	const [filtros, setFiltros] = useState<{name:string; color:"inherit" | "secondary" | "primary" | "info" | "success" | "error" | "warning" | undefined}[]>([{name:'Más relevantes', color:'secondary'}, {name:'Menor precio', color:'primary'}, {name:'Mayor precio', color:'info'}]);
	const [orden, setOrden] = useState<number | string>(1);
	const [categorias, setCaregorias] = useState([]);
	const router = useRouter();

	
	useEffect(() => {
		console.log('in')
		const fetchChz = async (category: string | string[] | undefined, nombre: string | string[] | undefined) => {
			console.log(category);
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chaza?${category ? 'categoria='+category : 'categoria=Todas'}${nombre ? '&nombre='+nombre : ''}`);
			const data = await res.json();
			console.log('data')
			console.log(data);
			setChazas(data)
		}
		fetchChz(router.query.categoria, router.query.nombre)
	}, [router.query.categoria])

	return (
		<Layout>
			<div className="p-3 m-1">
				<p className='font-semibold text-xl self-start'>Categorías</p>
				<CSliderOfCards categories={props.categories} />
			</div>
			<hr />
			<div className="flex flex-col gap-10 m-4">
				<div className="flex flex-row">
					<div className="flex flex-row flex-grow items-center gap-2">
						{/* <p className="font-semibold">Filtrar por:</p>
						<div className="flex flex-row">
							<IconButton sx={{borderRadius: '12px'}}>	
								<FilterListRoundedIcon />
							</IconButton>
							<div className="flex flex-row gap-2">
								{filtros.map((filtro, index) => (
									<Button className="rounded-md border-[3px]" color={filtro.color} key={index} variant="outlined" size='small'>{filtro.name}</Button>
								))}
							</div>
						</div> */}
					</div>
					<div className="flex flex-row items-center">
						<p className="font-semibold">Ordenar por:</p>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
							<Select
							label="Ordenar por"
							size='small'
							value={orden}
							onChange={(e) => {setOrden(e.target.value)}}
							sx={{borderRadius: '9999px'}}
							>
								<MenuItem value={1}>Relevancia</MenuItem>
								<MenuItem value={2}>A-Z</MenuItem>
								<MenuItem value={3}>Z-A</MenuItem>
							</Select>
						</FormControl>
					</div>
				</div>
				<div className="flex flex-row flex-wrap gap-8 h-full overflow-y-auto">
					{/*Chaza Card [TODO -> Pass to own component] */}
					{chazas.sort((a,b) => {
						if (orden === 1) {
							return a.calificacion > b.calificacion ? -1 : 1;
						} else if (orden === 2) {
							return a.nombre.localeCompare(b.nombre);
						}
						return b.nombre.localeCompare(a.nombre);
					} ).map((chaza: any, index: number) => ( 
						<div key={index} className='w-80 h-80 rounded-lg bg-no-repeat bg-center bg-cover ' style={{backgroundImage: `url("${chaza.urlImagen}"), url("images/notFound.png")`}}>
							<div className="flex items-end justify-center rounded-lg backdrop-brightness-50 hover:backdrop-filter-none transition-all ease-linear duration-200 h-full w-full">
								<Link href={`/chaza/${chaza.id}`}>
									<div className='mb-2 rounded-full' style={{backgroundImage: 'linear-gradient(100.11deg, rgba(0, 0, 0, 0.4) 30.39%, rgba(0, 0, 0, 0.1) 61.67%)'}}>
										<div className='flex flex-row items-center gap-2 p-2 backdrop-blur-md rounded-full'>
											d<Avatar sx={{width: '2rem', height: '2rem'}} src={chaza.urlFotoChaza} />
											<div className='flex flex-col'>
												<p className='text-white font-semibold'>{chaza.nombre}</p>
												<div className='flex flex-row gap-1'>
													<p className='text-white text-xs'>{chaza.ubicacion}</p> 
													<p className='text-white text-xs'>|</p>
													<p className='text-white text-xs'>{chaza.telefono}</p>
												</div>
											</div>
											<div className='flex flex-row items-center p-1 rounded-md bg-[#FB850054]'>
												<StarRoundedIcon className='text-[#FB8500]' />
												<p className='text-white text-sm font-semibold'>{chaza.calificacion.toFixed(1)}</p>
											</div>
										</div>
									</div>
								</Link>
							</div>
						</div>
					))}
					
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const query = context.query
	const chazas = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chaza?${query.categoria ? 'categoria='+query.categoria : 'categoria=Todas'}${query.nombre ? '&nombre='+query.nombre : ''}`)
	.then(res => res.json())
	.catch(err => console.log(err));
	const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
	.then(res => res.json())
	.catch(err => console.log(err));

	return {
		props: {
			chazas: chazas ? chazas : [],
			categories
		}
	}	
}

export default Catalog;
