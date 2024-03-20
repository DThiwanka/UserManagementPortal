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
      console.log(userData);
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
      <div class="grid grid-cols-2 gap-3">
        <div class="mt-2 ml-5">

          <form class="max-w-md mx-auto mt-2">

            <div class="mb-4">
              <label for="name" class="block text-sm text-xl">Name</label>
              <input type="name" class="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="name" placeholder="&nbsp;&nbsp;Name" value={userData.name} disabled />
            </div>

            <div class="mb-4">
              <label for="Email" class="block text-sm text-xl">Email</label>
              <input type="email" class="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="email" placeholder="&nbsp;&nbsp;email" value={userData.email} disabled />
            </div>

            <div class="mb-4">
              <label for="connumber" class="block text-sm text-xl">Contact Number</label>
              <input type="connumber" class="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="connumber" placeholder="&nbsp;&nbsp;Contact Number" value={userData.connumber} disabled />
            </div>

            <div class="mb-4">
              <label for="nic" class="block text-sm text-xl">NIC</label>
              <input type="nic" class="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="nic" placeholder="&nbsp;&nbsp;NIC" value={userData.nic} disabled />
            </div>

            <div class="mb-4">
              <label for="address" class="block text-sm text-xl">Address</label>
              <input type="address" class="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="address" placeholder="&nbsp;&nbsp;Address" value={userData.address} disabled />
            </div>


            <div class="mb-4 grid grid-cols-2 gap-4">

              <div>
                <label for="gender" class="block text-sm text-xl">Gender</label>
                <input type="text" class="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="gender" placeholder="&nbsp;&nbsp;Gender" value={userData.gender} disabled />
              </div>

              <div>
                <label for="points" class="block text-sm text-xl">Points</label>
                <input type="text" class="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="points" placeholder="&nbsp;&nbsp;Points" value={userData.points} disabled />
              </div>
            </div>


            <a href={`/profile/update/${userData._id}`}>
              <button type='submit' class="w-full h-10 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={gotoUpdate}>Next</button>
            </a>

          </form>
        </div>
        <div class="scale-95">
          <img src={Fingercomp} style={{ maxWidth: '100%', maxHeight: '90%' }} />
        </div>
      </div>
    </div>
  )
}

export default UserProfile
