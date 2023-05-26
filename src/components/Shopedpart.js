import React from 'react';

// context
import { useContext } from 'react';
import { CartContext } from '../context/Cardcontextuse';
// function
import { Shorter , ProductCount ,isSelected} from '../Functions/Title';
// css
import Styles from "../Style/Shopedpart.module.css"
// icons
import 'bootstrap/dist/css/bootstrap.css';
import {Cart, Heart ,FilePlus ,FileMinus ,Trash ,CurrencyDollar , Star} from 'react-bootstrap-icons';

const Shopedpart = ({data}) => {

    const {state , dispatch} = useContext(CartContext)


    return (
        <div className={Styles.shopedParent}>
            <div className={Styles.imagepart}>
                <img src={data.image}></img>
            </div>
            <div className={Styles.infopart}>
                <h3>{Shorter(data.title)}</h3>
                <p>{data.rating.rate}<Star /></p>
                <p>{data.price} <CurrencyDollar /></p>
                {ProductCount(state,data.id) === 1 && <Trash onClick={() => dispatch({type:"REMOVE" , payload:data})} /> }
                {ProductCount(state,data.id) > 1 && <FileMinus onClick={() => dispatch({type:"DECREASE" , payload:data})} /> }


                {!isSelected(state,data.id)  && <button onClick={() => dispatch({type:"ADD" , payload:data})} className={`${Styles.buy_Button}`}>Buy</button> }
                   
                {ProductCount(state,data.id) && <FilePlus onClick={() => dispatch({type:"INCREASE" , payload:data} )} />}
            </div>
            
        </div>
    );
};

export default Shopedpart;