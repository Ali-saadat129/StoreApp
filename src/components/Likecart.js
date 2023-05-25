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

const Likecart = ( ) => {

    const {state , dispatch} = useContext(CartContext)

    return (
        <div className={Styles.likecart}>
            <h3 className={Styles.Backicon}><Link to="/"><BackspaceFill></BackspaceFill></Link></h3>

            {state.Like.map(ithem => <Like data={ithem}></Like>)}

        </div>
    );
};

export default Likecart;