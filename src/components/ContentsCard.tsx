import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeaderButton from './HeadeButton'
import React from 'react'
import { Content } from '@/types/global'
import img from '../images/portfolio.png'

function ContentsCard(prop: Content) {
  return (
    // <Link href={"/Contents/"+prop.theme}>
    <Link href="/Contents">
      <div className="max-w-md my-12 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image className="h-48 w-full object-cover md:h-full md:w-72" src={img} alt="Modern building architecture"></Image>
          </div>
          <div className="p-8">
            <div className={"uppercase tracking-wide text-sm " + (prop.type=="team"?"text-indigo-500":"text-yellow-300") + " font-semibold"}>{prop.type}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{prop.theme}</p>
          <p className="mt-2 text-slate-500">{prop.detail}</p>
        </div>
      </div>
    </div>
    </Link >
  )
}

export default ContentsCard;