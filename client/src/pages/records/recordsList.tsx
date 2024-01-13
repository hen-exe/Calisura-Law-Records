import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../common/config.ts';
import { LuLogOut } from 'react-icons/lu';
import { IoSearchSharp } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoArrowBackOutline } from 'react-icons/io5';
import RecordsCard from '../../components/card/recordsCard.tsx';
import DeleteRecord from './deleteRecord.tsx';

interface RecordsListProps {
  record_id: number;
  date: string;
  transaction: string;
  payments: number;
  expenses: number;
  total_amount: number;
  remarks: string;
  record_status: string;
  client_id: number;
}

interface RecordCardProps {
  records: RecordsListProps[];
}

const RecordsListComponent: React.FC<RecordCardProps> = ({ records }) => {
  return (
    <div>
      <RecordsCard records={records} />
    </div>
  );
};

const RecordsList: React.FC = () => {

    const location = useLocation();
    const { client_id, client_name } = location.state || { client_id: null, client_name: '' };
    const [records, setRecords] = useState<RecordsListProps[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [errMess, setErrMess] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log('ahdahshha ->', client_name)
    
    useEffect(() => {
      if (client_id !== null) {
        axios
          .get(`${config.API}/records/retrieveAll`, { params: { client_id } })
          .then((res) => {
            if(res.data.success == true) {
                setRecords(res.data.record);
              }else {
              }          
          })
          .catch((err) => {
            setRecords(err.response?.data?.message || 'An error occurred');
          });
      }
    }, [client_id]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                        className="w-[25vw] h-[5vh] text-[1.3em] p-[0.2rem] pl-[1rem] rounded-full border-box border-[3px] border-solid border-[#595959be] bg-white  group-hover:border-[#3a3a3a84] transition delay-250 duration-[3000] ease-in active:border-[#ffffffd1]"
                    />
                    <IoSearchSharp className="text-[1.9em] text-[#595959] opacity-70 absolute left-[24%] mt-[0.3%] group-hover:opacity-50 transition delay-250 duration-[3000] ease-in" />
                </div>

                <div className='text-[2em] text-[#595959] font-semibold ml-[20%] bg-[#ffffffc4] rounded-xl px-6'>
                    <p>{client_name}</p>
                </div>

                <div className="flex-grow"></div>
                <div className="mr-[3%]">
                    <button
                        onClick={openModal}
                        className='w-[10vw] flex items-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cbc553ca] hover:text-white hover:bg-[#cbc553ca]  transition-colors delay-250 duration-[3000] ease-in '
                    >
                        <IoMdAddCircleOutline className='text-[1.3em] ml-[8%]' /> 
                        <p className='ml-[5%] font-semibold'> New Record </p>
                    </button>
                </div>
            </div>

        {/* Records List */}
        <RecordsCard records = {records}/>

        {/* New Record Modal */}
        {isModalOpen && <DeleteRecord closeModal={closeModal} />}
        </div>
    )

}

export default RecordsList;