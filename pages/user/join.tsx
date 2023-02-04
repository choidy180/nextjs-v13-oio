import React from 'react'
import { useRouter } from 'next/router'
import StartOio from '../../components/start/oio'

function join() {
    const router = useRouter()
    return (
        <div className='w-screen h-screen flex justify-start items-center'>
            <StartOio/>
            <div className='absolute min-h-screen w-screen flex justify-center items-center lg:pl-[calc(40vw)]'>
                <div className='-mt-[10vh] flex flex-col justify-center items-start w-[100%] space-y-10 max-w-[500px]'>
                    <h1 className='text-4xl font-semibold'>회원가입</h1>

                    <div className='w-full py-10 space-y-14 flex flex-col'>
                        <div className='startInputBox pt-10 group transition'>
                            <button className='absolute right-0 top-[92px] z-10 green3 py-[3px] text-base px-4 text-white rounded-full'>중복확인</button>
                            <h4 className='title group-focus-within:text-[#6DADA8]'>이메일</h4>
                            <input type="text" placeholder='example@email.com' className='w-full placeholder:tracking-wide'/>
                        </div>
                        <div className='startInputBox group transition'>
                            <h4 className='title group-focus-within:text-[#6DADA8]'>비밀번호</h4>
                            <input type="text" placeholder='password' className='w-full placeholder:tracking-wide'/>
                        </div>
                        <div className='startInputBox group transition'>
                            <h4 className='title group-focus-within:text-[#6DADA8]'>비밀번호 확인</h4>
                            <input type="text" placeholder='password' className='w-full placeholder:tracking-wide'/>
                        </div>

                        <button className='absolute right-0 -bottom-[40px] green3 py-[6px] text-xl px-10 text-white rounded-xl'>완료</button>
                    </div>
                </div>
                <p 
                    className='absolute bottom-[5vh] left-[60px] text-lg text-gray-600  lg:left-[calc(40vw+60px)] 
                    cursor-pointer'
                    onClick={()=> router.push('/user/certified')}
                >
                    아이디/비밀번호 찾기
                </p>
            </div>
        </div>
    )
}

export default join