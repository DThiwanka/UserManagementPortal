import React from 'react'
import Header from '../Header/Header'
import Fingercomp from './Fingerprint-cuate.svg'

function UserFind() {
  return (
    <div>
      <Header />
      <div class="grid grid-cols-2 gap-3 h-screen ">
        <div class="mt-4 ml-5">
          <label for="nic">Input NIC Number:</label>
          <div className='flex'>
            <input type='text' name='nic' className='border-2 w-full h-10'/>
            <button type='submit' className='text-white bg-gray-800 font-medium rounded-sm text-sm px-5 py-2.5 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-2'>Find!</button>
          </div>
        </div>
        <div class="h-screen">
        <img src={Fingercomp} className='h-screen' />
        </div>
      </div>

    </div>
  )
}

export default UserFind
