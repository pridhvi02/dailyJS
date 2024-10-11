import { useState } from 'react'

function BgChanger() {
  const [color, setColor] = useState('olive')
  const handleClick=(color)=>{
    setColor(color)
  }

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-0 py-2 rounded-3xl'>
          <button className=' px-5 py-4 rounded-full shadow-lg text-black bg-red-500'
          onClick={()=>handleClick("red")}>
            red
          </button>
          <button className=' px-2 py-4 rounded-full shadow-lg text-black bg-green-500'
          onClick={()=>handleClick("green")}>
            green
          </button>
          <button className=' px-2 py-4 rounded-full shadow-lg text-black bg-yellow-500'
          onClick={()=>handleClick('yellow')}>
            yellow
          </button>
        </div>

      </div>

    </div>
  )
}

export default BgChanger;
