import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeaderButton from './HeadeButton'
import profileData from '../data/profile'
import React from 'react'

type Props = {
  pageName: string
}

function DisplayContent() {
  return (
    <div>
      {profileData.map((themeItem, i) => {
        return (
          <div key={i} className='py-16'>
            <h1 className="text-4xl py-8 font-semibold">{themeItem.theme}</h1>
            {themeItem.dataList.map((item, j) => {
              return (
                <div key={j} className='ml-16 py-4'>
                  <h2 className="text-3xl">{item.content}</h2>
                  {
                    (() => {
                      if (typeof item.detail === 'string') {
                        return (
                          <p className="text-3xl ml-8">{item.detail}</p>
                        )
                      }
                      else if (Array.isArray(item.detail) && typeof item.detail[0] === 'string') {
                        return (
                          <>
                            {item.detail.map((dataItem, k) => {
                              console.log(dataItem);
                              return(
                                <p className="text-3xl ml-8">{dataItem}</p>
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