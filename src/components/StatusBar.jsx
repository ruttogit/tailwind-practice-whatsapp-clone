import whatsapp from '.././images/whatsapp.svg'
import telegram from ".././images/telegram.svg"
import { MdOutlineNetworkCell } from "react-icons/md";
import { MdBattery20 } from "react-icons/md";

function StatusBar() {
  return (
    <div className='flex justify-between items-center'>
        <div className='py-0 px-4 font-bold text-gray-600 flex items-center gap-1'>
            <p className='mr-4'>23:18</p>
            <img src={whatsapp} alt="" className='w-4' />
            <img src={telegram} alt="" className='w-4'/>
            <div className='w-1 rounded-full bg-black h-1'></div>
        </div>
        <div className='flex items-center'>
            <div className='w-4'>
                <MdOutlineNetworkCell />
            </div>
            <div className='w-4 mr-2'>
                <MdOutlineNetworkCell />
            </div>
            <div className='flex items-center gap-1'>
                22%
                <MdBattery20 />
            </div>
        </div>
    </div>
  )
}

export default StatusBar