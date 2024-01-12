import React from 'react'

import { MdOutlineMoreHoriz } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { FaTrashCan } from "react-icons/fa6";


const client_status = 'Active';

const ClientCard = () => {
    return (
        <div className='h-[74vh] w-[95%] mt-[2%] ml-[2%] font-istok bg-white rounded-xl shadow-xl overflow-y-scroll animate-small-fade-in-down'>
        <table className="w-full table-fixed">
            <thead className='text-[1.4em] text-[#595959]'>
                <tr className='h-[8vh] p-4'>
                    <th>Date</th>
                    <th>Transaction</th>
                    <th>Payment</th>
                    <th>Expenses</th>
                    <th>Total</th>
                    <th>Remarks</th>
                    <th>Manage</th>
                </tr>

                <tr>
                    <th colSpan={7} className='border-b-[3px] border-[#59595954] xs:max-sm:border-b-[2px]'></th>
                </tr>
            </thead>

            {/* Cards */}
            <tbody className='font-istok '>
                <tr className='text-center text-[1.5em] font-semibold text-[#595959] bg-[#b3b07235]'>
                    <td className='py-[3%]'>12/13/12</td>
                    <td className=''>Payment to Payment t whene </td>
                    <td>1000</td>
                    <td>12000</td>
                    <td>+ 1000</td> 
                    <td> bababaa </td>
                    <td>
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