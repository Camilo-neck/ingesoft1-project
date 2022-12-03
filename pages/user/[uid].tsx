import { useRouter } from 'next/router';
import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import CNavBar from "@/ui/chazamNavBar"
import Footer from "@/ui/Footer"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {deepPurple } from '@mui/material/colors';
import Link from "next/link";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ModalStat from '@/ui/ModalStat';
import ModalChaza from '@/ui/ModalChaza';

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
const User: NextPage = () => {
	const router = useRouter();
	const { uid } = router.query;
	const [userInfo, setUserInfo] = useState<any>(null);
    const [openModalStat, setOpenModalStat] = useState<boolean>(false)
    const [statsData, setStatsData] = useState<any>(null)
    const [openModalChaza, setOpenModalChaza] = useState(false)
    let [add, setAdd] = useState(true)
    const [toEditChaza, setToEditChaza] = useState<any>(null)

    const ChazaCard = ({chaza, onStatsClick, onEditChaza}: {chaza: any, onStatsClick: (comments: any[]) => void, onEditChaza: (chaza: any) => void}) => {
        const [showButton, setShowButton] = useState(false);
        return <div onMouseEnter={() => setShowButton(true)} onMouseLeave={() => setShowButton(false)} className='flex items-center justify-center w-60 h-60 rounded-lg bg-no-repeat bg-center bg-cover' style={{backgroundImage: `url("${chaza.urlImagen}"), url("images/notFound.png")`}}>
                    <div className={`absolute ${showButton ? 'block' : 'hidden'} z-10 transition-all ease-linear duration-300`}>
                        <div className="flex flex-col gap-2 w-full h-full">
                            <Button onClick={() => onEditChaza(chaza)} variant='outlined' size='small' sx={{borderRadius: '15px'}} color='secondary'>Editar Chaza</Button>
                            <Button onClick={() => onStatsClick(chaza.comentarios)} variant='outlined' size='small' sx={{borderRadius: '15px'}} color='secondary'>Ver estadísticas</Button>
                        </div>
                    </div>
                    <div className="flex items-end justify-center rounded-lg  hover:backdrop-brightness-50 transition-all ease-linear duration-300 h-full w-full">
                        <div className='mb-2 rounded-full' style={{backgroundImage: 'linear-gradient(100.11deg, rgba(0, 0, 0, 0.4) 30.39%, rgba(0, 0, 0, 0.1) 61.67%)'}}>
                            <div className='flex flex-row items-center gap-2 p-2 backdrop-blur-md rounded-full'>
                                <Avatar sx={{width: '2rem', height: '2rem'}} src={chaza.urlFotoChaza} />
                                <div className='flex flex-col'>
                                    <p className='text-white font-semibold'>{chaza.nombre}</p>
                                    
                                </div>
                                <div className='flex flex-row items-center p-1 rounded-md bg-[#FB850054]'>
                                    <StarRoundedIcon className='text-[#FB8500]' />
                                    <p className='text-white text-sm font-semibold'>{chaza.calificacion.toFixed(1)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    }

	useEffect(() => {
		async function f(){
            console.log(uid);
            if(uid) {
                console.log(process.env.NEXT_PUBLIC_API_URL)
			const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/userId?uid=${uid}`).
			then(res => res.json());
            if (user.chazasPropias) {
                const chazas = [];
                for (const chaza_id of user.chazasPropias) {
                    const chaza = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chazaId?id=${chaza_id}`).
                    then(res => res.json());
                    chaza.id = chaza_id;
                    chaza.comentarios = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comentario?chaza_id=${chaza_id}`).then(res => res.json());
                    chazas.push(chaza);
                }
                user.chazasPropias = chazas;
            }
            user.id = uid;
			console.log(user);
			setUserInfo(user);
            }
		}
		f();
	}, [uid])

    const handleStatsOpen = (comments: any[]) => {
        setOpenModalStat(true);
        // Count how many comments are positive, negative and neutral by the attrubute 'sentiment'
        // If the attribute is not present, it is neutral
        // Create an array of objects with the format {id: 'posotive', label: 'positive', value: 5}
        const positive = comments.filter(comment => comment.sentiment === 'positive').length;
        const negative = comments.filter(comment => comment.sentiment === 'negative').length;
        const neutral = comments.length - positive - negative;
        const data = [
            {id: 'positive', label: 'positive', value: positive},
            {id: 'negative', label: 'negative', value: negative},
            {id: 'neutral', label: 'neutral', value: neutral},
        ];
        setStatsData(data);
    }

    const handleEditChaza = (chaza: any) => {
        setToEditChaza(chaza);
        setOpenModalChaza(true);
        add = false;
        setAdd(add);
    }

	return (
		userInfo ? (
            <div>
            <CNavBar />
            <main>
                <div className='flex justify-center items-center'>
                    <ModalStat data={statsData} open={openModalStat} onClose={() => setOpenModalStat(false)} />
                    <ModalChaza chaza={toEditChaza} propietario={userInfo} open={openModalChaza} onClose={() => setOpenModalChaza(false)} add={add} />
                    <div className="bg-gray-50 bg-opacity-30 mt-24 mb-24 shadow rounded-3xl w-11/12 md:w-9/12  p-10" >
                        <div className='grid grid-cols-4'>
                            <Avatar sx={{ bgcolor: deepPurple[300], width: 86, height: 86 }} alt="Remy Sharp" src={userInfo.foto} className='col-span-4 md:col-span-1 mt-4 grid justify-self-center'/>
                            <h1 className='text-2xl md:text-4xl font-medium mt-4 col-span-4 md:col-span-3 grid justify-self-center md:justify-self-start'>{userInfo.nombre}</h1>
                        </div>
                        <div className="content-center w-full flex flex-row items-center">
                            <h1 className=" py-4 text-xl md:text-2xl basis-1/3 font-bold leading-none ">Tipo de usuario:</h1>
                            <p className="  w-2/3 h-1/5 text-xl md:text-2xl leading-none ">{userInfo.tipoUsuario}</p>
                        </div>
                        <div className="content-center w-full grid grid-cols-3 items-center">
                            <h1 className=" py-4 text-xl md:text-2xl col-span-3 md:col-span-1 font-bold leading-none ">Correo:</h1>
                            <p className="  col-span-3 md:col-span-2 text-xl md:text-2xl leading-none ">{userInfo.correo}</p>
                        </div>
                        {userInfo.tipoUsuario==='chacero' ? 
                        <div className="mt-4">
                            <p className='text-2xl md:text-4xl font-bold leading-none mb-3'>Chazas registradas</p>
                            <div className='flex flex-row flex-wrap gap-8 h-full overflow-y-auto p-2'>
                                {userInfo?.chazasPropias?.map((chaza: any, index: number) => <ChazaCard onEditChaza={handleEditChaza} onStatsClick={handleStatsOpen} key={index} chaza={chaza} />)} 
                                <div title='Añadir Chaza' onClick={() => {add=true;setAdd(add); setOpenModalChaza(true)}} className='w-60 h-60 flex items-center justify-center rounded-lg outline-dashed outline-2 outline-yellow-500 hover:scale-105 transition all ease-linear duration-300'>
                                    <AddCircleOutlineIcon fontSize='large' className='text-yellow-500' />
                                </div>
                            </div>
                            
                        </div>
                        
                        :<p/>}
                        
                    </div>

                </div>
            </main>
                
            <Footer />
        </div>
		) : (
			<div>
				<h1>Chaza no encontrada</h1>
			</div>
		)

	)
}
export default User;