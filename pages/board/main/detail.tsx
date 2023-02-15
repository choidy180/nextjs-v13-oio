import React from 'react'
import Image from 'next/image'
import ProfileImage from 'assets/image/84a3b991ea73f01ee836d069dcc4b41d37bb4098.jpg'
import Container from '@/components/container'
import { CiImageOn } from "react-icons/ci";
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'
import { AiOutlinePaperClip } from '@react-icons/all-files/ai/AiOutlinePaperClip'
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus'
import { BsHeart } from '@react-icons/all-files/bs/BsHeart'

function mainDetail() {
    return (
        <Container>
            {/* <div className='w-full flex flex-col items-start max-w-[400px] pb-10'>
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
                <h4 className='text-2xl font-bold flex items-center space-x-2'><span>1118 한소희</span><span className='flex items-center text-[#6DADA8]'><AiFillHeart/> 1118</span></h4>
                <h4 className='text-lg text-gray-500'>9아토엔터테인먼트</h4>
                <h4 className='text-lg mt-3'>달려라 소희</h4>
                <p className='mt-4 board_detail_moreInfo'>
                    <AiOutlinePaperClip className='w-6 h-6'/>
                    <span>https://www.instagram.com/xeesoxee</span>
                </p>
                <p className='board_detail_moreInfo'>
                    <AiOutlineMail className='w-6 h-6'/>
                    <span>xeesoxee@naver.com</span>
                </p>
                <p className='board_detail_moreInfo'>
                    <BsHeart className='w-6 h-6'/>
                    <span>좋아요를 준 포트폴리오 1118</span>
                </p>

                <button className='mt-5 py-3 px-28 rounded-lg border-solid border-[2px] text-base border-gray-300 text-gray-500'>프로필 수정</button>

                <div className='w-full flex flex-col justify-center items-start'>
                    <h4 className='py-4 pt-16 text-xl font-semibold'>사용 기술</h4>
                    <p className='flex items-center text-right absolute right-0 top-28'><span>추가</span><AiOutlinePlus/></p>
                    
                    <div className='w-full flex flex-col justify-center items-start'>
                        <h4 className='font-semibold mt-8'>React</h4>
                        <span className='text-sm left-[calc(90%-12px)]'>90%</span>
                        <div className='w-full h-2 bg-gray-200 rounded-xl'>
                            <div className='absolute top-0 rounded-xl left-0 w-[calc(90%)] h-2 bg-[#54C0D0]'/>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-start'>
                        <h4 className='font-semibold mt-8'>node.js</h4>
                        <span className='text-sm left-[calc(90%-12px)]'>90%</span>
                        <div className='w-full h-2 bg-gray-200 rounded-xl'>
                            <div className='absolute top-0 rounded-xl left-0 w-[calc(90%)] h-2 bg-[#586A90]'/>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-start'>
                        <h4 className='font-semibold mt-8'>Next.js</h4>
                        <span className='text-sm left-[calc(70%-12px)]'>70%</span>
                        <div className='w-full h-2 bg-gray-200 rounded-xl'>
                            <div className='absolute top-0 rounded-xl left-0 w-[calc(70%)] h-2 bg-[#58938A]'/>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-start'>
                        <h4 className='font-semibold mt-8'>Firebase</h4>
                        <span className='text-sm left-[calc(100%-12px)]'>100%</span>
                        <div className='w-full h-2 bg-gray-200 rounded-xl'>
                            <div className='absolute top-0 rounded-xl left-0 w-[calc(100%)] h-2 bg-[#935B7F]'/>
                        </div>
                    </div>
                </div>

            </div> */}
            <div className='w-full flex flex-col items-start'>
                <h4 className='text-xl font-semibold'>프로젝트</h4>
                 
                 <div className='w-full space-y-2'>
                    {[0,1,2,3,4].map((content, i) => (
                        <div key={i} className='w-full border-[1.6px] p-5 rounded-lg shadow-sm'>
                            123
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default mainDetail