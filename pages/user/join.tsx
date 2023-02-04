import React from 'react'
import LogoImage from '../../assets/image/oio.png'
import Image from 'next/image'


function join() {
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
                <p className='absolute bottom-[5vh] left-[60px] text-lg text-gray-600  lg:left-[calc(40vw+60px)] cursor-pointer'>
                    아이디/비밀번호 찾기
                </p>
            </div>
        </div>
    )
}

export default join