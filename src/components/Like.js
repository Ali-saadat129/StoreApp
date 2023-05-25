import React from 'react';

// reatc router dom 
import { Link } from 'react-router-dom';
// css
import Styles from "../Style/Like.module.css"
// function
import { Shorter,ProductCount , isSelected } from '../Functions/Title';

const Like = ({data}) => {
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

export default Like;