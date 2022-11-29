/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import CNavBar from "@/ui/chazamNavBar"
import Footer from "@/ui/Footer"
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import BarChart from '@/ui/BarChart';
import Link from 'next/link';
import { useEffect, useState } from "react";

const admiStat = (props:{comida: any[],mercado: any[], vivero:any[], comidaRapida:any[],ropa:any[],bisuteria:any[],papeleria:any[],otros:any[]}) => {
    const [comida, setComida] = useState(props.comida);
    const [mercado, setMercado] = useState(props.mercado);
    const [vivero, setVivero] = useState(props.vivero);
    const [comidaRapida, setComidaRapida] = useState(props.comidaRapida);
    const [ropa, setRopa] = useState(props.ropa);
    const [bisuteria, setBisuteria] = useState(props.bisuteria);
    const [papeleria, setPapeleria] = useState(props.papeleria);
    const [otros, setOtros] = useState(props.otros);
    return (
        <div>
            <CNavBar/>
            <main className='h-screen'>
                <div className="h-full flex flex-column gap-2 md:gap-6 grid grid-cols-5">
                    <div className="col-span-5 md:col-span-1 h-full bg-white shadow-xl border border-gray-400 justify-center">
                        <div className='h-auto grid justify-center gap-5'>
                            <Avatar 
                                sx={{ bgcolor: blue[500] , width: 80, height: 80 }} 
                                alt='admiStat'
                                src= '/man.png'
                                className="justify-self-center mt-10"
                            />
                            <p className="text-xl md:ml-4 font-bold leading-none">Administrador</p>
                            
                            <Link href={'/admiReport'}>
                                <Button className='m-2 w-10/12' variant="outlined">Ver reportes</Button>
                            </Link>
                            <Link href={'/admiStat'}>
                                <Button className='m-2 w-10/12' variant="outlined">Ver estadisticas</Button>
                            </Link>
                            
                        </div>
                        
                    </div>
                    <div className="col-span-5 md:col-span-4 mt-6 ml-3 bg-white overflow-auto scrollbar-hide">
                        <BarChart comida={comida} mercado={mercado} vivero={vivero} comidaRapida={comidaRapida} ropa={ropa} bisuteria={bisuteria} papeleria={papeleria} otros={otros} />
                        
                    </div>
                    
                </div>  
            </main>
            <Footer /> 
        </div>
    )

}

export const getServerSideProps = async (context: { query: any; }) => {
	const query = context.query
	console.log(query)
	const mercado = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Mercado`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const vivero = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Vivero`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const comida = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Comida`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const comidaRapida = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/ComidaRapida`)
	.then(res => res.json())
	.catch(err => console.log(err));
	const ropa = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Ropa`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const bisuteria = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Bisuteria`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const papeleria = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Papeleria`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const otros = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Otros`)
	.then(res => res.json())
	.catch(err => console.log(err));
    
        return {
            props: {
                comida,
                mercado,
                vivero,
                comidaRapida,
                ropa,
                bisuteria,
                papeleria,
                otros,
            }
        }	
}

export default admiStat