import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';


const initialState = {
    Selected : [],
    Totall:0,
    Count : 0 ,
    Like : [],
    LikeCount : 0
}


const actionState = (state , action ) => {
    switch(action.type){
        case "ADD" :
            if(!state.Selected.find(ithem => ithem.id===action.payload.id)){
                state.Selected.push({
                    ...action.payload,
                    quantity:1
                })
                state.Count++
                
            } 
            return{
                ...state,
                Selected : [...state.Selected]
            }
        case "REMOVE" :
            const newSelected = state.Selected.filter(ithem => ithem.id !== action.payload.id)
            state.Count--

            return{
                ...state , 

                Selected : [...newSelected]
            }
        case "INCREASE": 
            const indexOfSelected  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
            state.Selected[indexOfSelected].quantity++;
            return{
                ...state,
            }
        case "DECREASE" : 
            const indexselected  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
            state.Selected[indexselected].quantity--;
            return{
                ...state,
        }
        case "CLEAR" :

            return{
                Selected : [],
                Totall:0,
                Count : 0
            }
        case "LIKE" :
            if(!state.Like.find(ithem => ithem.id=== action.payload.id)){
                state.Like.push({...action.payload});
                state.LikeCount++;
            }
            return{
                ...state,
            }
        default :
            return state
        
    }
}

export const CartContext = createContext()


const Cardcontextuse = ( {children} ) => {


    const [ state , dispatch ] = useReducer( actionState , initialState  )



    return (
        <CartContext.Provider value={{ state , dispatch}} >
            {children}
        </CartContext.Provider>
    );
};

export default Cardcontextuse;