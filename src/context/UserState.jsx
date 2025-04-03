import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = ({children}) => {

    let UserData = JSON.parse(localStorage.getItem('Login'))
    const [searchValue, setsearchValue] = useState('');
    // console.log(searchValue)
    const [user, setuser] = useState({
        email:UserData ? UserData.email : '' ,
        login:UserData ? UserData.login : false
    })
  return (
    <UserContext.Provider value={{user, setuser,searchValue,setsearchValue}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserState
