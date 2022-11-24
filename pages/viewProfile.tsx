import type { NextPage } from 'next'
import Layout from '@/ui/Layout'
import Banner from '@/ui/Banner'
import CNavBar from "@/ui/chazamNavBar"
import Footer from "@/ui/Footer"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { deepOrange, deepPurple } from '@mui/material/colors';

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

const viewProfile: NextPage = () => {
	return (
        <div>
            <CNavBar />
            <main>
                <div className='h-full flex justify-center items-center'>
                    <div className="bg-gray-50 bg-opacity-30 mt-24 mb-24 shadow rounded-3xl w-11/12 md:w-9/12  p-10" >
                        <div className='grid grid-cols-4'>
                            <Avatar sx={{ bgcolor: deepPurple[300], width: 86, height: 86 }} alt="Remy Sharp" src="/man.png" className='col-span-4 md:col-span-1 mt-4 grid justify-self-center'/>
                            <h1 className='text-2xl md:text-4xl font-medium mt-4 col-span-4 md:col-span-3 grid justify-self-center md:justify-self-start'>Nombre</h1>
                        </div>
                        <div className="content-center w-full flex flex-row items-center">
                            <h1 className=" py-4 text-xl md:text-2xl basis-1/3 font-bold leading-none ">Tipo de usuario:</h1>
                            <p className="  w-2/3 h-1/5 text-xl md:text-2xl leading-none ">Cliente</p>
                        </div>
                        <div className="content-center w-full grid grid-cols-3 items-center">
                            <h1 className=" py-4 text-xl md:text-2xl col-span-3 md:col-span-1 font-bold leading-none ">Correo:</h1>
                            <p className="  col-span-3 md:col-span-2 text-xl md:text-2xl leading-none ">prodriguez1@unal.edu.co</p>
                        </div>
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