import React from 'react'
import Fingercomp from '../User/Fingerprint-cuate.svg'
import Header from '../Header/Header'

function UserAdd() {
  return (
   
      
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-3">
        <div className="mt-2 ml-5 mb-4 ">

          <form className="max-w-md mx-auto mt-2">

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-xl">Name</label>
              <input type="name" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="name" placeholder="&nbsp;&nbsp;Name" disabled />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm text-xl">Email</label>
              <input type="email" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="email" placeholder="&nbsp;&nbsp;email" disabled />
            </div>

            <div className="mb-4">
              <label htmlFor="connumber" className="block text-sm text-xl">Contact Number</label>
              <input type="connumber" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="connumber" placeholder="&nbsp;&nbsp;Contact Number" />
            </div>

            <div className="mb-4">
              <label htmlFor="nic" className="block text-sm text-xl">NIC</label>
              <input type="nic" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="nic" placeholder="&nbsp;&nbsp;NIC"/>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm text-xl">Address</label>
              <input type="address" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="address" placeholder="&nbsp;&nbsp;Address" />
            </div>

            <div>
                <label htmlFor="gender" className="block text-sm text-xl">Gender</label>
                <input type="text" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="gender" placeholder="&nbsp;&nbsp;Gender" />
              </div>


            <a href='#'>
              <button type='submit' className="w-full h-10 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
            </a>

          </form>
        </div>
        <div className='content-center ml-3'>
          <img src={Fingercomp} style={{ maxWidth: '80%', maxHeight: '80%' }} />
        </div>
      </div>
    </div>
  )
}

export default UserAdd
