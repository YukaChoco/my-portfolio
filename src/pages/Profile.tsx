import DisplayContent from '../components/DisplayContent';
import Header from '../components/Header';
import React from 'react';
import profileData from '../data/profile'

function Profile() {
  return (
    <div className='w-full bg-zinc-100 min-h-full'>
      <Header></Header>
      <div className='pt-16 px-[10vw]'>
        <DisplayContent contentData={profileData}></DisplayContent>
      </div>
    </div>
  )
}

export default Profile;
