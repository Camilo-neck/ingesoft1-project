import React from 'react'
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

function Report({userName, userPhoto, date, tipeReport, causa, comment}:{userName:string, userPhoto:string,  date:string, tipeReport:string, causa:string,comment:string}) {
    
    return (
      <div className='w-full flex justify-center mt-4'>
          <div className="w-11/12 bg-white border border-gray-300 p-3">
              <div className="flex flex-nowrap items-center gap-5">
                  <Avatar 
                      sx={{ bgcolor: blue[500] , width: 32, height: 32 }} 
                      alt={userName} 
                      src= {userPhoto}
                      className=""
                  />
                  <p className="text-sm font-semibold leading-none">{userName} </p>
                </div>
                
                <div className="flex flex-nowrap items-center flex justify-between">
                    <p className="text-base font-semibold leading-none" >Reporte de: {tipeReport}</p>
                    <p className="text-sm font-light leading-none" >{date}</p>
                </div>
                <p className="text-base font-semibold leading-none text-justify">Causa: {causa}</p>
                <p className="text-base font-light leading-none text-justify">{comment}</p>
                <div className="mt-2 flex flex-nowrap items-center flex justify-between">
                    
              
              </div>
          </div>
      </div>
    )
}

export default Report