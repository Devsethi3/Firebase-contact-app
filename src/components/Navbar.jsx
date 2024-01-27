import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="banner h-[3.5rem] bg-[#822fbe] gap-[1rem] flex items-center justify-center rounded-md">
        <img src="/images/firebase-logo.png" width={30} alt="" />
        <h2 className='text-[1.3rem] font-semibold'>Firebase Contact App</h2>
    </div>
    </>
  )
}

export default Navbar