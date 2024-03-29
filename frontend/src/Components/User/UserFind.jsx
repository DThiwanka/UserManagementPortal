import React, { useState } from 'react'
import Header from '../Header/Header'

import Fingercomp from './Fingerprint-cuate.svg'
import { useNavigate } from 'react-router-dom';

function UserFind() {

  document.body.style.overflow = 'hidden';

  const [nic, setNic] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function handlefind(e) {
    try {
      const response = await fetch(`https://usermanagementportal-2.onrender.com/user/nic/${nic}`);
      if (!response.ok) {
        throw new Error('Failed to fetch Data!');
      }
      const data = await response.json();

      if (!data.found) {
        window.confirm("Do You need to proceed?")
        navigate(`/profile/${nic}`);
        return;
      }


    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching data');
    }
  }



  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-3 h-screen ">
        <div className="mt-4 ml-5">
          <label htmlFor="nic">Input NIC Number:</label>
          <div className='flex mt-3'>
            <input type='text' name='nic' className='border-2 w-full h-10' value={nic} onChange={(e) => setNic(e.target.value)} />
            <button type='submit' className='text-white bg-gray-800 font-medium rounded-sm text-sm px-5 py-2.5 dark:hover:bg-indigo-600 dark:focus:ring-green-800 ml-2' onClick={handlefind}>Find!</button>
          </div>
          {error && <div className="text-red-500">{error}</div>}
        </div>
        <div>
          <img src={Fingercomp} style={{ maxWidth: '100%', maxHeight: '85%' }} />
        </div>
      </div>

    </div>
  )
}

export default UserFind
