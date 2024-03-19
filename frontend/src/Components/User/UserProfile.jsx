import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';

function UserProfile() {

  const { id } = useParams();

  return (
    <div>
      <Header />
      <h1 className='text-center'>User Profile {id}</h1>
    </div>
  )
}

export default UserProfile
