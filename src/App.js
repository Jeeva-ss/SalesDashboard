import './App.css';
import MainCard from './components/MainCard';
import Sidebar from './components/Sidebar';
import SubCard from './components/SubCard';
import SubCard2 from './components/SubCard2';
import SubCard3 from './components/SubCard3';
import SubCard4 from './components/SubCard4';
import { Upcominghours } from './components/Upcominghours';

import { AiFillEye } from 'react-icons/ai';
import { BsFillMapFill } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';


function App() {


  const arr = [{
    text: "Views",
    count: 500,
    subText: "Per Day",
    ico: <AiFillEye />
  }, {
    text: "Visits",
    count: 2000,
    subText: "Per Minutes",
    ico: <BsFillMapFill />
  }, {
    text: "Orders",
    count: 5100,
    subText: "Per Day",
    ico: <BsFillCartFill />
  },]
  return (
    <div className='flex justify-center items-center min-h-screen bg-[#f6f6f6]'>
      <div className='bg-[#fff] w-full md:w-11/12 2xl:w-[70%] mx-auto flex '>
        <div className='bg-[#fff] nav p-2 hidden md:block'>
          <Sidebar />
        </div>

        <div className='flex flex-wrap md:flex-nowrap'>


          <div className='my-2 md:border-l-2'>
            <form className='px-4'>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search for stats" required="" />

              </div>
            </form>

            <div className='flex items-center justify-between px-4 my-4'>
              <div>
                <h1 className='text-2xl font-bold text-black'>Hello David</h1>
                <p className='text-sm text-gray-600'>Welcome back !</p>
              </div>
              <div className='flex items-center border-[#ccc] gap-2 p-2 border rounded-2xl'>
                <span>Filters</span>
                <i className="fa-solid fa-filter"></i>

              </div>
            </div>
            <MainCard />
            <div className='flex flex-wrap items-center justify-center md:justify-between'>
              <SubCard />
              <SubCard2 />
              <SubCard3 />
              <SubCard4 />
            </div>
          </div>
          <div className='m-4 side'>
            <div className='h-full p-4 text-white bg-black rounded-3xl'>
              <div>
                <p className='text-xl font-bold'>Sales Revenue</p>
                <br />
                <div>
                  {arr.map((x) => (
                    <div className='flex items-start gap-6 py-2 ' key={x}>
                      <div>
                        <div className='p-1 text-black bg-white rounded-full'>
                          {x.ico}
                        </div>
                      </div>
                      <div>
                        <p className='font-bold'>{x.text}</p>
                        <p className='text-slate-400'>{x.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <br />
              <Upcominghours />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
