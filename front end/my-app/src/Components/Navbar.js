import React from 'react'

const Navbar  = () => {
  return (
    <div>
        <div className=' bg-gray-800 w-auto p-2'>
            <div className=' flex justify-between'>
                <div>
                    <a className='text-3xl text-white font-bold' href='/#'>StudentApp</a>
                </div>
                <div className='  flex justify-evenly w-72 p-2'>
                    <a href='/addStudent' className='text-white'>Home</a>
                    <a href='/addStudent' className='text-white' onClick={()=>{window.location.href="/addStudent"}}>add Student</a>
                </div>
            </div>
        </div>
    </div>
  );
  }
export default Navbar