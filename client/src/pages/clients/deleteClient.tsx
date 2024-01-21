import axios from 'axios';
import React, { useState } from 'react';
import { IoMdPerson } from 'react-icons/io';
import config from '../../common/config';
import Danger from '../../components/alerts/error';
import Success from '../../components/alerts/success';

interface ClientDetailsProps {
  client_id: number;
  client_name: string;
  contact_number: string;
  no_of_transactions: number;
  account_status: string;
}

interface DeleteClientProps {
    closeModal: () => void;
    client?: ClientDetailsProps;
  }

const DeleteClient: React.FC<DeleteClientProps> = ({ client, closeModal }) => {
  const [errMess, setErrMess] = useState<string>('');
  const [errStatus, setErrStatus] = useState<string>('');

  const handleDelete = async () => {
    try {
      if (client) {
        const res = await axios.put(`${config.API}/user/deleteClient?client_id=${client.client_id}`);
        setErrMess('');
        setErrStatus('true');
        if (res.data.success) {
          closeModal();
        } else {
          setErrStatus(res.data.error);
        }
      } else {
        setErrMess('Unsuccessful delete operation');
        setErrStatus('false');
      }
    } catch (err: any) {
        setErrMess(err.response?.data?.message || 'An error occurred');
    }
  };
  
  return (
    <>
        <div className="h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm fixed top-0 left-0 z-[100]">
          <div className="w-[40vw] h-[55vh] absolute left-[30%] top-[20%] bg-white rounded-xl shadow-xl justify-center animate-small-fade-in-down z-[200]">
            {/* Header */}
            <div className="w-full flex px-6 py-4 mt-[1%] font-jost text-[1.8em] border-b-4">
              <IoMdPerson className="text-[#595959] mr-[2%] mt-[0.6%]" />
              <p className="text-[#595959] font-semibold"> Delete Client </p>
            </div>

            <div className='w-full text-[1.6em] text-center mt-[5%]'>
                <p>Are you sure you want to delete this client?</p>
            </div>

            {/* Buttons */}
              <div className='flex mt-[15%] font-semibold'>
                <div className="ml-[55%] mt-[15%]">
                    <button
                    onClick={closeModal}
                    className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#D9D9D9] hover:text-white hover:bg-[#bababa]  transition-colors delay-250 duration-[3000] ease-in"
                    >
                    <p className="ml-[5%]"> Cancel </p>
                    </button>
                </div>

                <div className="ml-[5%] mt-[15%]">
                    <button
                    onClick= {handleDelete}
                    className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cb6f53b5] hover:text-white hover:bg-[#cb6f53d3]  transition-colors delay-250 duration-[3000] ease-in"
                    >
                    <p className="ml-[5%]"> Delete </p>
                    </button>
                </div>
              </div>
          </div>

        {errMess !== '' && errStatus === 'true' ? <Success message={errMess} /> : null}
        {errMess !== '' && errStatus !== 'true' ? <Danger message={errMess} /> : null}
        </div>
    </>
  );
};

export default DeleteClient;
