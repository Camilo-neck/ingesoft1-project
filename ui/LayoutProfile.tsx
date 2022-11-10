import CNavBar from "./chazamNavBar"
import Footer from "./Footer"
import Image from "next/image"
import styles from '@/styles/Home.module.css'
import ProfileData from "./ProfileData"
const photos = [
    {id:1, url: '/image-1.jpeg', title: 'Image 1'},
    {id:2, url: '/image-2.jpeg', title: 'Image 2'},
    {id:3, url: '/image-3.jpeg', title: 'Image 3'},
]
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
    }  


export default function LayoutProfile({ children }: { children: React.ReactNode }) {
    
	return (
		<div className="">
			<CNavBar />
			<main className="h-screen">
                <div className="flex flex-row gap-4">
                    <div className="h-screen basis-1/5 sm:w-1/2 bg-white shadow-xl border border-gray-400">
                        <ProfileData nombreChaza={profileData.nombre} description ={profileData.description} location={profileData.location} tel={profileData.tel} days={profileData.days} schedule ={profileData.schedule} categorie ={profileData.categorie} img={profileData.avatar}/>
                    </div>
                    <div className="h-screen basis-4/5 sm:w-1/2 bg-blue-200">
                        
                        
                        
                    </div>
                    
                </div>      
			</main>
			<Footer />
		</div>
	)
}