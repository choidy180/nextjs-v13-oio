import React from 'react'
import MainBox from '@/components/board/MainBox'
import Container from '@/components/Container'

const BoardMain = () => {
    return (
        <Container>
            <h1 className='w-full mt-11 text-2xl font-bold px-2'>추천순</h1>

            <div className='w-full mt-8 flex flex-wrap'>
                <MainBox/>
                <MainBox/>
                <MainBox/>
                <MainBox/>
                <MainBox/>
                <MainBox/>
                <MainBox/>
                <MainBox/>
            </div>
        </Container>
    )
}

export default BoardMain