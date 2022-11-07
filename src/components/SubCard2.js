import { BsArrowDownRight } from 'react-icons/bs';
//  <BsArrowDownLeft /> 
export default function SubCard2() {
  return (
    <div className="m-4">
      <div className="w-[22rem] md:w-[29rem] restt lg:w-64 bg-[#eefcef] rounded-3xl p-4">
        <div className='flex justify-end'>
          <div>
            <BsArrowDownRight className='text-[#7bcd81]' />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-black">Profit</p>
            <p className="mt-1 mb-3 text-sm font-light capitalize text-slate-700">Per day ratio</p>
            <p className="text-2xl font-bold text-black">$150</p>
          </div>
          <div>
            <div className="outerRing">
              <p className="text-xl font-bold text-black innerText">55%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
