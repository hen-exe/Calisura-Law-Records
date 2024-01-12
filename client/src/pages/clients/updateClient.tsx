import React, { useState } from 'react';
import { IoMdPerson, IoIosCloseCircle } from 'react-icons/io';


interface NewClientProps {
    closeModal: () => void;
  }

const UpdateClient: React.FC<NewClientProps> = ({ closeModal }) => {
  return (
    <>
        <div className="h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm fixed top-0 z-[100]">
          <div className="w-[45vw] h-[55vh] absolute left-[30%] top-[20%] bg-white rounded-xl shadow-xl justify-center animate-small-fade-in-down z-[200]">
           
            {/* Header */}
            <div className="w-full flex px-6 py-4 mt-[1%] font-jost text-[1.8em] border-b-4">
              <IoMdPerson className="text-[#595959] mr-[2%] mt-[0.6%]" />
              <p className="text-[#595959] font-semibold"> Update Client </p>
              <button onClick={closeModal} className="ml-[65%] group">
                <IoIosCloseCircle className="text-[1.4em] text-[#cbc553ca] group-hover:text-[#767a40] transition-colors delay-250 duration-[2000] ease-in" />
              </button>
            </div>

            {/* Form */}
            <form>
              <div className="w-full flex mt-[2%] py-6 px-12 font-istok text-[1.7em]">
                <p className="text-[#595959]">Full Name</p>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  value=""
                  className=" ml-[15%] rounded-lg border-box border-2 border-solid border-[#595959be]"
                />
              </div>

              <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                <p className="text-[#595959]">Contact Number</p>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  value=""
                  className=" ml-[5%] rounded-lg border-box border-2 border-solid border-[#595959be]"
                />
              </div>

              <div className='flex'>
                <div className="ml-[60%] mt-[15%]">
                    <button
                    // onClick=
                    className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cb6f53b5] hover:text-white hover:bg-[#cb6f53d3]  transition-colors delay-250 duration-[3000] ease-in"
                    >
                    <p className="ml-[5%]"> Cancel </p>
                    </button>
                </div>

                <div className="ml-[5%] mt-[15%]">
                    <button
                    // onClick=
                    className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cbc553ca] hover:text-white hover:bg-[#cbc553ca]  transition-colors delay-250 duration-[3000] ease-in"
                    >
                    <p className="ml-[5%]"> Save </p>
                    </button>
                </div>
              </div>

            </form>
          </div>
        </div>
    </>
  );
};

export default UpdateClient;
