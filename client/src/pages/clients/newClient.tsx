import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import { IoMdPerson, IoIosCloseCircle } from 'react-icons/io';
import config from '../../common/config';

interface NewClientProps {
    closeModal: () => void;
  }

const NewClient: React.FC<NewClientProps> = ({ closeModal}) => {
  const [clientName, setClientName] = useState<string>('');
  const [contactNum, setcontactNum] = useState<string>('');
  
  const [errMess, setErrMess] = useState<string>('');

  const submitHandler = async (event: FormEvent) => {
    try {
      if (clientName === '' && contactNum === '') {
        setErrMess('All fields are required!');
      }else {
        axios.put(`${config.API}/user/createClient`, {
          client_name: clientName,
          contact_number: contactNum,
        }).then((res)=> {
          if(res.data.success == true) {
            setErrMess(res.data.message);
          }else {
            setErrMess(res.data.error);
          }
        })
      }
    } catch (err: any) {
      setErrMess(err.response?.data?.message || 'An error occurred');
  }
}
  


  return (
    <>
        <div className="h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm fixed top-0 z-[100]">
          <div className="w-[40vw] h-[55vh] absolute left-[30%] top-[20%] bg-white rounded-xl shadow-xl justify-center animate-small-fade-in-down z-[200]">
           
            {/* Header */}
            <div className="w-full flex px-6 py-4 font-jost text-[1.8em] border-b-4">
              <IoMdPerson className="text-[#595959] mr-[2%] mt-[0.6%]" />
              <p className="text-[#595959] font-semibold"> Add New Client </p>
              <button onClick={closeModal} className="ml-[60%] group">
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
                  value={clientName}
                  onChange={(e) =>{setClientName(e.target.value)}} required
                  className=" ml-[15%] p-1 text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                />
              </div>

              <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                <p className="text-[#595959]">Contact Number</p>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  value={contactNum}
                  onChange={(e) =>{setcontactNum(e.target.value)}} required
                  className=" ml-[4.5%] p-1 text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                />
              </div>

              {/* Button */}
              <div className="ml-[75%] mt-[15%]">
                <button
                  onClick={submitHandler}
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

export default NewClient;
