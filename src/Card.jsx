import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose  } from "react-icons/io5"
import { motion } from "framer-motion"


function Card({cardData,reference}) {
  return (
<motion.div 
drag 
dragConstraints={reference} 
whileDrag={{ scale:1.1}} 
className='relative w-44 h-52 bg-zinc-900/100 rounded-[30px] text-zinc-300 p-5 overflow-hidden'
>
    <FaRegFileAlt size={23} />
    <p className="mt-5 text-xs leading-none tracking-tight text-zinc-300 font-semibold">
     {cardData.desc}
    </p>
    <div className='absolute left-0 bottom-0 w-full bg-zinc-900  text-zinc-700'>
       <div className='flex justify-between itmes-center w-full px-5 py-2 mb-3'>
          <p className='text-sm font-semibold text-zinc-500'>
             {cardData.fileSize}
          </p>
     
       <span className='rounded-full bg-zinc-400 text-zinc-900 w-5 h-5 p-1 font-semibold'>
         {
          cardData.close ? <IoClose  size='0.8em'/> : <LuDownload  size='.8em'/>
         }
      </span>
      </div>

     {
      cardData.tag.isOpen && (
      <div className={`${cardData.tag.tagColor === "blue" ?" bg-blue-600 ": "bg-green-600"} w-full py-1.5 text-xs text-zinc-200 font-semibold flex justify-center items-center`}>
       {cardData.tag.tagTitle}
     </div> 
     )}
    </div>
</motion.div>
  )
}

export default Card