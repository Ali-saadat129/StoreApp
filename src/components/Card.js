import React from 'react';

// bootstrap   
import 'bootstrap/dist/css/bootstrap.css';
import {Cart, Heart ,FilePlus ,FileMinus ,Trash} from 'react-bootstrap-icons';

// context 
import { useContext } from 'react';
import {CartContext} from '../context/Cardcontextuse';
// css
import Styles from "../Style/Card.module.css"
// function
import { Shorter } from '../Functions/Title';

const Card = ({Data}) => {
    // context - function for button work 
    const {state , dispatch} = useContext(CartContext)
    // check is there this product in selected or not
    var IndexOfProduct = state.Selected.findIndex(ithem => ithem.id===Data.id)
    if(IndexOfProduct >1){
        var countOfProduct = state[IndexOfProduct]?.quantity
    }
    

    return (
        <div className={`${Styles.cardParent}`}>
            <div className={`${Styles.imageCard}`}>
            <img alt={Data.id} src={Data.image} className={Styles.imageCard}></img>

            </div>
            <div className={`${Styles.info_part}`}>
                <h3>{Shorter(Data.title)}</h3>
                <h4>{Data.price} $</h4>
                <div className={`${Styles.footer_Card}`}>
                    <Heart /> 
                     
                    {countOfProduct = 1 && <Trash onClick={() => dispatch({type:"REMOVE" , payload:Data})} /> }
                    {countOfProduct > 1 && <FileMinus onClick={() => dispatch({type:"DECREASE" , payload:Data})} /> }


                    {countOfProduct = "undefine" && <button onClick={() => dispatch({type:"ADD" , payload:Data})} className={`${Styles.buy_Button}`}>Buy</button> }
                    {countOfProduct > 0 && <FilePlus onClick={() => dispatch({type:"INCREASE" , payload:Data} )} />}

                </div>
            </div>
        </div>
    );
};

export default Card;