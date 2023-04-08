import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='grid grid-cols-5 text-center h-12 bg-zinc-300'>
      headerです
      <Link href="/">
        Home
      </Link>
      <Link href="/Profile">
        Profile  
      </Link>
      <Link href="Contents">
        Contents
      </Link>
      <Link href="/Experience">
        Experience
      </Link>
    </div>
  )
}

export default Header;