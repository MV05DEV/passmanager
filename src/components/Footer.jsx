import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full bg-slate-200 h-16 text-lg flex flex-col items-center'>
        <div className="logo flex justify-center items-end font-semibold"><span className='text-purple-500 text-2xl' >P</span>ass<span className='text-purple-500'>S</span>afe <img className='w-5 h-5 mb-1' src="icons/safe.png" alt="" /></div>
        <div>Created By <span className='text-purple-500 text-2xl' >M</span>ukund <span className='text-purple-500 text-2xl' >V</span>arshney</div>
    </div>
  )
}

export default Footer