import React, {createContext, useEffect, useState} from 'react'
import axios, { AxiosResponse } from 'axios';

export const myContext = createContext({});

const Context = (props: any) => {
    const [userObject, setUserObject] = useState<any>()

    useEffect(() => {
        axios.get("https://oauth-template.herokuapp.com/getUser", { withCredentials: true}).then((res: AxiosResponse) => {
            if(res.data){
                console.log(res.data)
                setUserObject(res.data)
            }
        })
    }, [])

    return (
        <myContext.Provider value={userObject}>
            {props.children}
        </myContext.Provider>
    )
}

export default Context
