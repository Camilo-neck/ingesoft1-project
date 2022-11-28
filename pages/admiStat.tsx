import * as React from 'react';
import CNavBar from "@/ui/chazamNavBar"
import Footer from "@/ui/Footer"
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Button from '@mui/material/Button';
import BarChart from '@/ui/BarChart';
import Link from 'next/link';

const admiStat = () => {
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
                        <BarChart/>
                        
                    </div>
                    
                </div>  
            </main>
            <Footer /> 
        </div>
    )

}

export default admiStat