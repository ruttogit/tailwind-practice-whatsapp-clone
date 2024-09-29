import camera from ".././images/camera.svg"
import search from ".././images/search.svg"
import more from ".././images/more.svg"

function Header() {
  return (
    <div className="flex justify-between items-center py-3 px-4 pt-`">
        <div className="left-logo">
            <h1 className="text-green-500 font-bold text-xl font-sans">WhatsApp</h1>
        </div>
        <div className="flex gap-4">
            <img src={camera} alt="" className="w-5"/>
            <img src={search} alt="" className="w-5"/>
            <img src={more} alt="" className="w-5"/>
        </div>
    </div>
  )
}

export default Header