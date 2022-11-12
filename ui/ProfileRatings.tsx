import React from 'react'
import ProgressBar from './ProgressBar'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Comment from './Comment';

function ProfileRatings({meanGrade, raitings}:{meanGrade: number, raitings: {
    userName: string;
    userPhoto: string;
    grade: number;
    date: string;
    comment: string;
}[]}) {
  return (
    <div className='w-full h-screen grid justify-items-center mt-7'>
        <div className="relative w-full h-56 grid justify-items-center gap-8" >
            <div className="w-11/12 justify-self-center relative absolute left-0 top-0 bg-gray-50 bg-opacity-30 shadow rounded-3xl grid justify-items-stretch flex flex-wrap" >
            <p className="absolute text-3xl font-medium leading-none mt-7 ml-9">Calificaciones </p>
            <div className="justify-self-center md:divide-x bg-white border rounded-3xl border-gray-200 w-3/4 mt-20 mb-4 flex flex-row mx-auto container grid grid-cols-3">
                <div className="col-span-3 md:col-span-2 mt-4 grid justify-items-center">
                    <ProgressBar stars={5} progress={60}/>
                    <ProgressBar stars={4} progress={20}/>
                    <ProgressBar stars={3} progress={10}/>
                    <ProgressBar stars={2} progress={8}/>
                    <ProgressBar stars={1} progress={2}/>
                    <p className="text-xs leading-none text-gray-500">340 calificaciones</p>
                </div>
                <div className="col-span-3 md:col-span-1 grid justify-items-center">
                    <p className="w-14 h-8 text-3xl font-bold leading-none mt-8">{meanGrade}</p>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={meanGrade} precision={0.5} readOnly />
                    </Stack>
                    <p className="w-8/10 h-8 text-sm font-light leading-none">Últimos 30 días</p>
                </div>
                
            </div>
            
            </div>
            <div className="w-11/12 pb-3 justify-self-center  bg-gray-50 bg-opacity-30 shadow rounded-3xl">
                <p className="text-3xl font-medium leading-none mt-7 ml-9">Comentarios</p>
                {raitings.map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <Comment userName={item.userName} userPhoto={item.userPhoto} grade={item.grade} date={item.date} comment={item.comment}/>
                ))}
                
            </div>
        </div>
        
    </div>
  )
}

export default ProfileRatings