import React from 'react';
// context 
import {CartContext} from '../context/Cardcontextuse';
import { useContext } from 'react';
// function
import { Shorter,ProductCount , isSelected } from '../Functions/Title';
// icon
import {BackspaceFill} from 'react-bootstrap-icons';
// reatc router dom 
import { Link } from 'react-router-dom';
// css
import Styles from "../Style/Likecart.module.css"
// components 
import Like from './Like';
import Nothing from './Nothing';
// bootstrap   
import 'bootstrap/dist/css/bootstrap.css';


const Likecart = ( ) => {

    const {state , dispatch} = useContext(CartContext)

    const LikeCount = state.LikeCount
    return (
        <div className={Styles.likecart}>
            <h3 className={Styles.Backicon}><Link to="/"><BackspaceFill></BackspaceFill></Link></h3>
            {!LikeCount && <Nothing />}
            <div className={`${Styles.likeparent}`}>
                {state.Like.map(ithem => <div className={`col-10 col-sm-6 col-lg-4 ${Styles.likepart}`}><Like data={ithem}></Like></div>)}
            </div>
        </div>
    );
};

export default Likecart;