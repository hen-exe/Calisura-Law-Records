import React, { useEffect, useState } from 'react'

import { MdOutlineMoreHoriz } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import axios from 'axios';
import config from '../../common/config';


interface ClientDetailsProps {
    client_id: number;
    client_name: string;
    contact_number: string;
    no_of_transactions: number;
    account_status: string;
  }
  


interface ClientCardProps {
    clients: ClientDetailsProps[];
}
      
const ClientCard: React.FC<ClientCardProps> = ({ clients }) => {
    return (
        <div className='h-[74vh] w-[95%] mt-[2%] ml-[2%] font-istok bg-white rounded-xl shadow-xl overflow-y-scroll snap-x animate-small-fade-in-down'>
        <table className="w-full table-auto">
            <thead className='text-[1.5em] text-[#595959]'>
                <tr className='h-[8vh] p-4'>
                    <th className='w-[25%]'>Client Name</th>
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
    <tbody className="font-istok ">
          {clients.map((client) => (
            <tr
              key={client.client_id}
              className="text-center text-[1.4em] font-semibold text-[#595959] snap-center"
            >
              <td className="py-[4%]">{client.client_name}</td>
              <td>{client.contact_number}</td>
              <td>{client.no_of_transactions}</td>
              <td className="flex justify-center">
                <p
                  className={`font-bold rounded-2xl mt-[35%] py-[2%] w-[70%] text-[0.9em]
                                ${
                                  client.account_status === 'Active'
                                    ? 'bg-[#cbc55387] text-[#8e8630]'
                                    : 'bg-[#e39a8d] text-[#944738]'
                                }`}
                >
                  {client.account_status}
                </p>
              </td>
              <td>
                <div className="flex justify-center">
                  <Link to="/recordsList">
                    <button className="flex items-center text-[1.5em] px-4 mb-[6%] bg-[#D9D9D9] rounded-3xl shadow-xl hover:bg-[#bababa] transition delay-250 duration-[3000] ease-in">
                      <MdOutlineMoreHoriz className="" />
                    </button>
                  </Link>
                </div>

                <div className="flex justify-center">
                  <button className="flex items-center text-[1.2em] px-[8%] py-[2%] mb-[6%] bg-[#cba1539f] rounded-3xl shadow-xl hover:bg-[#cba153cb] transition delay-250 duration-[3000] ease-in">
                    <HiPencil className="" />
                  </button>
                </div>

                <div className="flex justify-center">
                  <button className="flex items-center text-[1em] px-[9%] py-[2.5%] bg-[#cb6f53b5] rounded-3xl shadow-xl hover:bg-[#cb6f53d3] transition delay-250 duration-[3000] ease-in">
                    <FaTrashCan className="" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientCard;