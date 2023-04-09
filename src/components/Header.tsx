import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import HeaderButton from './HeadeButton'

function Header() {
  return (
    <div className='grid grid-cols-4 text-center h-12 bg-zinc-300 text-gray-600 opacity-70'>
      <Link href="/" className='text-3xl font-bold'>
        My Portfolio
      </Link>
      <HeaderButton pageName='Profile'></HeaderButton>
      <HeaderButton pageName='Contents'></HeaderButton>
      <HeaderButton pageName='Experience'></HeaderButton>
    </div>
  )
}

export default Header;