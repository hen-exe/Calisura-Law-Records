import React from 'react'

import { MdOutlineMoreHoriz } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const client_status = 'Active';

const ClientCard = () => {
    return (
        <div className='h-[74vh] w-[95%] mt-[2%] ml-[2%] font-istok bg-white rounded-xl shadow-xl overflow-y-scroll animate-small-fade-in-down'>
        <table className="w-full table-auto">
            <thead className='text-[1.4em] text-[#595959]'>
                <tr className='h-[8vh] p-4'>
                    <th>Client Name</th>
                    <th>Contact Number</th>
                    <th>No. of Transactions</th>
                    <th>Status</th>
                    <th>Manage</th>
                </tr>

                <tr>
                    <th colSpan={6} className='border-b-[3px] border-[#59595954] xs:max-sm:border-b-[2px]'></th>
                </tr>
            </thead>

            {/* Cards */}
            <tbody className='font-istok '>
                <tr className='text-center text-[1.5em] font-semibold text-[#595959] bg-[#b3b07235]'>
                    <td className='py-[4%]'>Jane Doe</td>
                    <td>012302102</td>
                    <td>16</td>
                    <td className='flex justify-center'>
                        <p className={`font-bold rounded-2xl mt-[35%] py-[2%] w-[70%] text-[0.9em]
                                ${client_status=='Active'?'bg-[#cbc55387] text-[#8e8630]'
                                    :'bg-[#e39a8d] text-[#944738]'}`}>
                            Active
                        </p> 
                    </td>
                    <td>
                        <div className='flex justify-center'>
                            <Link to ="/recordsList">
                            <button 
                                className='flex items-center text-[1.5em] px-4 mb-[6%] bg-[#D9D9D9] rounded-3xl shadow-xl hover:bg-[#bababa] transition delay-250 duration-[3000] ease-in'>
                                <MdOutlineMoreHoriz className=''/>
                            </button>
                            </Link>
                        </div>

                        <div className='flex justify-center'>
                            <button className='flex items-center text-[1.2em] px-[8%] py-[2%] mb-[6%] bg-[#cba1539f] rounded-3xl shadow-xl hover:bg-[#cba153cb] transition delay-250 duration-[3000] ease-in'>
                                <HiPencil className=''/>
                            </button>
                        </div>

                        <div className='flex justify-center'>
                            <button className='flex items-center text-[1em] px-[9%] py-[2.5%] bg-[#cb6f53b5] rounded-3xl shadow-xl hover:bg-[#cb6f53d3] transition delay-250 duration-[3000] ease-in'>
                                <FaTrashCan className=''/>
                            </button>

                        </div>
                    </td>

                </tr>
            </tbody>

        </table>
    </div>
    )
}

export default ClientCard