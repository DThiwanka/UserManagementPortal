import React from 'react'
import Header from '../Header/Header'

function UserHome() {

  function cashier() {
    window.location.href = '/find';
  }

  return (
    <div>
      <Header />

      <div className='flex max-auto items-center'>
        <h1 className='content-center text-2xl m-5 font-bold '>Cashier Side</h1>

        <button class="bg-amber-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" onClick={cashier}>Cashier</button>
      </div>


    </div>

  )
}

export default UserHome
