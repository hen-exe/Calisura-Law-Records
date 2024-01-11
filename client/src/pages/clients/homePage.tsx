import React, { FormEvent,useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../common/config.ts'

import { RiLogoutCircleRFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";



const HomePage = () => {
    return (
        <div className ="h-full font-jost bg-[#D8DEDE] animate-slide-down">

            {/* Header */}
            <div className="w-full h-[10vh] flex bg-white rounded-xl shadow-xl items-center ">
                <div className="text-[2.8em] text-[#595959] font-bold ml-[45%]"> 
                    Client List
                 </div>

                 <div className="w-[10vw] p-4 ml-[35%] text-[1.5em] text-[#595959] font-semibold hover:text-[#767a40]  transition-colors delay-250 duration-[3000] ease-in ">
                    <Link to="/">
                        <button className="flex w-[100%] p-4">
                            <RiLogoutCircleRFill className="mt-[4%] text-[1.2em]" />
                            <p className='ml-[10%]'>Log Out</p> 
                        </button>
                    </Link>
                 </div>
            </div>

            {/* Search & Add Client */}
            <div className="w-full flex mt-[3%]">
                <div className="flex group ml-[1.5%]">
                    <input
                        type='text'
                        placeholder="Search for a client..."
                        value=""
                        // onChange=""
                        className="w-[25vw] h-[5vh] text-[1.3em] p-[0.2rem] pl-[1rem] rounded-full border-box border-[3px] border-solid border-[#595959be] bg-white  group-hover:border-[#3a3a3a84] transition delay-250 duration-[3000] ease-in active:border-[#ffffffd1]"
                    />
                    <IoSearchSharp className="text-[1.9em] text-[#595959] opacity-70 absolute left-[24%] mt-[0.3%] group-hover:opacity-50 transition delay-250 duration-[3000] ease-in" />
                </div>

                <div className="ml-[60%]">
                    <button
                        // onClick=
                        className='w-[10vw] flex items-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cbc553ca] hover:text-white hover:bg-[#cbc553ca]  transition-colors delay-250 duration-[3000] ease-in '
                    >
                        <IoMdAddCircleOutline className='text-[1.3em] ml-[8%]' /> 
                        <p className='ml-[5%]'> New Client </p>
                    </button>
                </div>
            </div>

        {/* Client List */}
            <div className='h-full w-[95%] mt-[2%] ml-[2%] bg-white rounded-xl shadow-xl'>
aaaa
            </div>
        </div>
    )

}

export default HomePage;