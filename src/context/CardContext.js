import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';


const initialState = {
    Selected : [],
    Totall:0,
    Count : 0 
}


const actionState = (state , action ) => {
    switch(action.type){
        case "Add" :
            if(!state.Selected.find(ithem => ithem.id===action.payload.id)){
                state.Selected.push({
                    ...action.payload,
                    quantity:1
                })
            console.log(`Add ======= ${state.Selected}`)

            }
            return{
                ...state,
                Selected : [...state.Selected]
            }
        case "REMOVE" :
            const newSelected = state.Selected.filter(ithem => ithem.id !== action.payliad.id)
            console.log(`REMOVE ======= ${state.Selected}`)

            return{
                ...state , 

                Selected : [...newSelected]
            }
        case "INCREASE": 
            const indexOfSelected  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
            state.Selected[indexOfSelected].quantity++;
            console.log(`INCREASE ======= ${state.Selected}`)
            return{
                ...state,
            }
        case "DECREASE" : 
            const indexselected  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
            state.Selected[indexselected].quantity--;
            console.log(`DECREASE ======= ${state.Selected}`)
            return{
                ...state,
        }
        case "CLEAR" :
            console.log(`CLEAR ======= ${state.Selected}`)

            return{
                Selected : [],
                Totall:0,
                Count : 0
            }
        default :
            return{
                ...state
            }
        
    }
}

export const CartContext = createContext()

const cardContext = ( { Children } ) => {


    const [ state , dispatch ] = useReducer( initialState , actionState )



    return (
        <CartContext.Provider value={{state,dispatch}} >
            {Children}
        </CartContext.Provider>
    );
};

export default cardContext;