import React from 'react'

function Button(props: any) {

    const {text} = props;

  return (
    <button className='px-8 py-4 rounded-md border-[2px] mx-auto bg-slate-950 border-blue-400 border-solid blueShadow'> 
        <p>{text}</p>
    </button>
  )
}

export default Button
