import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
     <div className='flex justify-center text-center items-center bg-cyan-300'>Hey</div>
     <div className='bg-red-300'>
      <Outlet/>
     </div>
    </div>
  );
}

export default App;
