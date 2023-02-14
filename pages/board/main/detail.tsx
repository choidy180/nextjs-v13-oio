import React from 'react'
import Image from 'next/image'
import ProfileImage from 'assets/image/84a3b991ea73f01ee836d069dcc4b41d37bb4098.jpg'
import Container from '@/components/container'
import { CiImageOn } from "react-icons/ci";
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'

function mainDetail() {
    return (
        <Container>
            <div className='w-full flex flex-col items-center max-w-[400px]'>
                <div className='relative w-[400px] h-[400px] box-border my-10 rounded-full border-solid border-gray-500 border-[1px] group cursor-pointer'>
                    <Image
                        src={ProfileImage}
                        width={1000}
                        height={1000}
                        alt={'Image'}
                        className='object-fill rounded-full z-0'
                    />
                    <CiImageOn
                        className='absolute right-6 bottom-12 w-14 h-14 bg-gray-100 p-2 rounded-full shadow-sm shadow-[#141414]'
                    />
                </div>
                <h4 className='w-full text-2xl font-bold flex items-center space-x-2'><span>1118 한소희</span><span className='flex items-center text-[#6DADA8]'><AiFillHeart/> 1118</span></h4>
            </div>
            {/* <div>
                <Image
                    src={ProfileImage}
                    width={1000}
                    height={1000}
                    alt={'Image'}
                    className='object-fill group-hover:scale-105 transition'
                />
            </div> */}
        </Container>
    )
}

export default mainDetail