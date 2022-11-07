import { AiFillEye } from 'react-icons/ai';
import { BsFillMapFill } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';

export default function MainCard() {

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
    <div>
      <div className="flex items-center justify-between p-4 mx-4 bg-orange-100 rounded-3xl mainCard">
        {arr.map((x) => (
          <div key={x}>
            <div className='p-4 relative rounded-full w-2/4 h-2/4 bg-[#fff]'>
              <div className='absolute text-sm text-gray-700 cardd'>
                {x.ico}
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-700">{x.text}</p>
            <p className="text-3xl font-bold">{x.count}</p>
            <p className="text-sm text-gray-700">{x.subText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
