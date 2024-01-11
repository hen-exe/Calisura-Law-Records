import React, { FormEvent,useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../common/config.ts'

import { LuLogOut } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";
import RecordsCard from '../../components/card/recordsCard.tsx';



const RecordsList = () => {
    return (
        <div className ="h-full font-jost bg-[#D8DEDE] animate-fade-in">

            {/* Header */}
            <div className="w-full h-[10vh] flex bg-white rounded-xl shadow-xl items-center ">
                <div className="w-[10vw] p-4 text-[1.5em] text-[#595959] font-semibold hover:text-[#767a40]  transition-colors delay-250 duration-[3000] ease-in ">
                    <Link to="/homePage">
                        <button className="flex w-[100%] p-4">
                            <IoArrowBackOutline className="mt-[4%] text-[1.2em]" />
                            <p className='ml-[10%]'>Go Back</p> 
                        </button>
                    </Link>
                 </div>

                <div className="text-[2.8em] text-[#595959] font-bold ml-[35%]"> 
                    Records List
                 </div>

                 <div className="w-[10vw] p-4 ml-[33%] text-[1.5em] text-[#595959] font-semibold hover:text-[#767a40]  transition-colors delay-250 duration-[3000] ease-in ">
                    <Link to="/">
                        <button className="flex w-[100%] p-4">
                            <LuLogOut className="mt-[4%] text-[1.2em]" />
                            <p className='ml-[10%]'>Log Out</p> 
                        </button>
                    </Link>
                 </div>
            </div>

            {/* Search & Add Record */}
            <div className="w-full flex mt-[3%] animate-small-fade-in-down">
                <div className="flex group ml-[1.5%]">
                    <input
                        type='text'
                        placeholder="Search for a transaction..."
                        value=""
                        // onChange=""
                        className="w-[25vw] h-[5vh] text-[1.3em] p-[0.2rem] pl-[1rem] rounded-full border-box border-[3px] border-solid border-[#595959be] bg-white  group-hover:border-[#3a3a3a84] transition delay-250 duration-[3000] ease-in active:border-[#ffffffd1]"
                    />
                    <IoSearchSharp className="text-[1.9em] text-[#595959] opacity-70 absolute left-[24%] mt-[0.3%] group-hover:opacity-50 transition delay-250 duration-[3000] ease-in" />
                </div>

                <div className='text-[2em] text-[#595959] font-semibold ml-[20%] bg-[#ffffffc4] rounded-xl px-6'>
                    <p>Jane Doe</p>
                </div>

                <div className="flex-grow"></div>
                <div className="mr-[3%]">
                    <button
                        // onClick=
                        className='w-[10vw] flex items-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cbc553ca] hover:text-white hover:bg-[#cbc553ca]  transition-colors delay-250 duration-[3000] ease-in '
                    >
                        <IoMdAddCircleOutline className='text-[1.3em] ml-[8%]' /> 
                        <p className='ml-[5%] font-semibold'> New Record </p>
                    </button>
                </div>
            </div>

        {/* Records List */}
        <RecordsCard/>
            {/* <div className='h-[74vh] w-[95%] mt-[2%] ml-[2%] font-istok bg-white rounded-xl shadow-xl overflow-y-scroll'>
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

                    <tbody>
                        <tr className='text-center text-[1.4em]'>

                        </tr>
                    </tbody>

                </table>
            </div> */}
        </div>
    )

}

export default RecordsList;