import React from 'react'
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

function Report({id, coid, date, tipeReport, comment}:{id:string,coid:string,date:string, tipeReport:string,comment:string}) {
    
    const handleComments = () => {
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/deleteComment?id=${coid}`)
    }

    const handleReport = () => {
        
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/reporte?id=${id}`)
    } 
    const refreshPage = ()=>{
        window.parent.location.reload();
    } 
    return (
        <div className='w-full flex justify-center mt-4'>
            <div className="w-11/12 bg-white border border-gray-300 p-5">
                
                <div className="flex flex-nowrap items-center flex justify-between">
                    <p className="text-base font-semibold leading-none" >Reporte de: {tipeReport}</p>
                    <p className="text-sm font-light leading-none" >{date}</p>
                </div>
            
                <p className="text-base font-light leading-none mt-3 text-justify">{comment}</p>
                <div  className="mt-2 gap-4">
                    
                    <Stack className='w-2/5'>
                    
                        <Button onClick={handleReport} className='mb-3' variant="outlined" color="success">
                            Marcar como solucionado
                        </Button>
                        
                    </Stack>
                        
                    
                    {tipeReport=='Comentario'?
                    <Link href={'/admiReport'}>
                        <Stack onClick={handleReport} className='w-2/5'>
                            <Stack onClick={handleComments} className=''>
                                <Button variant="outlined" color="error">
                                    Eliminar Comentario
                                </Button>
                            </Stack>
                            
                        </Stack>
                        
                    </Link>
                    : <p/>}
                </div>
                    
              
                
          </div>
        </div>
    )
}

export default Report