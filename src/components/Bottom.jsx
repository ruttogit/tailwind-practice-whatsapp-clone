import { BsChatSquareText } from "react-icons/bs";
import { TbCirclePlus } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { MdCall } from "react-icons/md";

function Bottom() {
  return (
    <div className="flex justify-between px-10 py-5 gap-4">
        <div className="text-3xl flex flex-col items-center">
            <BsChatSquareText />
            <p className="text-lg">Chats</p>
        </div>
        <div className="text-3xl flex flex-col items-center">
            <TbCirclePlus />
            <p className="text-lg">Updates</p>
        </div>
        <div className="text-3xl flex flex-col items-center">
            <FaUsers />
            <p className="text-lg">Communities</p>
        </div>
        <div className="text-3xl flex flex-col items-center">
            <MdCall />
            <p className="text-lg">Calls</p>
        </div>
    </div>
  )
}

export default Bottom