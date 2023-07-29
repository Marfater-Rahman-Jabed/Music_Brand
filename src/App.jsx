// import React from 'react'


// import Audios from "./Components/Audios/Audios";
import HeroSection from "./Components/HeroSection/HeroSection";
import NavBar from "./Components/NavBar/NavBar"
import Vidoes from "./Components/Videos/Vidoes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css'

function App() {


  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* Same as */}
      {/* <ToastContainer /> */}
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <Vidoes></Vidoes>

      {/* <Audios></Audios> */}
    </div>
  )
}

export default App
