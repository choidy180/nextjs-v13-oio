import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProfileImage from 'assets/image/84a3b991ea73f01ee836d069dcc4b41d37bb4098.jpg'
import { CiImageOn } from "react-icons/ci";
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart'
import { AiOutlinePaperClip } from '@react-icons/all-files/ai/AiOutlinePaperClip'
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus'
import { BsHeart } from '@react-icons/all-files/bs/BsHeart'
import appleLogo from 'assets/image/apple.png'
import { BsChevronRight } from '@react-icons/all-files/bs/BsChevronRight'
import Container from '@/components/Container';
import Head from 'next/head';

function MainDetail() {
    const [windowWidth, setWindowWidth] = useState<number>(0)

    // resize 될때만 함수 불러오기
    let timer: string | number | NodeJS.Timeout | undefined
    const resizeWindow = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
        // 현재 window width 값
        setWindowWidth(window.innerWidth)
        }, 100)
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener("resize", resizeWindow)
        return () => {
            window.removeEventListener("resize", resizeWindow)
        }
    }, [windowWidth])
    return (
        <>  
            <Head>
                <title>상세페이지</title>
            </Head>
            <Container>
                <div className='w-full min-h-screen flex flex-col justify-center items-center lg:flex-row lg:space-x-[6vw] lg:pt-24 lg:items-start lg:px-4'>
                    <div className='w-full flex flex-col items-start max-w-[400px] pb-10'>
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
                        <h4 className='text-lg mt-3'>달려라 소희 {windowWidth}</h4>
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
                                <span className='text-sm left-[calc(90%-16px)]'>90%</span>
                                <div className='w-full h-2 bg-gray-200 rounded-xl'>
                                    <div className='absolute top-0 rounded-xl left-0 w-[calc(90%)] h-2 bg-[#54C0D0]'/>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center items-start'>
                                <h4 className='font-semibold mt-8'>node.js</h4>
                                <span className='text-sm left-[calc(90%-16px)]'>90%</span>
                                <div className='w-full h-2 bg-gray-200 rounded-xl'>
                                    <div className='absolute top-0 rounded-xl left-0 w-[calc(90%)] h-2 bg-[#586A90]'/>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center items-start'>
                                <h4 className='font-semibold mt-8'>Next.js</h4>
                                <span className='text-sm left-[calc(70%-16px)]'>70%</span>
                                <div className='w-full h-2 bg-gray-200 rounded-xl'>
                                    <div className='absolute top-0 rounded-xl left-0 w-[calc(70%)] h-2 bg-[#58938A]'/>
                                </div>
                            </div>
                            <div className='w-full flex flex-col justify-center items-start'>
                                <h4 className='font-semibold mt-8'>Firebase</h4>
                                <span className='text-sm left-[calc(100%-16px)]'>100%</span>
                                <div className='w-full h-2 bg-gray-200 rounded-xl'>
                                    <div className='absolute top-0 rounded-xl left-0 w-[calc(100%)] h-2 bg-[#935B7F]'/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex flex-col items-start lg:pt-10'>
                        <h4 className='text-xl font-semibold'>프로젝트</h4>
                        <div className='w-full space-y-4 py-4 flex flex-col flex-wrap xl:flex-row xl:space-y-2 xl:justify-between'>
                            {[0,1,2,3,4].map((content, i) => (
                                <div 
                                    key={i} 
                                    className={
                                        `w-full h-20 border-[1.6px] p-5 rounded-lg shadow-sm flex justify-start items-center transition 
                                        space-x-4 group hover:border-gray-400 cursor-pointer xl:w-[calc(50%-6px)]`
                                    }
                                    style={(i === 1 && windowWidth >= 1280)? {marginTop: '0px'} : {backgroundColor: 'transparent'}}

                                >
                                    <div className='w-10 h-10'>
                                        <Image
                                            src={appleLogo}
                                            width={100}
                                            height={100}
                                            quality={100}
                                            alt={'Image'}
                                            className='object-fill rounded-full z-0'
                                        />
                                    </div>
                                    
                                    <div className='flex flex-col items-start space-y-[2px]'>
                                        <p className='leading-4 font-bold'>APPLE {i===1 && '123'}</p>
                                        <p className='leading-4 text-gray-600'>Think Different</p>
                                    </div>

                                    <BsChevronRight
                                        className='absolute right-4 w-6 h-6 transition text-gray-400 cursor-pointer group-hover:text-gray-600'
                                    />
                                </div>
                            ))}
                            
                            <div className='w-full h-20 p-5 rounded-lg bg-[#E8F4E6] flex justify-center items-center cursor-pointer xl:w-[calc(50%-6px)]'>
                                <AiOutlinePlus
                                    className='w-6 h-6 text-[#6DADA8]'
                                />
                            </div>

                        </div>

                        <h4 className='text-xl font-semibold mt-10'>수상경력</h4>
                        {/* 수상경력 */}
                        <div className='w-full space-y-2 py-4'>
                            <div className='w-full h-20 border-[1.6px] p-5 rounded-lg shadow-sm flex justify-start items-center transition space-x-4 group hover:border-gray-400 cursor-pointer'>
                                <div className='flex flex-col items-start space-y-[2px]'>
                                    <p className='leading-4 font-bold'>RedDot Design Award 2021 Winner</p>
                                    <p className='leading-4 text-gray-600'>Black Purl</p>
                                </div>
                            </div>
                            <div className='w-full h-20 border-[1.6px] p-5 rounded-lg shadow-sm flex justify-start items-center transition space-x-4 group hover:border-gray-400 cursor-pointer'>
                                <div className='flex flex-col items-start space-y-[2px]'>
                                    <p className='leading-4 font-bold'>RedDot Design Award 2021 Winner</p>
                                    <p className='leading-4 text-gray-600'>Black Purl</p>
                                </div>
                            </div>
                            <div className='w-full h-20 border-[1.6px] p-5 rounded-lg shadow-sm flex justify-start items-center transition space-x-4 group hover:border-gray-400 cursor-pointer'>
                                <div className='flex flex-col items-start space-y-[2px]'>
                                    <p className='leading-4 font-bold'>RedDot Design Award 2021 Winner</p>
                                    <p className='leading-4 text-gray-600'>Black Purl</p>
                                </div>
                            </div>
                            <div className='w-full h-20 p-5 rounded-lg bg-[#E8F4E6] flex justify-center items-center cursor-pointer'>
                                <AiOutlinePlus
                                    className='w-6 h-6 text-[#6DADA8]'
                                />
                            </div>
                        </div>

                        <h4 className='text-xl font-semibold mt-10'>자격증</h4>
                        {/* 수상경력 */}
                        <div className='w-full space-y-2 py-4'>
                            <div className='w-full h-auto border-[1.6px] p-5 rounded-lg shadow-sm flex justify-start items-center transition space-x-4 group hover:border-gray-400 cursor-pointer'>
                                <div className='flex flex-col items-start space-y-[2px]'>
                                    <p className='leading-4 font-bold'>TOEIC - 850</p>
                                    <p className='leading-4 text-gray-600'>YBM</p>
                                    <p className='leading-4 text-gray-400 pt-2'>2020년 8월 ~2022년 8월</p>
                                </div>
                            </div>
                            <div className='w-full h-20 p-5 rounded-lg bg-[#E8F4E6] flex justify-center items-center cursor-pointer'>
                                <AiOutlinePlus
                                    className='w-6 h-6 text-[#6DADA8]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default MainDetail