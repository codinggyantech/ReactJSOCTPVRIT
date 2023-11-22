import React from 'react'
import ShowUserprofile from './ShowUserprofile'

const Profile = ({data,otherinfo,userdata}) => {
    // console.log(props)

    // const {data,otherinfo} = props;
    console.log(userdata)
  return (
    <>
    <div>Profile {data}</div>
   {
    userdata?.map(user => <ShowUserprofile key={user} user = {user}/>)
   }



  
    
    </>
    
  )
}

export default Profile