import Head from 'next/head'
import React from 'react'
import Header from './header'

const Container = ({children}:any) => {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <div className='w-screen min-h-screen box-border flex flex-col justify-start items-center pt-[70px] px-8'>
                <Header/>
                {children}
            </div>
        </>
    )
}
export default Container