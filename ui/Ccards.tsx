import styles from '@/styles/Home.module.css'
import Image from "next/image"
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Ccards({cardImage,cardImageDescription, cardTitle, cardSubtitle}:{cardImage: string; cardImageDescription: string;cardTitle: string; cardSubtitle: string}) {
	const router = useRouter();
	const select = router.query.categoria === cardTitle;
	return (
		
		<div className={`w-fit m-4 bg-white border rounded-xl ${select ? 'border-orange-500 shadow-md shadow-orange-200' : 'border-gray-300'} inline-block cursor-pointer hover:scale-105 ease-in-out duration-300`}>
			<Link href={"/catalog?categoria="+ cardTitle}>
			<div className='flex flex-col gap-2 items-center justify-center px-3 py-2'>
				<img src={cardImage} alt={cardImageDescription} className='w-[7rem] sm:w-28 md:w-20 h-fit ' />
				<div className="text-center justify-items-center">
					<p className="mt-2 text-base font-semibold tracking-widest leading-none"> {cardTitle}</p>
				</div>
			</div>
			</Link>
		</div>
	)
}
