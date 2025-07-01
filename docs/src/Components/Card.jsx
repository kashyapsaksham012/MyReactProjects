import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({data,refrence}) => {
  return (
    <motion.div drag dragConstraints= {refrence} whileDrag={{ scale: 1.2}} whileFocus={{ scale: 1.2 }} dragElastic={.1} className='relative flex-shrink-0 w-60 h-72 rounded-[35px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>

        <FaFileAlt />
         <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>

         {/* Footer */}
         <div className='footer absolute bottom-0 w-full left-0'>
        
        <div className='flex items-center justify-between px-8 py-3 mb-3'>
            <h5>{data.fileSize}</h5> 
            <span className='w-6 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoMdClose/>:(<FaDownload size=".8em" color='#fff'/>)  }
            
            </span>
        </div>

       {
        data.tagdetails.isOpen && (
            <div className={`tag w-full py-4 ${data.tagdetails.tagColor === "blue" ?"bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tagdetails.tagTitle}</h3>
            </div>
        )
       }

        

        </div>
    
    </motion.div> 
  );
}

export default Card
