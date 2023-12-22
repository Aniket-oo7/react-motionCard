import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
  const ref = useRef(null)
  const cardData = [
    {
     desc:'This is the demo card number one you had access to read only.',
     fileSize:'.4mb',
     close:false,
     tag:{isOpen:true,tagTitle:"Downlaod Now",tagColor:"blue"}
    },
    {
      desc:'This is the demo card number two you had access to read only.',
      fileSize:'.9mb',
      close:true,
      tag:{isOpen:true,tagTitle:"Downlaod Now",tagColor:"green"}
    },
    {
      desc:'This is the demo card number three you had access to read only.',
      fileSize:'.7mb',
      close:true,
      tag:{isOpen:true,tagTitle:"Downlaod Now",tagColor:"blue"}
    }
  ]
  return (
    <div ref={ref} className='flex gap-5 fixed p-3 top-0 left-0 w-full h-screen z-[3]'>
      {
        cardData.map((item,index)=>(
          <Card cardData={item} reference={ref}/>
        ))
      }
    </div>
  )
}

export default Foreground