import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import { Navigate, useParams } from 'react-router-dom';
import Fingercomp from './security-animate.svg'
import axios from 'axios';

function UserUpdate() {

  const [userData, setUserData] = useState({
    name : '',
    email : '',
    connumber : '',
    nic: '',
    gender: '',
    address: '',
    points:'',
  });

  const { id } = useParams();

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const fetchData = async (id) => {
    try {
      const response = await axios.get(`https://usermanagementportal-2.onrender.com/user/id/${id}`);
      setUserData(response.data.user);
      console.log("Fetched User Data ! :" ,response.data.user);
      document.body.style.overflow = 'hidden';
    } catch (error) {
      console.log(error);
    }
  }


  const handleInputChange = (e) =>{
    const {name,value} = e.target;
    console.log("Input changed - Name:", name, "Value:", value);
    setUserData((prevData) =>({
      ...prevData,
      [name]:value,
    }))
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
       await axios.put(`https://usermanagementportal-2.onrender.com/user/update/${id}`,userData);
       alert("User Data Updated!");
       window.location.href=`/find`
       return;
    } catch (error) {
      console.log(error);
      alert("Failed To Update!")
    }
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-3">
        <div className="mt-2 ml-5">

          <form className="max-w-md mx-auto mt-2" onSubmit={handleSubmit}>

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm text-xl">Name</label>
              <input type="name" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="name" name="name" placeholder="&nbsp;&nbsp;Name" value={userData.name} onChange={handleInputChange} />
            </div>

            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm text-xl">Email</label>
              <input type="email" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="email" name="email" placeholder="&nbsp;&nbsp;email" value={userData.email} onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="connumber" className="block text-sm text-xl">Contact Number</label>
              <input type="connumber" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="connumber" name="connumber" placeholder="&nbsp;&nbsp;Contact Number" value={userData.connumber} onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="nic" className="block text-sm text-xl">NIC</label>
              <input type="nic" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="nic" name="nic" placeholder="&nbsp;&nbsp;NIC" value={userData.nic} onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm text-xl">Address</label>
              <input type="address" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="address" name="address" placeholder="&nbsp;&nbsp;Address" value={userData.address} onChange={handleInputChange}/>
            </div>


            <div className="mb-4 grid grid-cols-2 gap-4">

              <div>
                <label htmlFor="gender" className="block text-sm text-xl">Gender</label>
                <input type="text" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="gender" name="gender" placeholder="&nbsp;&nbsp;Gender" value={userData.gender} onChange={handleInputChange}/>
              </div>

              <div>
                <label htmlFor="points" className="block text-sm text-xl">Points</label>
                <input type="text" className="mt-2 block w-full h-10 rounded-md shadow-sm border-stone-800" id="points" placeholder="&nbsp;&nbsp;Points" value={userData.points} disabled/>
              </div>
            </div>


            <button type="submit" className="w-full h-10 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base text-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>

          </form>
        </div>
        <div>
          <img src={Fingercomp} style={{ maxWidth: '100%', maxHeight: '95%' }} />
        </div>
      </div>
    </div>
  )
}

export default UserUpdate
