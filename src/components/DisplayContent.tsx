import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeaderButton from './HeadeButton'
import React from 'react'
import { Data } from '@/types/global'

type Props = {
  contentData: Data[]
}

function DisplayContent(prop:Props) {
  const contentData = prop.contentData;
  return (
    <div>
      {contentData.map((themeItem, i) => {
        return (
          <div key={i} className='py-16'>
            <h1 className="text-3xl py-8 font-semibold">{themeItem.theme}</h1>
            {themeItem.dataList.map((item, j) => {
              return (
                <div key={j} className='ml-16 py-4'>
                  <h2 className="text-2xl">
                    {
                      (() => {
                        if (item.link != undefined) {
                          return (
                            <a href={item.link} className="hover:text-gray-500">{item.content}</a>
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
                                <p className="text-2xl ml-8 pt-2">{dataItem}</p>
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
      })}
    </div>
    //   <div>
    //     {profileData.map((themeItem, i) => (

    //       <h1>{themeItem.theme}</h1>
    //     {
    //         themeItem.dataList.map((item, j) => (
    //           <div key={j} className="my-4">
    //             <h2 className="text-[4vh] font-semibold">{item.content}</h2>
    //             <p className="text-[3vh] ml-4">{item.detailt}</p>
    //           </div>
    //         ))
    //       }
    //     ))}
    //   </div>
  )
}

export default DisplayContent;