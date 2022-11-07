
export default function Sidebar() {
  return (
    <div>
      <aside
        className="h-auto m-2 bg-white rounded-xl"
        aria-label="Sidebar"
      >
        <div className="text-center">
          <i className="text-3xl text-black fa-solid fa-bars-progress"></i>
        </div>
        <div className="px-3 py-4 rounded ">
          <ul className="space-y-8">
            <li className="my-8">
              <a
                href="/"
                className="flex items-center p-2 text-sm font-normal text-gray-900 hover:bg-gray-100 hover:border-l-4 hover:border-black"
              >
                <i className="text-black fa-solid fa-table-columns"></i>
                <span className="ml-3 font-light text-black capitalize">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-sm font-normal text-gray-900 hover:bg-gray-100 hover:border-l-4 hover:border-black"
              >
                <i className="text-black fa-solid fa-diagram-project"></i>
                <span className="flex-1 ml-3 font-light text-black capitalize whitespace-nowrap">
                  Projects
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-sm font-normal text-gray-900 hover:bg-gray-100 hover:border-l-4 hover:border-black"
              >
                <i className="text-black fa-solid fa-list-check "></i>
                <span className="flex-1 ml-3 font-light text-black capitalize whitespace-nowrap ">
                  Billing
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-sm font-normal text-gray-900 hover:bg-gray-100 hover:border-l-4 hover:border-black"
              >
                <i className="text-black fa-solid fa-calendar "></i>
                <span className="flex-1 ml-3 font-light text-black capitalize whitespace-nowrap">
                  Team Members
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-sm font-normal text-gray-900 hover:bg-gray-100 hover:border-l-4 hover:border-black"
              >
                <i className="text-black fa-solid fa-chart-simple "></i>

                <span className="flex-1 ml-3 font-light text-black capitalize whitespace-nowrap">
                  Stats
                </span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-sm font-normal text-gray-900 hover:bg-gray-100 hover:border-l-4 hover:border-black"
              >
                <i className="text-black fa-solid fa-gear "></i>
                <span className="flex-1 ml-3 font-light text-black capitalize whitespace-nowrap">
                  Settings
                </span>
              </a>
            </li>
            {/* Image */}
            <div className="relative flex flex-col items-center justify-center text-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="ui" width={50} className='p-1 border rounded-lg ' />
              <div className="absolute w-2 h-2 bg-green-400 rounded-full left-[64%]"></div>
              <p className="mt-2 font-bold">David Milan</p>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
}
