import React from 'react'
import Image from 'next/image'
import ProfileImage from 'assets/image/84a3b991ea73f01ee836d069dcc4b41d37bb4098.jpg'
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'
import { AiOutlineEye } from '@react-icons/all-files/ai/AiOutlineEye'
import { useRouter } from 'next/router'

const MainBox = () => {
    const router = useRouter()
    return (
        <div 
            className='flex flex-col w-full cursor-pointer px-2 mt-10 
            2xl:w-[calc(100%/5)]  xl:w-[calc(100%/4)] xl:px-3 lg:w-[calc(100%/3)] md:w-[calc(100%/2)] sm:w-full group'
            onClick={() => router.push('/board/main/detail')}
        >
            <div 
                className='w-full h-96 overflow-hidden flex justify-center items-center rounded-xl 
                2xl:h-48 xl:h-60 lg:h-64 md:h-72 sm:h-96 sm:min-w-full'
            >
                <Image
                    src={ProfileImage}
                    width={1000}
                    height={1000}
                    alt={'Image'}
                    className='object-fill group-hover:scale-105 transition'
                />
            </div>

            <div className='flex justify-between items-center mt-2'>
                <h4 className='font-semibold text-lg tracking-tight'>3303 한소희</h4>
                <p className='flex items-center space-x-2'>
                    <span className='flex items-center transition text-lg space-x-3 text-gray-600 group-hover:text-red-500'>
                        <AiFillHeart/>164
                    </span>
                    <span className='flex items-center transition text-lg space-x-3 text-gray-600 group-hover:text-blue-500'>
                        <AiOutlineEye/>208
                    </span>
                </p>
            </div>

            <p className='mt-2 max-h-12 overflow-hidden'>{'2016년 SHINee의 Tell Me What To Do M/V에 출연하면서 연예계에 데뷔했고, 2020년 JTBC 부부의 세계에서 여다경 역을 맡아 일약 스타덤에 올랐다. 이후 알고있지만,과 마이 네임 등 여러 드라마에서 주조연을 맡으며 활동을 이어가고 있다.'}</p>
        </div>
    )
}

export default MainBox