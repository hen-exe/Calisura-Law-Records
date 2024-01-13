import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'

const Success = ({message}:{message:string}) => {
  return (
    <div>
        <div className='animate-shake absolute w-[30%] z-[210] top-[20%] left-[35%]'>
            <div className="flex items-center w-full p-5 text-[1.1em] rounded-lg border border-green-400 bg-green-300 text-green-900">
                <AiFillCheckCircle className='mr-[3%] text-[1.4em]'/>
                {message}
            </div>
        </div>
    </div>
  )
}

export default Success