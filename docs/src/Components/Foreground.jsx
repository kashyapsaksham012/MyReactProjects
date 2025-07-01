import {React,useState,useRef} from 'react'
import Card from './Card'



const Foreground = () => {

    // kya kya chahiye mujhe banae k liye ? 
    // ,desc, filesize, closeorDownload, tagdetails 

    const ref = useRef(null);

    const data = [
        {
        desc: "Lorem ipsum dolor, adipisicing elit.", 
        fileSize : ".9mb", 
        close: true, 
        tagdetails: {
            isOpen: true, tagTitle: "Download Now", tagColor:"green"
         },
    },
      {
        desc: "Lorem ipsum dolor, adipisicing elit.", 
        fileSize : ".9mb", 
        close: true, 
        tagdetails: {
            isOpen: true, tagTitle: "Upload Now", tagColor:"blue"
         },
    },
      {
        desc: "Lorem ipsum dolor, adipisicing elit.", 
        fileSize : ".9mb", 
        close: true, 
        tagdetails: {
            isOpen: false, tagTitle: "Download Now", tagColor:"blue"
         },
    },
    ];

  return (
    <div ref = {ref} className='fixed top z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       
       {
        data.map((item, index)=>(
            <Card key = {index} data={item}  refrence = {ref}/>
        ))
       }

     </div>

  )
}

export default Foreground
