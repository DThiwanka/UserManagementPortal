import React from 'react'
import Header from '../Header/Header'
import Fingercomp from './Fingerprint-cuate.svg'

function UserHome() {

  document.body.style.overflow = 'hidden';

  function cashier() {
    window.location.href = '/find';
  }

  return (
    <div>
      <Header />

      <div className='flex max-auto items-center'>
        <h1 className='content-center text-xl m-5 '>Cashier Side</h1>

        <button className="text-white bg-gray-800 font-medium rounded-sm text-sm px-5 py-2.5 dark:hover:bg-indigo-600 dark:focus:ring-green-800 ml-2" onClick={cashier}>Cashier</button>

      </div>


        <div>
          <img src={Fingercomp} style={{ maxWidth: '100%', maxHeight: '85%' }} />
        </div>
    </div>

  )
}

export default UserHome
