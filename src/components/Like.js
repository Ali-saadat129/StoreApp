import React from 'react';

// reatc router dom 
import { Link } from 'react-router-dom';
// css
import Styles from "../Style/Like.module.css"
// function
import { Shorter,ProductCount , isSelected } from '../Functions/Title';
// bootstrap 
import 'bootstrap/dist/css/bootstrap.css';
import {Star ,CurrencyDollar} from 'react-bootstrap-icons';


const Like = ({data}) => {
    return (
        <div className={Styles.likecart}>

            <div className={Styles.image_part}>
                <img src={data.image}></img>
            </div>
            <div>
                <span>{Shorter(data.title)}</span>
                <p>{data.rating.rate}<Star /></p>
                <p>{data.price}<CurrencyDollar /></p>
            </div>
        </div>
    );
};

export default Like;