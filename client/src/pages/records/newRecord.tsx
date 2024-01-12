import React, { useState } from 'react';
import { IoMdPerson, IoIosCloseCircle } from 'react-icons/io';
import { IoNewspaperSharp } from "react-icons/io5";


interface NewRecordProps {
    closeModal: () => void;
  }

const NewRecord: React.FC<NewRecordProps> = ({ closeModal }) => {
  return (
    <>
        <div className="h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm fixed top-0 z-[100]">
          <div className="w-[55vw] h-[60vh] absolute left-[25%] top-[20%] bg-white rounded-xl shadow-xl justify-center animate-small-fade-in-down z-[200]">
           
            {/* Header */}
            <div className="w-full flex px-6 py-4 font-jost text-[1.8em] border-b-4">
              <IoNewspaperSharp className="text-[#595959] mr-[2%] mt-[0.6%]" />
              <p className="text-[#595959] font-semibold"> Add New Record </p>
              <button onClick={closeModal} className="ml-[70%] group">
                <IoIosCloseCircle className="text-[1.4em] text-[#cbc553ca] group-hover:text-[#767a40] transition-colors delay-250 duration-[2000] ease-in" />
              </button>
            </div>

        {/* Form */}
        <form>
            <div className='flex'>
                <div className=''>
                    <div className="w-full flex mt-[2%] py-6 px-12 font-istok text-[1.7em]">
                        <p className="text-[#595959]">Date</p>
                        <input
                        type="date"
                        name="date"
                        id="date"
                        value=""
                        className=" ml-[23%] text-[0.9em] w-[20vw] rounded-lg border-box border-2 border-solid border-[#595959be]"
                        />
                    </div>

                    <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                        <p className="text-[#595959]">Transaction</p>
                        <input
                        type="text"
                        name="transaction"
                        id="transaction"
                        value=""
                        className=" ml-[5%] text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                        />
                    </div>

                    <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                        <p className="text-[#595959]">Remarks</p>
                        <input
                        type="text"
                        name="remarks"
                        id="remarks"
                        value=""
                        className=" ml-[13%] h-[10vh] text-[0.9em] p-2 rounded-lg border-box border-2 border-solid border-[#595959be]"
                        />
                    </div>
                </div>

                <div className=''>
                    <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                        <p className="text-[#595959]">Payments</p>
                        <input
                        type="text"
                        name="transaction"
                        id="transaction"
                        value=""
                        className=" ml-[5%] text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                        />
                    </div>

                    <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                        <p className="text-[#595959]">Expenses</p>
                        <input
                        type="text"
                        name="transaction"
                        id="transaction"
                        value=""
                        className=" ml-[5%] text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                        />
                    </div>

                </div>
            </div>

              <div className="mt-[5%] ml-[83%]">
                <button
                  // onClick=
                  className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cbc553ca] hover:text-white hover:bg-[#cbc553ca]  transition-colors delay-250 duration-[3000] ease-in"
                >
                  <p className="ml-[5%]"> Save </p>
                </button>
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default NewRecord;
