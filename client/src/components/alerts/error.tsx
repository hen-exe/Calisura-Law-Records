import React from 'react'
import {CgDanger} from 'react-icons/cg'

const Danger = ({message}:{message:string}) => {
  return (
    <div>
        <div className='animate-shake flex absolute w-[30%] z-[110] top-[20%] left-[35%]'>
            <div className="flex items-center w-full p-3 text-[1.4em] rounded-lg border border-red-400 bg-red-300 text-red-900">
                <CgDanger className='mr-[3%] text-[1.2em]'/>
                {message}
            </div>
        </div>
    </div>
  )
}

export default Danger