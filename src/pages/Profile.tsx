import DisplayContent from '../components/DisplayContent';
import Header from '../components/Header';
import React from 'react';

function Profile() {
  return (
    <div className='w-full bg-zinc-100 py-28'>
      <Header></Header>
      <div className='px-72'>
        <DisplayContent></DisplayContent>
      </div>
    </div>
  )
}

export default Profile;
