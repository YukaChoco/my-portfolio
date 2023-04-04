import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

type Props = {
  pageName: string
}

const HomeButton = (prop: Props) => {
  return (
    <Link href={"/" + prop.pageName} className=''>
      <div className='bg-white/90 text-gray-400 text-4xl w-60 rounded-2xl'>
        {prop.pageName}
      </div>
    </Link>
  )
}

export default HomeButton;