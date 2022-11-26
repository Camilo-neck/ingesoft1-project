import type { NextPage } from 'next'
import Layout from '@/ui/Layout'
import Banner from '@/ui/Banner'
import CNavBar from "@/ui/chazamNavBar"
import Footer from "@/ui/Footer"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {deepPurple } from '@mui/material/colors';
import Link from "next/link";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const ButtonCust = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#FFB703',
    borderColor: '#000000',
    
    '&:hover': {
      backgroundColor: '#FFB703',
      borderColor: '#000000',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#FFFFFF',
      borderColor: '#000000',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(237, 197, 47 ,.5)',
    },
  });
const userData = {
    nombre : 'Usuario 1',
    tipoUsuario: 'Chacero',
    correo: 'prodriguez1@unal.edu.co',
    foto: '/man.png',
    chazas : [
        {
            id: 12,
            nombre: 'Panchos',
            descripcionCorta: 'lo que sea',
            calificacion: 4.3,
            urlImagen: ''
        },
        {
            id: 13,
            nombre: 'Panchos',
            descripcionCorta: 'lo que sea',
            calificacion: 4.3,
            urlImagen: ''
        },
    ],
}
const viewProfile: NextPage = () => {
	return (
        <div>
            <CNavBar />
            <main>
                <div className='h-full flex justify-center items-center'>
                    <div className="bg-gray-50 bg-opacity-30 mt-24 mb-24 shadow rounded-3xl w-11/12 md:w-9/12  p-10" >
                        <div className='grid grid-cols-4'>
                            <Avatar sx={{ bgcolor: deepPurple[300], width: 86, height: 86 }} alt="Remy Sharp" src={userData.foto} className='col-span-4 md:col-span-1 mt-4 grid justify-self-center'/>
                            <h1 className='text-2xl md:text-4xl font-medium mt-4 col-span-4 md:col-span-3 grid justify-self-center md:justify-self-start'>{userData.nombre}</h1>
                        </div>
                        <div className="content-center w-full flex flex-row items-center">
                            <h1 className=" py-4 text-xl md:text-2xl basis-1/3 font-bold leading-none ">Tipo de usuario:</h1>
                            <p className="  w-2/3 h-1/5 text-xl md:text-2xl leading-none ">{userData.tipoUsuario}</p>
                        </div>
                        <div className="content-center w-full grid grid-cols-3 items-center">
                            <h1 className=" py-4 text-xl md:text-2xl col-span-3 md:col-span-1 font-bold leading-none ">Correo:</h1>
                            <p className="  col-span-3 md:col-span-2 text-xl md:text-2xl leading-none ">{userData.correo}</p>
                        </div>
                        {userData.tipoUsuario!=='Estudiante' ? 
                        <div className="mt-4">
                            <p className='text-2xl md:text-4xl font-bold leading-none mb-3'>Chazas registradas</p>
                            <div className='flex flex-row flex-wrap gap-8 h-full overflow-y-auto'>
                                {userData.chazas.map((chaza: any, index: number) => ( 
                                    <div key={index} className='w-60 h-60 rounded-lg bg-no-repeat bg-center bg-cover ' style={{backgroundImage: `url("${chaza.urlImagen}"), url("images/notFound.png")`}}>
                                        <div className="flex items-end justify-center rounded-lg  hover:backdrop-brightness-50  transition-all ease-linear duration-200 h-full w-full">
                                            <Link href={`/chaza/${chaza.id}`}>
                                                <div className='mb-2 rounded-full' style={{backgroundImage: 'linear-gradient(100.11deg, rgba(0, 0, 0, 0.4) 30.39%, rgba(0, 0, 0, 0.1) 61.67%)'}}>
                                                    <div className='flex flex-row items-center gap-2 p-2 backdrop-blur-md rounded-full'>
                                                        <div className='w-6 h-6 rounded-full bg-red-600'></div>
                                                        <div className='flex flex-col'>
                                                            <p className='text-white font-semibold'>{chaza.nombre}</p>
                                                            
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
                        
                        :<p/>}
                        
                        <div className='flex justify-end mb-4 '>
                            <Stack spacing={2} direction="row" className='mt-4 mr-5'>
                                <ButtonCust variant="contained">Editar datos</ButtonCust>
                            </Stack>
                        </div>
                    </div>

                </div>
            </main>
                
            <Footer />
        </div>
		
		
	)
}
export default viewProfile