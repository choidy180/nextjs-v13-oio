import React, { useState } from 'react'
import Head from 'next/head'
import { CiMail } from 'react-icons/ci'
import StartOio from '@/components/start/oio'

function Certified() {
    const [step, setStep] = useState<number>(1)
    const [email, setEmail] = useState<string>('')
    const [complete, setComplete] = useState<Boolean>(false)

    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    const nextStep = () => {
        if (regex.test(email)) {
            setStep((e) => e+1)
        } else {
            alert('이메일을 확인해주세요')
        }
    }
    return (
        <>
            <Head>
                <title>회원정보 찾기</title>
            </Head>
            <div className='w-screen h-screen flex justify-start items-center'>
                <StartOio/>
                <div className='absolute min-h-screen w-screen flex justify-center items-center lg:pl-[calc(40vw)]'>
                    <div className='-mt-[10vh] flex flex-col justify-center items-start w-[100%] space-y-10 max-w-[500px]'>
                        <h1 className='text-4xl font-semibold'>
                            {
                                step === 0 ? 
                                '비밀번호 찾기' :
                                '이메일 인증'
                            }
                        </h1>
                        {
                            step === 0 ?
                            <div className='w-full py-10 space-y-14 flex flex-col'>
                                <div className='startInputBox pt-10 group transition'>
                                    <h4 className='title group-focus-within:text-[#6DADA8]'>이메일</h4>
                                    <input 
                                        type="text" 
                                        placeholder='example@email.com'
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        className='w-full placeholder:tracking-wide'
                                    />
                                </div>

                                <p 
                                    className='flex absolute right-0 -bottom-[20px] items-center cursor-pointer 
                                    text-gray-500 transition hover:text-black'
                                    onClick={nextStep}
                                >
                                    <span className='text-lg mr-2'>다음으로 진행</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </p>
                            </div> :
                            <div className='w-full flex flex-col justify-center items-center py-16'>
                                <button className='absolute right-0 top-6 green3 py-[6px] px-5 rounded-full text-white'>이메일 재전송</button>
                                <CiMail className="w-32 h-32 text-[#6DADA8]"/>
                                <h1 className='text-center text-2xl font-semibold'>인증 메일을 발송했습니다<br/>메일함을 확인하여 이메일 인증코드를 입력해주세요</h1>

                                <div className='startInputBox group transition w-[300px] pt-[60px]'>
                                    <input type="text" placeholder='인증번호를 입력하세요' className='w-full placeholder:tracking-wide text-center text-xl'/>
                                </div>

                                <button 
                                    className={
                                        `mt-16 green3 py-2 px-14 text-white text-xl rounded-xl ${!complete && 'bg-gray-500'}`
                                    }
                                >
                                    완료
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certified