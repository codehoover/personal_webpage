import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Main from './main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Esau Rahim | Software Developer</title>
        <meta name="description" content="Passionate Developer based in Canada" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/RedER.png" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <main >
        <Main/>
      </main>
    </>
  )
}
