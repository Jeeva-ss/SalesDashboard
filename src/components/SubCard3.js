import { BsArrowDownLeft } from 'react-icons/bs';

export default function SubCard3() {
  return (
    <div className="m-4">
      <div className="w-[22rem] restt md:w-64 bg-[#E6F5FA] rounded-3xl p-4">
        <div className='flex justify-end'>
          <div>
            <BsArrowDownLeft className='text-[#74C1DB]' />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-black">Orders</p>
            <p className="mt-1 mb-3 text-sm font-light capitalize text-slate-700">Total orders today</p>
            <p className="text-2xl font-bold text-black">1000</p>
          </div>
          <div>
            <div className="outerRing">
              <p className="text-xl font-bold text-black innerText">80%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
