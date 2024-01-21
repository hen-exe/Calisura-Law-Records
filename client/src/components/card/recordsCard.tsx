import React, { useState } from 'react'
import { HiPencil } from "react-icons/hi";
import { FaTrashCan } from "react-icons/fa6";
import UpdateRecord from '../../pages/records/updateRecord';
import DeleteRecord from '../../pages/records/deleteRecord';


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

const RecordsCard: React.FC<RecordCardProps> = ({ records }) => {
    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [recordId, setRecordId] = useState<number | null>(null);
    const userType = localStorage.getItem('userType');

    //Update
    const handleUpdateClick = (recordId: number) => {
      setUpdateModal(true);
      setDeleteModal(false);
      setRecordId(recordId);
    };
    
    //Delete
    const handleDeleteClick = (recordId: number) => {
      setDeleteModal(true);
      setUpdateModal(false);
      setRecordId(recordId);
    };

    //Close Modal
    const closeModal = () => {
        setDeleteModal(false);
        setUpdateModal(false);
        setRecordId(null);
    };

    return (
        <div className='h-[74vh] w-[95%] mt-[2%] ml-[2%] font-istok bg-white rounded-xl shadow-xl overflow-y-scroll snap-x animate-small-fade-in-down'>
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
                <tbody className="font-istok ">
                    {Array.isArray(records) && records.length > 0 ? (
                        records.map((record) => (
                            <tr
                            key={record.record_id}  
                            className='text-center text-[1.5em] font-semibold text-[#595959] snap-center'>
                                <td className='py-[3%]'>{new Date(record.date).toLocaleDateString('en-US', {
                                        month: 'numeric',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </td>
                                <td className='break-words text-wrap'
                                    >{record.transaction}</td>
                                <td>{record.payments}</td>
                                <td>{record.expenses}</td>
                                <td className={` ${ record.total_amount >= 0 ? 'text-[#a29d43]' : 'text-[#944738]'}`}>
                                    {record.total_amount}
                                </td> 
                                <td 
                                    className='break-words text-wrap'
                                    >{record.remarks} </td>
                                 <td>
                                    <div className='flex justify-center'>
                                        {userType !== '2' && (
                                        <button
                                            onClick={() => handleUpdateClick(record.record_id)}
                                            className='flex items-center text-[1.2em] px-[8%] py-[2%] mb-[6%] bg-[#cba1539f] rounded-3xl shadow-xl hover:bg-[#cba153cb] transition delay-250 duration-[3000] ease-in'>
                                            <HiPencil className='' />
                                        </button>
                                        )}
                                    </div>

                                    <div className='flex justify-center'>
                                        {userType !== '2' && (
                                        <button
                                            onClick={() => handleDeleteClick(record.record_id)}
                                            className='flex items-center text-[1em] px-[9%] py-[2.5%] bg-[#cb6f53b5] rounded-3xl shadow-xl hover:bg-[#cb6f53d3] transition delay-250 duration-[3000] ease-in'>
                                            <FaTrashCan className='' />
                                        </button>
                                        )}
                                    </div>
                                    </td>
                                </tr>
                                ))
                            ) : (
                                <tr className='text-center'>
                                <td colSpan={7} className='font-istok text-[1.5em] py-8'>
                                    No records available.
                                </td>
                                </tr>
                            )}
                </tbody>
            </table>

        {recordId !== null && updateModal && (
        <UpdateRecord
          closeModal={closeModal}
          record={records.find((c) => c.record_id === recordId)}
        />
      )}

      {recordId !== null && deleteModal && (
        <DeleteRecord
          closeModal={closeModal}
          record={records.find((c) => c.record_id === recordId)}
        />
      )}
        </div>
    );
}

export default RecordsCard;