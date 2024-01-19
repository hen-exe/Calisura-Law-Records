import React, { FormEvent,useEffect,useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../common/config.ts'
import background from '../assets/background.jpg';
import img1 from '../assets/img_3.jpg';
import img2 from '../assets/img_2.jpg';
import Danger from '../components/alerts/error';

const LandingPage = () => {

  const [usertype, setUserType] = useState<string>('');
  const [pass , setPass] = useState<string>('');
  const [errMess, setErrMess] = useState('');
  const Navigate = useNavigate();

  //Choose user and show password field
  const [selectedDiv, setSelectedDiv] = useState<string | null>(null);  
  const [showPasswordDiv, setShowPasswordDiv] = useState(false);

  const handleDivClick = (divName: string) => {
    setSelectedDiv(divName);
    setShowPasswordDiv(true);

    if (divName === 'venus') {
      setUserType('2');
    }else {
      setUserType('1');
    }
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
  
    if (pass === "") {
      setErrMess("Password is required!");
    } else {
      try {
        const res = await axios.post(`${config.API}/login`, {
          user_type: usertype,
          password: pass
        });
  
  
        if (res.data.success === false) {
          setErrMess(res.data.error);  
          setTimeout(() => {
            setErrMess('');
          }, 3000);
        } 
        else {
          setErrMess('');
          Navigate('/homePage', { state: { userType: usertype } });
        }
      } catch (err: any) {
        setErrMess(err.response?.data?.message || 'An error occurred');
      }
    }
  };
  
  
  return (
    <div className="animate-fade-in h-screen flex justify-center items-center font-istok bg-slate-500">
      <div className='h-full w-full relative flex flex-col items-center z-10'>
        <img
          src={background}
          alt='Landing Background'
          className='max-h-full w-full object-cover bg-no-repeat absolute overflow-y-hidden z-20'
        />

    {errMess != '' && <Danger message={errMess} />}

      {/* Users */}
        <div className='flex bg-[#EFEFE9] w-[25vw] h-[30vh] p-4 mt-[15%] rounded-xl items-center shadow-xl z-[100]'>
          <div
            className='w-[50%] h-[100%] p-4 items-center' 
            onClick={() => handleDivClick('venus')}
          >
            <div className={`bg-[#D9D9D9] w-[70%] h-[65%] ml-[15%] rounded-full shadow-xl  
                ${selectedDiv === 'venus' ? 'border-[3px] border-solid border-[#595959be] transition-all delay-250 duration-[3000] ease-in' : ''}`}>
                <img 
                  src={img1}
                  className='object-cover w-full h-full rounded-full shadow-inner'
                />
            </div>
            <p className={`text-[1.4em] text-[#595959] ml-[33%] mt-[10%] 
                ${selectedDiv === 'venus' ? 'font-bold  transition-all delay-250 duration-[3000] ease-in' : ''}`}>
              Venus</p>
          </div>

          <div
            className='w-[50%] h-[100%] p-4 items-center'
            onClick={() => handleDivClick('atty-janice')}
          >
            <div className={`bg-[#D9D9D9] w-[70%] h-[65%] ml-[15%] rounded-full shadow-inner  
                ${selectedDiv === 'atty-janice' ? 'border-[3px] border-solid border-[#595959be] transition-all delay-250 duration-[3000] ease-in' : ''}`}>
                <img 
                  src={img2}
                  className='object-cover w-full h-full rounded-full shadow-inner'
                />
            </div>
            <p className={`text-[1.4em] text-[#595959] ml-[20%] mt-[10%] 
                ${selectedDiv === 'atty-janice' ? 'font-bold  transition-all delay-250 duration-[3000] ease-in' : ''}`}>
              Atty. Janice</p>
          </div>
        </div>

      <form className='flex'>
        {/* Password */}
        {showPasswordDiv && (
          <div className='w-[25vw] h-[15vh] p-4 rounded-xl items-center text-center z-[100] mt-8 animate-fade-in'>
            <p className='text-[1.3em] mb-[3%]'>Enter Password</p>
            <input
              type="password"
              name="pass"
              id="pass"
              value = {pass}
              onChange={(e) =>{setPass(e.target.value)}} required
              className='w-[20vw] h-[5vh] p-4 mb-[8%] rounded-lg border-box border-2 border-solid border-[#595959be] bg-transparent shadow-xl hover:border-[3px] transition delay-250 duration-[3000] ease-in focus:bg-[#ffffff8f]'
            />
            <button
              type="submit"
              onClick={submitHandler}
              className='w-[35%] h-[45%] text-[1.4em] text-white font-jost p-2 justify-center rounded-md shadow-xl bg-[#838144d7] hover:bg-[#5b5e31] transition-colors delay-250 duration-[3000] ease-in'
            >
              Login
            </button>
          </div>
        )}
    </form>
      </div>
    </div>
  );
};

export default LandingPage;
