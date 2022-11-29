import React from 'react'
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Report({ date, tipeReport, comment}:{date:string, tipeReport:string,comment:string}) {
    
    return (
        <div className='w-full flex justify-center mt-4'>
            <div className="w-11/12 bg-white border border-gray-300 p-5">
                
                <div className="flex flex-nowrap items-center flex justify-between">
                    <p className="text-base font-semibold leading-none" >Reporte de: {tipeReport}</p>
                    <p className="text-sm font-light leading-none" >{date}</p>
                </div>
            
                <p className="text-base font-light leading-none mt-3 text-justify">{comment}</p>
                <div className="mt-2 gap-4">
                    <Button className='mb-3' variant="outlined" color="success">
                        Marcar como solucionado
                    </Button>
                </div>
                    {tipeReport=='Comentario'?
                    <Button variant="outlined" color="error">
                        Eliminar Comentario
                    </Button>
                    : <p/>}
              
                
          </div>
        </div>
    )
}

export default Report