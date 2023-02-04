import React from 'react'
import LogoImage from 'assets/image/oio.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

function StartOio() {
    const router = useRouter()
    return (
    <div className='absolute green1 justify-center items-center min-w-[340px] w-[40vw] h-screen hidden lg:flex overflow-hidden shadow-lg'>
        <div 
            className='w-[330px] h-[330px] flex justify-center items-center bg-white -mt-[10vh] 
            rounded-full shadow-lg z-40 lg:w-[400px] lg:h-[400px] cursor-pointer'
            onClick={() => router.push('/start')}
        >
            <Image
                src={LogoImage}
                width={250}
                height={250}
                alt='OIO'
                className='animate-pulse pointer-events-none'
            />
        </div>
        <div 
            className='w-[320px] h-[320px] green3 absolute rounded-full top-0 left-0 -mt-[120px] -ml-[110px] 
            xl:w-[420px] xl:h-[420px]'
        />
        <div 
            className='w-[320px] h-[320px] green2 absolute rounded-full right-0 bottom-0 -mb-[120px] -mr-[110px]
            xl:w-[420px] xl:h-[420px]'
        />
    </div>
  )
}

export default StartOio