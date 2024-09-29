import user from ".././images/me.jpg"
import user1 from ".././images/profile-2.jpg"
// import { BsChatSquareTextFill } from "react-icons/bs";

function Chats() {
  return (
    
    <>
        <div className='py-4 px-4 flex items-center justify-between gap-5 relative'>
            <div className="flex items-center gap-5">
                <div>
                    <img src={user} alt=""  className="w-10 rounded-full"/>
                </div>
                <div className="flex flex-col gap-1 text-gray-500">
                    <div className="">
                        <h2 className="text-lg font-bold text-gray-600">+254745667442</h2>
                    </div>
                    <p>I like working at night</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xs text-green-500">22:23</div>
                <div className="bg-green-500 rounded-full text-white p-1 text-xs flex items-center justify-center">2</div>
            </div>
        </div>
        <div className='py-4 px-4 flex items-center justify-between gap-5 relative'>
            <div className="flex items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-black">
                    {/* <img src={user} alt=""  className="w-10 rounded-full"/> */}
                </div>
                <div className="flex flex-col gap-1 text-gray-500">
                    <div className="">
                        <h2 className="text-lg font-bold text-gray-600">S..❤❤❤</h2>
                    </div>
                    <p>Can i come there?</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xs text-green-500">22:23</div>
                <div className="bg-green-500 rounded-full text-white p-1 text-xs flex items-center justify-center">1</div>
            </div>
        </div>
        <div className='py-4 px-4 flex items-center justify-between gap-5 relative'>
            <div className="flex items-center gap-5">
                <div className="w-10 h-10 bg-gray-600 rounded-full">
                    {/* <img src={user} alt=""  className="w-10 rounded-full"/> */}
                </div>
                <div className="flex flex-col gap-1 text-gray-500">
                    <div className="">
                        <h2 className="text-lg font-bold text-gray-600">South A</h2>
                    </div>
                    <p>Hello?</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xs">22:23</div>
                {/* <div className="bg-green-500 rounded-full text-white p-1 text-xs">123</div> */}
            </div>
        </div>
        <div className='py-4 px-4 flex items-center justify-between gap-5 relative'>
            <div className="flex items-center gap-5">
                <div>
                    <img src={user1} alt=""  className="w-10 rounded-full bg-cover"/>
                </div>
                <div className="flex flex-col gap-1 text-gray-500">
                    <div className="">
                        <h2 className="text-lg font-bold text-gray-600">Alex</h2>
                    </div>
                    <p>Where are you i'm waiti...</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xs">22:23</div>
                {/* <div className=" rounded-full text-white p-1 text-xs">123</div> */}
            </div>
        </div>

        {/* <div>
            <BsChatSquareTextFill />
        </div> */}

        
    </>
    
  )
}

export default Chats