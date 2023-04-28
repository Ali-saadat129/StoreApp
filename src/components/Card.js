import React from 'react';


// css
import Styles from "../Style/Card.module.css"
// function
import { Shorter } from '../Functions/Title';

const Card = ({Data}) => {
    
    return (
        <div className={`${Styles.cardParent}`}>
            <div className={`${Styles.imageCard}`}>
            <img alt={Data.id} src={Data.image} className={Styles.imageCard}></img>

            </div>
            <div>
                <h3>{Shorter(Data.title)}</h3>
                <h3>{Data.price} $</h3>
                
            </div>
        </div>
    );
};

export default Card;