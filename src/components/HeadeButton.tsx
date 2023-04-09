import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

type Props = {
  pageName: string
}

function HeaderButton(prop: Props) {
  return (
    <Link href={"/" + prop.pageName} className='text-2xl h-full block my-auto hover:text-gray-400 hover:bg-zinc-200'>
      <div className='my-auto'>
        {prop.pageName}
      </div>
    </Link>
  )
}

export default HeaderButton;