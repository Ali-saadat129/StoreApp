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
                state.Count++;
                const indexOfSelected  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
                state.Totall+=action.payload.price
                
            } 
            return{
                ...state,
                Selected : [...state.Selected]
            }
        case "REMOVE" :
            const newSelected = state.Selected.filter(ithem => ithem.id !== action.payload.id);
            state.Count--;
            const removeindex  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
            state.Totall-=action.payload.price

            return{
                ...state , 

                Selected : [...newSelected]
            }
        case "INCREASE": 
            const indexOfSelected  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
            state.Selected[indexOfSelected].quantity++;
            state.Totall+=action.payload.price
            return{
                ...state,
            }
        case "DECREASE" : 
            const indexselected  = state.Selected.findIndex(ithem => ithem.id === action.payload.id)
            state.Selected[indexselected].quantity--;
            state.Totall-=action.payload.price

            return{
                ...state,
        }
        case "CLEAR" :
            console.log("state")
            return{
                ...state,
                Selected : [],
                Totall:0,
                Count : 0 ,

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