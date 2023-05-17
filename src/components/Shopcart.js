import React from 'react';
// Hooks
import { useContext } from 'react';
// context
import {CartContext} from '../context/Cardcontextuse';
// css 
import Styles from '../Style/Shopcart.module.css'
// react router dom 
import { Link } from 'react-router-dom';
// Components 
import Likecart from './Likecart';
import Shopedpart from './Shopedpart';


const Shopcart = () => {

    const {state , dispatch} = useContext(CartContext)

    return (
        <div className={Styles.part}>
            <div className={Styles.infopart}>

                <div className={Styles.infocart}>
                    <div className={Styles.infoParent}>
                    <p>Like : <span> {state.LikeCount}</span> </p>
                    <p>Count of shop : <span> {state.Count}</span> </p>
                    <p>Totall : <span> {state.Totall}</span> </p>
                    </div>
                </div>
                <div className={Styles.payButton}>
                    <button className={Styles.cartButton} onClick={() => dispatch({type:"CLEAR" })}>Clear</button>
                    <button className={Styles.cartButton}>Pay</button>
                </div>
                    <h4><Link to="../">BACK</Link></h4>

                    {state.Like.map(ithem => <div key={ithem.title}> <Likecart  data={ithem}></Likecart> </div>)}
            </div>
            <div className={Styles.shoppart}>
                {state.Selected.map(ithem => <div className={Styles.shopcartmap}><Shopedpart data={ithem}></Shopedpart> </div>)}
            </div>
        </div>
    );
};

export default Shopcart;