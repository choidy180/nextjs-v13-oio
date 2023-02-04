import React, { useState } from 'react'
import LogoImage from 'assets/image/oio.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Start() {
    const router = useRouter()
    const [saveId, setSaveId] = useState<Boolean>(false)
    return (
        <div className='w-screen h-screen flex justify-start items-center'>
            <div className='absolute green1 justify-center items-center min-w-[340px] w-[40vw] h-screen hidden lg:flex overflow-hidden shadow-lg'>
                <div className='w-[330px] h-[330px] flex justify-center items-center bg-white -mt-[10vh] rounded-full shadow-lg pointer-events-none z-40 lg:w-[400px] lg:h-[400px]'>
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
            <div className='absolute min-h-screen w-screen flex justify-center items-center lg:pl-[calc(40vw)]'>
                <div className='-mt-[10vh] flex flex-col justify-center items-start w-[100%] space-y-14 max-w-[500px]'>
                    <h1 className='text-4xl font-semibold'>로그인</h1>
                    <div className='startInputBox pt-10 group transition'>
                        <h4 className='title group-focus-within:text-[#6DADA8]'>이메일</h4>
                        <input type="text" placeholder='example@email.com' className='w-full placeholder:tracking-wide'/>
                    </div>
                    <div className='startInputBox group transition'>
                        <h4 className='title group-focus-within:text-[#6DADA8]'>비밀번호</h4>
                        <input type="text" placeholder='password' className='w-full placeholder:tracking-wide'/>
                    </div>
                    
                    <div className='w-full flex justify-between items-center'>
                        <p 
                            className={`flex items-center text-xl cursor-pointer text-slate-500 ${saveId && 'text-slate-900'}`}
                            onClick={()=> setSaveId((e) => !e)}
                        >
                            {
                                saveId ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                                </svg>
                            }
                            <span className='pointer-events-none select-none'>아이디 저장</span>
                        </p>
                        <button className='green3 text-white px-6 py-[6px] rounded-md transition hover:green1'>
                            로그인
                        </button>
                    </div>
                </div>
                <p className='absolute bottom-[5vh] left-[60px] text-lg text-gray-600  lg:left-[calc(40vw+60px)] cursor-pointer'>
                    아이디/비밀번호 찾기
                </p>
                <p 
                    className='absolute right-[60px] bottom-[5vh] text-lg text-gray-600 cursor-pointer'
                    onClick={()=>router.push('/user/join')}
                >
                    아직 계정이 없으신가요?
                </p>
            </div>
        </div>
    )
}

export default Start