import React, { useEffect, useState } from 'react'

const ChildCompoent = () => {
    let[value,setValue] = useState(0)
    
    useEffect(()=>{
        console.log('Child Compoenent Loaded')

        return(()=>{
            console.log('componenet removed')
        })
        
    },[value])




  return (
    <>
    
    <button onClick={()=>setValue(value+1)}>INC</button>
    <div>ChildCompoent  {value}</div>
    </>
  )
}

export default ChildCompoent