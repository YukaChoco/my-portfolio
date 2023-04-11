import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

type Props = {
  pageName: string
}

function HomeButton(prop: Props) {
  return (
    <div className='bg-white/90 text-gray-400 md:text-4xl text-3xl rounded-2xl w-fit h-fit border-2 hover:border-black hover:text-black m-auto'>
      <Link href={"/" + prop.pageName} className='block m-auto w-72 p-2'>
        {prop.pageName}
      </Link>
    </div>
  )
}

export default HomeButton;