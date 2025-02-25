import React , {useState} from 'react'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Button from './Button';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { blue } from '@mui/material/colors';
import PhotosSlider from "./PhotosSlider"
import ModalReport from './ModalReport';
import ModalRating from './ModalRating';
import { auth } from 'config/firebase'
import { Auth, onAuthStateChanged, User } from 'firebase/auth';

function ProfileData({cid, nombreChaza, description,location,tel,days,schedule, categories, img,photos, onComment}:{cid: string, nombreChaza:string,description: string, location: string, tel: string, days: string, schedule: string, categories: string[], img: string, photos: {
    id: number;
    url: string;
    title: string;
}[], onComment: (comentario: any) => void}) {
	const [currentUser, setCurrentUser] = React.useState<User | null>(null);
    const [openModal, setOpenModal] = useState(false)
    const [openModalRate, setOpenModalRate] = useState(false)

    const authState = (currauth: Auth) =>  onAuthStateChanged(currauth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const curruser = user;
			setCurrentUser(curruser);
			// ...
		} else {
			// User is signed out
			// ...
			setCurrentUser(null);
		}
	});

	React.useEffect(() => {
		authState(auth);
	}, [auth, authState]);

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
        
        <p className=" mt-10 text-xl font-bold leading-none">{nombreChaza}</p>
        
        <div className="inline-flex space-x-1.5 items-center justify-end w-36 h-6">
        <Stack onClick={() => {
            if(currentUser){
                setOpenModalRate(true)
            }
            }} spacing={1}>
            
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        </Stack>
        <ModalRating onComment={onComment} uid={currentUser?.uid ? currentUser?.uid : ""} cid={cid} open={openModalRate} onClose={()=> setOpenModalRate(false)}/>
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
            
            <div className="space-y-1 items-start justify-center w-full h-24 px-5 py-3 bg-white shadow border rounded-full border-gray-400">
                <p className="justify-self-center text-sm font-bold leading-none text-gray-700"> Categoria</p>
                <div className='flex flex-row w-full gap-5'>
                {categories.map((cat: string, index: number) => (
                    <div key={index} className="flex items-center text-center w-fit h-fit px-2 py-1 bg-yellow-500  hover:bg-yellow-300 bg-opacity-70 border rounded-full border-gray-700">
                        <p className="text-sm font-medium pt-2 leading-nonetext-black">{cat}</p>
                    </div>
                ))}
                </div>
                
                
            </div>
        </div>
        <div className="flex flex-row w-36 h-10 bg-red-300 hover:bg-red-500 rounded-2xl">
            <div className="m-2 basis-1/5">
                <ErrorOutlineIcon/>
            </div>
            <Button onClick={() => setOpenModal(true)} className="m-2 basis-4/5">
                <p className="text-base font-semibold">Reportar</p>
                
            </Button>   
            <ModalReport open={openModal} onClose={()=> setOpenModal(false)} isChaza={(true)} chaza={cid} />
        </div>

    </div>
  )
}

export default ProfileData