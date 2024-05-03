import React from 'react'

const UserComponent = (props) => {
//   console.dir(props)
// below two way i mentioned the props normal using and destring the object
  const {firstname, lastname, email} = props.user
  return (
       <>
       {/* <h1>{props.user.firstname}</h1>
       <h1>{props.user.lastname}</h1>
       <h1>{props.user.email}</h1> */}


       <h1>{firstname}</h1>
       <h1>{lastname}</h1>
       <h1>{email}</h1>
       
        
       </>
  )
}

export default UserComponent