import React from 'react'
import Image from 'next/image'
import LogoImage from 'assets/image/oio.png'
import { FaBell } from '@react-icons/all-files/fa/FaBell'
import ProfileImage from 'assets/image/84a3b991ea73f01ee836d069dcc4b41d37bb4098.jpg'

function Header() {
    return (
        <div className='absolute w-full top-0 left-0 py-3 px-7 flex justify-between items-center'>
            <Image
                src={LogoImage}
                width={100}
                height={100}
                alt='OIO'
                className='pointer-events-none'
            />

            <div className='w-[420px] flex justify-center items-center'>
                <input 
                    type="text"
                    placeholder='Search'
                    className='border-b-2 text-center w-full py-[6px] transition focus:border-b-[#6DADA8] group'
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-6 h-6 left-0 text-gray-400 group-focus-within:text-red-600">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className='flex justify-center items-center space-x-3'>
                <FaBell className='w-6 h-6 text-[#6DADA8]'/>

                <Image
                    src={ProfileImage}
                    width={36}
                    height={36}
                    alt='OIO'
                    className='cursor-pointer rounded-full'
                />

                <span className='text-gray-600 font-semibold cursor-pointer'>로그아웃</span>
            </div>
        </div>
    )
}

export default Header