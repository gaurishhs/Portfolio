import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }: AppProps) {
  const [page, setPage] = useState("")
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
    let pathname = window.location.pathname.split('/')[1]
    if (window.location.pathname && window.location.pathname !== '/') {
      setPage(pathname.charAt(0).toUpperCase() + pathname.slice(1))
    }
  })
  return (
    <>
    <Head>
      {page ? <title>{page} | Gaurish Sethia</title> : <title>Gaurish Sethia</title>}
      <meta name="description" content='Gaurish Sethia is a full stack developer specializing in building production-ready web apps.' />
    </Head>
    <Component {...pageProps} /></>
  )
}

export default MyApp
