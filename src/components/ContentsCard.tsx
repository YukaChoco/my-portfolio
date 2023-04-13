import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeaderButton from './HeaderButton'
import React, { useState } from 'react'
import { Content } from '@/types/global'
import img from '../../public/tidyIconImg.jpeg'

function ContentsCard(prop: Content) {
  console.log(typeof prop.link=="string");
  return (
    // <Link href={"/Contents/"+prop.theme}>
    <Link href={typeof prop.link=="string"?prop.link:"/Contents"}>
      <div className="my-12 bg-white rounded-xl shadow-md overflow-hidden max-w-full md:flex-row hover:bg-gray-100">
        <div className="md:grid md:grid-cols-[2fr_3fr]">
          <div className="m-auto md:shrink-0">
            <Image className="md:pt-0 pt-4 md:pl-4 pl-0 h-48 w-fit object-contain m-auto" src={prop.img} alt="" width={200} height={200}></Image>
          </div>
          <div className="md:p-8 md:pl- py-4 px-8">
            <div className={"uppercase tracking-wide text-sm " + (prop.type=="team"?"text-indigo-500":"text-yellow-400") + " font-semibold"}>{prop.type}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{prop.theme}</p>
          <p className="mt-2 text-slate-500">{prop.detail}</p>
        </div>
      </div>
    </div>
    </Link >
  )
}


export default ContentsCard;