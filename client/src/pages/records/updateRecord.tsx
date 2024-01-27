import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { IoNewspaperSharp } from "react-icons/io5";
import config from '../../common/config';
import { format } from 'date-fns';
import Danger from '../../components/alerts/error';
import Success from '../../components/alerts/success';
import { useNavigate } from 'react-router-dom';

interface RecordDetailsProps {
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


interface UpdateRecordProps {
  closeModal: () => void;
  record?: RecordDetailsProps;
}

const UpdateRecord: React.FC<UpdateRecordProps> = ({ record, closeModal }) => {
  const [editDate, seteditDate] = useState('');
  const [editTransac, seteditTransac] = useState<string>('');
  const [editPayments,  seteditPayments] = useState<number>(0);
  const [editExpenses,  seteditExpenses] = useState<number>(0);
  const [editRemarks, seteditRemarks] = useState<string>('');
  const [errMess, setErrMess] = useState<string>('');
  const [errStatus, setErrStatus] = useState<string>('');
  const Navigate = useNavigate();

  useEffect (() => {  
    if (record) {
      retrieveRecord(record);
      }
  }, [record]);

  //retrieve record details
  const retrieveRecord = async (record: any) => {
      if (record) {
        const formattedDate = format(new Date(record?.date), 'yyyy-MM-dd');

        seteditDate(formattedDate);
        seteditTransac(record?.transaction);
        seteditPayments(record?.payments);
        seteditExpenses(record?.expenses);
        seteditRemarks(record?.remarks);
  } else {
        console.error('No data found for the given record ID');
  }  
}

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (record) {
        const formattedDate = format(new Date(editDate), 'yyyy-MM-dd');

        const res = await axios.put(`${config.API}/records/updateRecord`, {
          record_id: record.record_id,
          date: formattedDate,
          transaction: editTransac,
          payments: editPayments,
          expenses: editExpenses,
          remarks: editRemarks
        });
          if (res.data.success) {
            setErrMess('Record updated!');
            setErrStatus('true');

            setTimeout(() => {
              closeModal();
              window.location.reload();
            }, 2500);
            
          } else {
            setErrMess('Unsuccessful update operation. Please try again.');
            setErrStatus('false');
          }
      }else {
        setErrMess('Record is empty! Please try again.');
      }
    } catch (err: any) {
        setErrMess(err.response?.data?.message || 'An error occurred');
    }
};


  const handleTransacChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seteditTransac(e.target.value);
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seteditDate(e.target.value);
  }

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seteditPayments(parseFloat(e.target.value));
  }

  const handleExpensesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seteditExpenses(parseFloat(e.target.value));
  }

  const handleRemarksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seteditRemarks(e.target.value);
  }

    return (
      <>
          <div className="h-full w-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm fixed top-0 left-0 z-[100]">
            <div className="w-[55vw] h-[60vh] absolute left-[25%] top-[20%] bg-white rounded-xl shadow-xl justify-center animate-small-fade-in-down z-[200]">
            
              {/* Header */}
              <div className="w-full flex px-6 py-4 font-jost text-[1.8em] border-b-4">
                <IoNewspaperSharp className="text-[#595959] mr-[2%] mt-[0.6%]" />
                <p className="text-[#595959] font-semibold"> Update Record </p>
                <button 
                  onClick={closeModal} 
                  className="ml-[72%] group">
                  <IoIosCloseCircle className="text-[1.4em] text-[#cbc553ca] group-hover:text-[#767a40] transition-colors delay-250 duration-[2000] ease-in" />
                </button>
              </div>

          {/* Form */}
            <form
              onSubmit={handleUpdate}>
              <div className='flex'>
                  <div className=''>
                      <div className="w-full flex mt-[2%] py-6 px-12 font-istok text-[1.7em]">
                          <p className="text-[#595959]">Date</p>
                          <input
                          type="date"
                          name="date"
                          id="date"
                          value={editDate}
                          onChange={handleDateChange}
                          className=" ml-[23%] text-[0.9em] w-[20vw] rounded-lg border-box border-2 border-solid border-[#595959be]"
                          />
                      </div>

                      <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                          <p className="text-[#595959]">Transaction</p>
                          <input
                          type="text"
                          name="transaction"
                          id="transaction"
                          value={editTransac}
                          onChange={handleTransacChange}
                          className=" ml-[5%] text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                          />
                      </div>

                      <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                          <p className="text-[#595959]">Remarks</p>
                          <input
                          type="text"
                          name="remarks"
                          id="remarks"
                          value={editRemarks}
                          onChange={handleRemarksChange}
                          className=" ml-[13%] h-[10vh] text-[0.9em] p-2 rounded-lg border-box border-2 border-solid border-[#595959be]"
                          />
                      </div>
                  </div>

                  <div className=''>
                      <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                          <p className="text-[#595959]">Payments</p>
                          <input
                          type="text"
                          name="payments"
                          id="payments"
                          value={editPayments}
                          onChange={handlePaymentChange}
                          className=" ml-[5%] text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                          />
                      </div>

                      <div className="w-full flex py-6 px-12 font-istok text-[1.7em]">
                          <p className="text-[#595959]">Expenses</p>
                          <input
                          type="text"
                          name="expenses"
                          id="expenses"
                          value={editExpenses}
                          onChange={handleExpensesChange}
                          className=" ml-[5%] text-[0.9em] rounded-lg border-box border-2 border-solid border-[#595959be]"
                          />
                      </div>

                  </div>
              </div>

              <div className='flex ml-[70%] mt-[4%]'>
                  <div className="">
                      <button
                      type="button"
                      onClick= {closeModal}
                      className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cb6f53b5] hover:text-white hover:bg-[#cb6f53d3]  transition-colors delay-250 duration-[3000] ease-in"
                      >
                      <p className="ml-[5%]"> Cancel </p>
                      </button>
                  </div>

                  <div className="ml-[5%]">
                      <button
                      type="submit"
                      className="w-[7vw] flex justify-center text-[1.3em] p-2 rounded-xl shadow-xl text-[#595959] bg-[#cbc553ca] hover:text-white hover:bg-[#cbc553ca]  transition-colors delay-250 duration-[3000] ease-in"
                      >
                      <p className="ml-[5%]"> Save </p>
                      </button>
                  </div>
                </div>
              </form>
            </div>
          
        {errStatus === 'true' ? <Success message={errMess} /> : null}
        {errMess !== '' && errStatus !== 'true' ? <Danger message={errMess} /> : null}
        </div>
      </>   
    );
  };

  export default UpdateRecord;
