import React, {useContext, useState} from 'react'
import { myContext } from '../../Context'
import { IUser } from '../../types/mainTypes'
 

const HomePage = () => {
    const context = useContext(myContext) as IUser;
    return (
        <div>
           {context ? <h1>Welcome back {context.username}</h1>: <h1>Welcome to my Website</h1>} 
        </div>
    )
}

export default HomePage
