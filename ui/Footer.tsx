import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
			<footer className='mt-3 mb-12 pt-3 bg-gray-900 text-white  w-full flex flex-row flex-wrap items-center justify-center gap-10 xl:gap-24 2xl:gap-36 self-center'>

        {/**Col 1 */}
        <div className='flex flex-col items-center justify-center'>
          <p className='text-lg font-bold'>Nuestras Redes sociales:</p>
          <div className='flex flex-col gap-2 self-auto xl:self-center'>
            <a
            href="https://www.facebook.com/BetterCampus2"
            target="_blank"
            rel="noopener noreferrer"
            >
                <span className='items-center text-md'>
                  <Image src="/images/Facebook.svg" alt="Facebook" width={40} height={40} />
                </span>
            </a>
            <a
            href="https://instagram.com/better_campus"
            target="_blank"
            rel="noopener noreferrer"
            >
                <span className='items-center'>
                  <Image src="/images/Instagram.svg" alt="Instagram" width={40} height={40} />
                </span>
            </a>
          </div>
        </div>
        {/**Col 2 */}

        

        {/**Col 3 */}

        <div className='flex flex-col items-center'>
          <span className='items-center pl-4'>
            <Image src="/images/BetterCampus.png" className='rounded-full' alt="BetterCampus" width={100} height={100} />
          </span>
          <p className='text-lg font-bold font-mono self-center'>BetterCampus&copy; </p>
          <p className='text-lg font-bold font-mono self-center'>v2.0.0</p>
        </div>

        {/**Col 4 */}
        <div className='flex flex-col'>
          <p className='text-lg font-bold'>Contacto:</p>
          <div className='flex flex-col gap-2 self-auto xl:self-center'>
            <a
            href="mailto:ccuello@unal.edu.co"
            target="_blank"
            rel="noopener noreferrer"
            >
                <span className='items-center text-md'>
                  
                  ccuello@unal.edu.co 
                </span>
            </a>
            <a
            href="mailto:jorozcove@unal.edu.co"
            target="_blank"
            rel="noopener noreferrer"
            >
                <span className='items-center text-md'>
                  
                  jorozcove@unal.edu.co 
                </span>
            </a>
          </div>
        </div>

        {/**Col 5 */}
        <div className='flex flex-col'>
          <p className='text-lg font-bold'>Enlaces UNAL:</p>
          <div className='flex flex-col gap-x-2 self-auto xl:self-center'>
            <a
            href="https://unal.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
            className='no-underline hover:underline hover:decoration-dotted'
            >
                <span className='items-center text-md break-all'>
                  Universidad Nacional
                </span>
            </a>
            <a
            href="https://legal.unal.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
            className='no-underline hover:underline hover:decoration-dotted'
            >

                <span className='items-center text-md'>
                  Régimen legal
                </span>
            </a>

            <a
            href="https://bogota.unal.edu.co/"
            target="_blank"
            rel="noopener noreferrer"
            className='no-underline hover:underline hover:decoration-dotted'
            >

                <span className='items-center text-md'>
                  Sede Bogotá
                </span>
            </a>

            <a
            href="https://sia.unal.edu.co/ServiciosApp/facespublico/public/servicioPublico.jsf?taskflowId=task-flow-AC_CatalogoAsignaturas"
            target="_blank"
            rel="noopener noreferrer"
            className='no-underline hover:underline hover:decoration-dotted'
            >

                <span className='items-center text-md'>
                  Catálogo de Asignaturas
                </span>
            </a>
            <a
            href="https://programasacademicos.unal.edu.co"
            target="_blank"
            rel="noopener noreferrer"
            className='no-underline hover:underline hover:decoration-dotted'
            >

                <span className='items-center text-md'>
                  Programas Académicos
                </span>
            </a>
          </div>
        </div>
        
        <br/>
      </footer>
	);
};

export default Footer;