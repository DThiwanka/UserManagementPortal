import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../Header/Header';
import Fingercomp from './Fingerprint-cuate.svg'

function UserProfile() {

  const navigate = useNavigate();

  const [userData, setUserData] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8070/user/nic/${id}`);
      setUserData(response.data.user);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      console.log(error);
    }
  }

  function gotoUpdate() {
    navigate(`/profile/update/${userData._id}`);
  }

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-3">
        <div className="mt-2 ml-5">

          <form className="max-w-md mx-auto mt-2">

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-xl">Name</label>
              <input type="name" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="name" placeholder="&nbsp;&nbsp;Name" value={userData.name} disabled />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm text-xl">Email</label>
              <input type="email" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="email" placeholder="&nbsp;&nbsp;email" value={userData.email} disabled />
            </div>

            <div className="mb-4">
              <label htmlFor="connumber" className="block text-sm text-xl">Contact Number</label>
              <input type="connumber" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="connumber" placeholder="&nbsp;&nbsp;Contact Number" value={userData.connumber} disabled />
            </div>

            <div className="mb-4">
              <label htmlFor="nic" className="block text-sm text-xl">NIC</label>
              <input type="nic" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="nic" placeholder="&nbsp;&nbsp;NIC" value={userData.nic} disabled />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm text-xl">Address</label>
              <input type="address" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="address" placeholder="&nbsp;&nbsp;Address" value={userData.address} disabled />
            </div>


            <div className="mb-4 grid grid-cols-2 gap-4">

              <div>
                <label htmlFor="gender" className="block text-sm text-xl">Gender</label>
                <input type="text" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="gender" placeholder="&nbsp;&nbsp;Gender" value={userData.gender} disabled />
              </div>

              <div>
                <label htmlFor="points" className="block text-sm text-xl">Points</label>
                <input type="text" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="points" placeholder="&nbsp;&nbsp;Points" value={userData.points} disabled />
              </div>
            </div>


            <a href={`/profile/update/${userData._id}`}>
              <button type='submit' className="w-full h-10 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={gotoUpdate}>Next</button>
            </a>

          </form>
        </div>
        <div>
          <img src={Fingercomp} style={{ maxWidth: '100%', maxHeight: '85%' }} />
        </div>
      </div>
    </div>
  )
}

export default UserProfile
