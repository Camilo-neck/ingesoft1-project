import CNavBar from "./chazamNavBar"
import Footer from "./Footer"
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import ProfileData from "./ProfileData"
import ProfileRatings from "./ProfileRatings"
const profileData =
    {
        nombre:"Nombre de la chaza",
        avatar:"/man.png",
        description: "Descripcion a detalle de la chaza",
        location: "Descripción ubicación de la chaza",
        tel: "321544987",
        days: "Lunes a jueves",
        schedule: "9:00  - 17:00",
        categorie: "Varios",
        photos: [
            {id:1, url: '/image-1.jpeg', title: 'Image 1'},
            {id:2, url: '/image-2.jpeg', title: 'Image 2'},
            {id:3, url: '/image-3.jpeg', title: 'Image 3'},
        ]
    }  
const profileRaitings = {
    meanGrade: 3.5,
    raitings: [
        {userName:'Usuario1', userPhoto: '/man.png', grade: 3, date:"14/10/2022 09:32", comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
        {userName:'Usuario2', userPhoto: '/man.png', grade: 1, date:"14/10/2022 09:32",comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
        {userName:'Usuario3', userPhoto: '/man.png', grade: 1.5, date:"14/10/2022 09:32",comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '},
        {userName:'Usuario4', userPhoto: '/man.png', grade: 5, date:"14/10/2022 09:32", comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    ]
}

export default function LayoutProfile({ chaza, children }: { chaza: any, children: React.ReactNode }) {
    
	return (
		<div className="">
			<CNavBar />
			<main className="">
                <div className="flex flex-column gap-6">
                    <div className=" basis-1/5 sm:w-1/2 bg-white shadow-xl border border-gray-400">
                        <ProfileData uid={chaza.uid} nombreChaza={chaza.nombre} description ={chaza.descripcion} location={chaza.ubicacion} tel={chaza.telefono} days={profileData.days} schedule ={chaza.horario} categories={chaza.categorias} img={profileData.avatar} photos={profileData.photos}/>
                    </div>
                    <div className="mt-6 mb-6 basis-4/5 sm:w-1/2 bg-white overflow-auto scrollbar-hide">
                        <ProfileRatings meanGrade={chaza.calificacion.toFixed(1)} raitings={profileRaitings.raitings}/>
                        
                    </div>
                    
                </div>      
			</main>
			<Footer />
		</div>
	)
}