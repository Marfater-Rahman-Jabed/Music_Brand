// import React from 'react'


// import Audios from "./Components/Audios/Audios";

import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './Routes/Routes';
// import './App.css'

function App() {


  return (
    <div className='overflow-x-clip'>
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
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App
