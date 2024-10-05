import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
      <div className='flex flex-col gap-4 p-4'>
        <p> It's Time To Get Swole</p>
        <h1 className='uppercase font-bold smn:text-5xl md:text-6xl lg: text-7xl'>Swole<span className='text-blue-400 '>normous</span></h1>
      </div>
      <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may become
        <span className='text-blue-400 font-medium'>very swole </span> and accept all the risk of become the local
        <span className='text-blue-400 font-medium'> mass monstrosity </span>,
        afflicated with severe body dismorphia
      </p>
      <Button text = {"Accept & Begin"}/>
    </div>
  )
}
