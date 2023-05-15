import React from 'react';
// Hooks
import { useContext } from 'react';
// context
import {CartContext} from '../context/Cardcontextuse';
// css 
import Styles from '../Style/Shopcart.module.css'
const Shopcart = () => {

    const {state , dispatch} = useContext(CartContext)
    console.log(state)
    return (
        <div className={Styles.part}>
            <div className={Styles.part1}>
          
            </div>
            <div className={Styles.infocart}>
                <div className={Styles.infoParent}>
                <p>Like : </p><span> {state.Like}</span>
                <p>Count of shop : </p><span> {state.Like}</span>
                <p>Totall : </p><span> {state.Like}</span>
                </div>
            </div>
            <div className={Styles.payButton}>
                <button className={Styles.cartButton} onClick={() => dispatch("CLEAR")}>Clear</button>
                <button className={Styles.cartButton}>Pay</button>
            </div>

        </div>
    );
};

export default Shopcart;