import React from 'react';
// hooks
import { useState , createContext , useEffect } from 'react';
//api
import getData from '../Api/Api';

// context
export const Contextprovider = createContext()


const Context = (props) => {
// data
    const [Data,setData] = useState([])

    useEffect( () => {
     const dataResiver =  async () => {
        setData(await getData() )
     }
     dataResiver()
    },[])


    return (
        <Contextprovider.Provider value={Data} >
            {props.children}
        </Contextprovider.Provider>

    );
};

export default Context;