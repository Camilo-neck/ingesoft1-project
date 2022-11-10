import React from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from './Button';
import StarRateIcon from '@mui/icons-material/StarRate';
import { SkeletonCard } from './SkeletonCard';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Avatar from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';
import PhotosSlider from "./PhotosSlider"
const photos = [
    {id:1, url: '/image-1.jpeg', title: 'Image 1'},
    {id:2, url: '/image-2.jpeg', title: 'Image 2'},
    {id:3, url: '/image-3.jpeg', title: 'Image 3'},
]
function ProfileData({nombreChaza, description,location,tel,days,schedule, categorie,img}:{nombreChaza:string,description: string, location: string, tel: string, days: string, schedule: string, categorie: string, img: string}) {
  return (
    <div className='grid justify-items-center '>
        <div className='w-full h-48 relative'>
            <PhotosSlider photos={photos}/>
            <Avatar 
                sx={{ bgcolor: blue[500] , width: 80, height: 80 }} 
                alt={nombreChaza} 
                src= {img}
                className="absolute bottom-0 "
            />
        </div>
        
        <p className="text-xl font-bold leading-none">{nombreChaza}</p>
        
        <div className="inline-flex space-x-1.5 items-center justify-end w-36 h-6">
            <StarRateIcon className="w-1/6 h-full rounded-lg fill-yellow-300"/>
            <StarRateIcon className="w-1/6 h-full rounded-lg fill-yellow-300"/>
            <StarRateIcon className="w-1/6 h-full rounded-lg fill-yellow-300"/>
            <StarRateIcon className="w-1/6 h-full rounded-lg fill-yellow-300"/>
            <StarHalfIcon className="w-1/6 h-full rounded-lg fill-yellow-300"/>
        </div>
        <div className="justify-items-center inline-flex flex-col space-y-4 items-center justify-start h-5/6 m-2">
            <div className="divide-y flex flex-col space-y-4 items-start justify-end w-full h-52 pl-3 pr-4 pt-4 pb-1.5 bg-white shadow border rounded-3xl border-gray-400">
                <p className="text-sm font-light leading-none">{description}</p>
                <div className="content-center w-full flex flex-row items-center">
                    <p className=" py-4 text-sm basis-1/3 font-bold leading-none text-gray-700">Ubicación:  </p>
                    <p className="  w-2/3 h-1/5 text-sm leading-none text-gray-700">{location}</p>
                </div>
                <div className="content-center w-full flex flex-row items-center">
                    <p className=" py-4 text-sm basis-1/3 font-bold leading-none text-gray-700">Telefono:  </p>
                    <p className="  w-2/3 h-1/5 text-sm leading-none text-gray-700">{tel}</p>
                </div>
                
            </div>
            <div className="flex-col space-y-1 items-start justify-center w-full h-28 pl-3 pr-4 pt-2 pb-1 bg-white shadow border rounded-3xl border-gray-400">
                <p className="justify-self-center text-sm font-bold leading-none text-gray-700"> Horario de atención</p>
                <div className="content-center h-1/3 w-full flex flex-row items-center">
                    <p className=" py-4 text-sm basis-1/3 font-bold leading-none text-gray-700">Dias:  </p>
                    <p className="  w-2/3 h-1/5 text-sm leading-none text-gray-700">{days}</p>
                </div>
                <div className="content-center h-1/3 w-full flex flex-row items-center">
                    <p className=" py-4 text-sm basis-1/3 font-bold leading-none text-gray-700">Hora:  </p>
                    <p className="  w-2/3 h-1/5 text-sm leading-none text-gray-700">{schedule}</p>
                </div>
                
            </div>
            
            <div className="space-y-1 items-start justify-center w-full h-20 pl-3 pr-4 pt-2 pb-1 bg-white shadow border rounded-3xl border-gray-400">
                <p className="justify-self-center text-sm font-bold leading-none text-gray-700"> Categoria</p>
                <div className="grid justify-items-center content-center w-20 h-8 absolute bg-yellow-500  hover:bg-yellow-300 bg-opacity-70 border rounded-full border-gray-700">
                    <p className="absolute text-sm font-medium pt-2 leading-none text-black">{categorie}</p>
                </div>
                
                
            </div>
        </div>
        <div className="flex flex-row w-36 h-10 bg-red-300 hover:bg-red-500 rounded-2xl">
            <div className="m-2 basis-1/5">
                <ErrorOutlineIcon/>
            </div>
            <Button className="m-2 basis-4/5">
                <p className="text-base font-semibold">Reportar</p>
            </Button>   
        </div>

    </div>
  )
}

export default ProfileData