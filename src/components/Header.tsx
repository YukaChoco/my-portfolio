import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import HeaderButton from './HeaderButton'

function Header() {
  return (
    <div className='fixed  z-10'>
      <div className='relative grid grid-rows-2 text-center h-16 w-screen bg-zinc-300 text-gray-600 opacity-90'>
        <Link href="/" className='absolute min-[500px]:text-3xl text-2xl font-bold h-fit left-2 md:left-16 min-[500px]:left-8 py-3'>
          My Portfolio
        </Link>
        <div className='absolute right-2 min-[500px]:right-8 flex h-full'>
          <HeaderButton pageName='Profile'></HeaderButton>
          <HeaderButton pageName='Contents'></HeaderButton>
          <HeaderButton pageName='Experience'></HeaderButton>
        </div>
      </div>
    </div>
  )
}

export default Header;