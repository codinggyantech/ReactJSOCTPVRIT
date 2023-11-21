import React from 'react'

const User = (props) => {
    console.log(props)
  return (
    <>
    
    <h1> User {props.name} {props.age}</h1>

    
    <hr />
    
    </>
  )
}

export default User