import Head from 'next/head'
import React from 'react'
import LogoImage from 'assets/image/oio.png'
import Image from 'next/image'
import { AiOutlineCamera } from '@react-icons/all-files/ai/AiOutlineCamera'

function Enterjoin() {
    return (
        <>
            <Head>
                <title>회원 정보입력</title>
            </Head>
            <div className='w-screen h-screen flex flex-col justify-start items-center py-14 space-y-4 overflow-hidden'>
                <Image
                    src={LogoImage}
                    width={150}
                    height={150}
                    alt='OIO'
                    className='pointer-events-none'
                />
                <h2 className='mt-8 text-black/60 text-xl pt-8'>자기 자신만의 포트폴리오를 채워나가보세요</h2>

                <div className='w-[260px] h-[260px] dpflex-col rounded-full shadow-md cursor-pointer'>
                    <AiOutlineCamera className='w-[125px] h-[125px]'/>
                    <h4 className='text-black/60 mt-2 text-lg'>프로필 사진 추가</h4>
                </div>

                <div className='w-[340px] space-y-3 pt-10'>
                    <input 
                        type="text" 
                        placeholder='이름을 입력하세요'
                        className='enterJoinInput'
                    />
                    <input 
                        type="text" 
                        placeholder='학교를 입력하세요'
                        className='enterJoinInput'
                    />
                    <div className='dflex-col space-y-2 py-4'>
                        <h4>한줄 소개</h4>
                        <textarea 
                            placeholder='내용을 입력하세요'
                            className='enterJoinInput outline-none resize-none h-[142px]'
                        />
                    </div>
                </div>
                <button
                    className='absolute green3 py-2 w-[140px] text-white text-lg rounded-lg right-[5vw] bottom-[3vh]'
                >
                    완료
                </button>

                <div className='absolute green2 w-[20vw] h-[20vw] -bottom-[6vw] -left-[4vw] rounded-full'/>
                <div className='absolute green1 w-[20vw] h-[20vw] -top-[6vw] -right-[4vw] rounded-full'/>
            </div>
        </>
    )
}

export default Enterjoin
