import React from 'react' 
 
const User = ({uname,category}) => { 
  return ( 
    <div> 
      <h3>Welcome {uname} Logged in As {category}</h3> 
    </div> 
  ) 
} 
 
export default User