import React, { useEffect, useState } from 'react';
import { IoMdPerson, IoIosCloseCircle } from 'react-icons/io';
import config from '../../common/config';
import axios from 'axios';

interface ClientDetailsProps {
  client_id: number;
  client_name: string;
  contact_number: string;
  no_of_transactions: number;
  account_status: string;
}

interface NewClientProps {
    closeModal: () => void;
    client?: ClientDetailsProps;
  }

const UpdateClient: React.FC<NewClientProps> = ({ client, closeModal }) => {
  const [editName, seteditName] = useState<string>('');
  const [editNum, seteditNum] = useState<string>('');
  const [errMess, setErrMess] = useState<string>('');
  const [errStatus, setErrStatus] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
    
  
  useEffect(() => {
    if (client) {
      retrieveClient(client?.client_id);
    }
  }, [client]);
  
    //Retrieve client details
    const retrieveClient = async (clientId: any) => {
      try {
        const res = await axios.get(`${config.API}/user/retrieveClientDetails`, {
          params: {
            client_id: clientId
          }
        });
        const data = res.data.client;  

        // Check if data exists and has a length greater than 0
        if (data && data.length > 0) {
          const firstClient = data[0];
          seteditName(firstClient.client_name);
          seteditNum(firstClient.contact_number);
        } else {
          console.error('No data found for the given client ID');
        }
        
      } catch (err) {
        console.error('Error retrieving client:', err);
      } finally {
        setLoading(false);
      }
    };
  
  const handleUpdate = async () => {
      try {
        if (client) {
          const res = await axios.put(`${config.API}/user/updateClient`, {
            client_id: client.client_id,
            client_name: editName,
            contact_number: editNum,
          });
          if (res.data.success) {
            closeModal();
          } else {
            setErrStatus(res.data.error);
          }
        } else {
          setErrMess('Unsuccessful update operation');
          setErrStatus('false');
        }
      } catch (err: any) {
        setErrMess(err.response?.data?.message || 'An error occurred');
      }
    };

const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  seteditName(e.target.value);
};
  

const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  seteditNum(e.target.value);
};

  return (
    <>
        <div className="h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm fixed top-0 left-0 z-[100]">
          <div className="w-[40vw] h-[55vh] absolute left-[30%] top-[20%] bg-white rounded-xl shadow-xl justify-center animate-small-fade-in-down z-[200]">
           
            {/* Header */}
            <div className="w-full flex px-6 py-4 mt-[1%] font-jost text-[1.8em] border-b-4">
              <IoMdPerson className="text-[#595959] mr-[2%] mt-[0.6%]" />
              <p className="text-[#595959] font-semibold"> Update Client </p>
              <button onClick={closeModal} className="ml-[65%] group">
                <IoIosCloseCircle className="text-[1.4em] text-[#cbc553ca] group-hover:text-[#767a40] transition-colors delay-250 duration-[2000] ease-in" />
              </button>
            </div>

            {/* Form */}
            {loading ? (
            <p>Loading...</p>
          ) : (
            <form>
              <div className="w-full flex mt-[2%] py-6 px-12 font-istok text-[1.7em]">
                <p className="text-[#595959]">Full Name</p>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  value={editName}
                  onChange={handleNameChange}
                  className=" ml-[15%] p-1 text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                />
              </div>

              <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                <p className="text-[#595959]">Contact Number</p>
                <input
                  type="text"
                  name="contactNumber"
                  id="contactNumber"
                  value={editNum}
                  onChange={handleNumChange}
                  className=" ml-[3%] p-1 text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                />
              </div>

              {/* Buttons */}
              <div className='flex font-semibold'>
                <div className="ml-[55%] mt-[15%]">
                    <button
                    onClick= {closeModal}
                    className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cb6f53b5] hover:text-white hover:bg-[#cb6f53d3]  transition-colors delay-250 duration-[3000] ease-in"
                    >
                    <p className="ml-[5%]"> Cancel </p>
                    </button>
                </div>

                <div className="ml-[5%] mt-[15%]">
                    <button
                    onClick= {handleUpdate}
                    className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cbc553ca] hover:text-white hover:bg-[#cbc553ca]  transition-colors delay-250 duration-[3000] ease-in"
                    >
                    <p className="ml-[5%]"> Save </p>
                    </button>
                </div>
              </div>
            </form>
            )}
          </div>
        </div>
    </>
  );
};

export default UpdateClient;
