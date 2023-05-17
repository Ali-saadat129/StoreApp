import React from 'react';
// context 
import {CartContext} from '../context/Cardcontextuse';
import { useContext } from 'react';
// function
import { Shorter,ProductCount , isSelected } from '../Functions/Title';

import Styles from "../Style/Likecart.module.css"

const Likecart = ({data} ) => {

    return (
        <div className={Styles.likecart}>
            <div className={Styles.image_part}>
                <img src={data.image}></img>
            </div>

            <span>{Shorter(data.title)}</span>
            <p>{data.price}</p>

        </div>
    );
};

export default Likecart;