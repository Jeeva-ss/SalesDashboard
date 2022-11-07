
export default function MenuBar() {
  return (
    <div>
      <div className="flex items-center justify-between gap-1">
        <div className="flex flex-col items-center gap-1">
          <i className="text-white fa-solid fa-table-columns"></i>
          <a className="text-xs" href="#">Home</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="text-white fa-solid fa-diagram-project"></i>
          <a className="text-xs" href="#">Projects</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="text-white fa-solid fa-list-check "></i>
          <a className="text-xs" href="#">Billing</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="text-white fa-solid fa-calendar "></i>
          <a className="text-xs" href="#">Members</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="text-white fa-solid fa-chart-simple "></i>
          <a className="text-xs" href="#">Stats</a>
        </div>
        <div className="flex flex-col items-center gap-1">
          <i className="text-white fa-solid fa-gear "></i>
          <a className="text-xs" href="#">Settings</a>
        </div>
      </div>
    </div>
  )
}
