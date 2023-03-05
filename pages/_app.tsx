import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        
    },[])
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}
