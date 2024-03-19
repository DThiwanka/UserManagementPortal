import React from 'react'
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';

function UserUpdate() {

  const { id } = useParams();

  return (
    <div>
    <Header />
    <h1 className='text-center'>User Profile {id}</h1>
  </div>
  )
}

export default UserUpdate
