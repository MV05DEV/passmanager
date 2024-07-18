import React from 'react'

const Navbar = () => {
  return (
    <div className="top flex justify-between p-4 bg-slate-200 text-xl fixed w-[99vw] top-0">
        <div className="logo flex justify-center items-end font-semibold"><span className='text-purple-500 text-3xl' >P</span>ass<span className='text-purple-500'>S</span>afe <img className='w-5 h-5 mb-1' src="icons/safe.png" alt="" /></div>
        <div className="cont flex gap-3">
            <div><a href="/">Home</a></div>
            <div><a href="about">About</a></div>
            <div><a href="contact">Contact</a></div>
        </div>
    </div>
  )
}

export default Navbar