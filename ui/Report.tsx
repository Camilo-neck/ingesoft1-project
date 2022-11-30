import React from 'react'
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

function Report({id, date, tipeReport, comment}:{id:string,date:string, tipeReport:string,comment:string}) {
    
    // const handleComments = () => {
        
    //     fetch(`http://localhost:3000/api/deleteComment?id=${coid}`)
    //   }

      const handleReport = () => {
        
        fetch(`http://localhost:3000/api/reporte?id=${id}`)
      }  
    return (
        <div className='w-full flex justify-center mt-4'>
            <div className="w-11/12 bg-white border border-gray-300 p-5">
                
                <div className="flex flex-nowrap items-center flex justify-between">
                    <p className="text-base font-semibold leading-none" >Reporte de: {tipeReport}</p>
                    <p className="text-sm font-light leading-none" >{date}</p>
                </div>
            
                <p className="text-base font-light leading-none mt-3 text-justify">{comment}</p>
                <div className="mt-2 gap-4">
                    <Link href={'/admiReport'}>
                        <Button onClick={handleReport} className='mb-3' variant="outlined" color="success">
                            Marcar como solucionado
                        </Button>
                    </Link>
                </div>
                    {tipeReport=='Comentario'?
                    <Button  variant="outlined" color="error">
                        Eliminar Comentario
                    </Button>
                    : <p/>}
              
                
          </div>
        </div>
    )
}

export default Report