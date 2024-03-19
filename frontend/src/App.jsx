import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserHome from "./Components/User/UserHome";
import UserProfile from "./Components/User/UserProfile";
import UserFind from "./Components/User/UserFind";
import UserUpdate from "./Components/User/UserUpdate";

function App() {


  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserHome/>}/>
        <Route path="/find" element={<UserFind/>}/>
        <Route path="/profile/:id" element={<UserProfile/>}/>
        <Route path="/profile/update/:id" element={<UserUpdate/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
