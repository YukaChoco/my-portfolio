import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeaderButton from './HeaderButton'
import React from 'react'
import { Data } from '@/types/global'

type Props = {
  contentData: Data[]
}

function DisplayContent(prop: Props) {
  const contentData = prop.contentData;

  const contentCard = contentData.map((themeItem, i) => {
    return (
      <div key={i} className='pt-4 pb-16'>
        <h1 className="text-3xl pt-8 pb-4 font-semibold">{themeItem.theme}</h1>
        {themeItem.dataList.map((item, j) => {
          return (
            <div key={j} className='ml-16 py-4'>
              <h2 className="text-2xl">
                {
                  (() => {
                    if (item.link != undefined) {
                      return (
                        <Link href={item.link} className="hover:text-gray-500">{item.content}</Link>
                      )
                    }
                    else {
                      return (
                        <p>
                          {item.content}
                        </p>
                      )
                    }
                  })()
                }
              </h2>
              {
                (() => {
                  if (typeof item.detail === 'string') {
                    return (
                      <p className="text-2xl ml-8 pt-2">{item.detail}</p>
                    )
                  }
                  else if (Array.isArray(item.detail) && typeof item.detail[0] === 'string') {
                    return (
                      <>
                        {item.detail.map((dataItem, k) => {
                          console.log(dataItem);
                          return (
                            <p key={k} className="text-2xl ml-8 pt-2">{dataItem}</p>
                          )
                        })}
                      </>
                    )
                  }
                })()
              }
            </div>
          )
        })
        }
      </div>
    )
  })

  return (
    <div>
      {contentCard}
    </div>
  )
}

export default DisplayContent;