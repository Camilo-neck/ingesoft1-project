import * as React from 'react';
import CNavBar from "@/ui/chazamNavBar"
import Footer from "@/ui/Footer"
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Report from "@/ui/Report"
import Link from 'next/link';

const reports = [
    {userName:'Usuario1', userPhoto: '/man.png',  date:"14/10/2022 09:32", tipeReport:'Chaza', causa:'Información falsa', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {userName:'Usuario1', userPhoto: '/man.png',  date:"14/10/2022 09:32", tipeReport:'Comentario', causa:'Información falsa', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
    {userName:'Usuario1', userPhoto: '/man.png',  date:"14/10/2022 09:32", tipeReport:'Comentario', causa:'Información falsa', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {userName:'Usuario1', userPhoto: '/man.png',  date:"14/10/2022 09:32", tipeReport:'Chaza', causa:'Información falsa', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '},
    {userName:'Usuario1', userPhoto: '/man.png',  date:"14/10/2022 09:32", tipeReport:'Comentario', causa:'Información falsa', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
    {userName:'Usuario1', userPhoto: '/man.png',  date:"14/10/2022 09:32", tipeReport:'Comentario', causa:'Información falsa', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {userName:'Usuario1', userPhoto: '/man.png',  date:"14/10/2022 09:32", tipeReport:'Chaza', causa:'Información falsa', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '},

]
const admiReport = () => {
    return (
        <div>
            <CNavBar/>
            <main className='h-screen'>
                <div className="h-full flex flex-column gap-2 md:gap-6">
                    <div className="h-full w-2/5 md:w-1/5 bg-white shadow-xl border border-gray-400 justify-center">
                        <div className='h-auto grid justify-center gap-5'>
                            <Avatar 
                                sx={{ bgcolor: blue[500] , width: 80, height: 80 }} 
                                alt='admiReport'
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
                    <div className="mt-6 ml-3 w-3/5 md:w-4/5 bg-white overflow-auto scrollbar-hide">
                        <div className="w-11/12 pb-3 justify-self-center bg-gray-50 bg-opacity-30 shadow rounded-3xl">
                            <p className="text-3xl font-medium leading-none pt-9 ml-9">Reportes</p>
                            {reports.map((item) => (
                                // eslint-disable-next-line react/jsx-key
                                <Report userName={item.userName} userPhoto={item.userPhoto} date={item.date}  tipeReport={item.tipeReport} causa={item.causa} comment={item.comment}/>
                            ))}
                            
                        </div>
                        
                    </div>
                    
                </div>  
            </main>
            <Footer /> 
        </div>
    )

}

export default admiReport