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
    <Link href={"/" + prop.pageName} className='px-1 min-[500px]:px-2 md:px-4 md:text-2xl text-xl h-full block my-auto text-gray-700 hover:text-gray-900'>
      <div className='pt-4'>
        {prop.pageName}
      </div>
    </Link>
  )
}

export default HeaderButton;