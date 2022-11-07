import { BsArrowDownRight } from 'react-icons/bs';


export default function SubCard4() {
  return (
    <div className="m-4">
      <div className="w-[22rem] md:w-[29rem] restt lg:w-64 bg-[#F4F5F9] rounded-3xl p-4">
        <div className='flex justify-end'>
          <div>
            <BsArrowDownRight className='text-[#000]' />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold text-black">Visits</p>
            <p className="mt-1 mb-3 text-sm font-light capitalize text-slate-700">Total visits today</p>
            <p className="text-2xl font-bold text-black">400</p>
          </div>
          <div>
            <div className="outerRing">
              <p className="text-xl font-bold text-black innerText">70%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
