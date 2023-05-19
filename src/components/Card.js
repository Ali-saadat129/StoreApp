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
import { Shorter , ProductCount ,isSelected} from '../Functions/Title';
import { Link } from 'react-router-dom';


const Card = ({Data}) => {

    // context - function for button work 
    const {state , dispatch} = useContext(CartContext)


    return (
        <div className={`${Styles.cardParent}`}>
            <div className={`${Styles.imageCard}`}>
            <img alt={Data.id} src={Data.image} className={Styles.imageCard}></img>

            </div>
            <div className={`${Styles.info_part}`}>
                <h3>{Shorter(Data.title)}</h3>
                <h4>{Data.price} $</h4>
                <div className={`${Styles.footer_Card}`}>
                    <Heart onClick={() => dispatch({type:"LIKE" , payload:Data})} /> 
                     
                    {ProductCount(state,Data.id) === 1 && <Trash onClick={() => dispatch({type:"REMOVE" , payload:Data})} /> }
                    {ProductCount(state,Data.id) > 1 && <FileMinus onClick={() => dispatch({type:"DECREASE" , payload:Data})} /> }


                    {!isSelected(state,Data.id)  && <button onClick={() => dispatch({type:"ADD" , payload:Data})} className={`${Styles.buy_Button}`}>Buy</button> }
                   
                    {ProductCount(state,Data.id) && <FilePlus onClick={() => dispatch({type:"INCREASE" , payload:Data} )} />}
                    <Link to={`/${Data.id}`}> Detail </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;