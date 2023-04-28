import React from 'react';


// css
import Styles from "../Style/Card.module.css"


const Card = ({Data}) => {
    
    console.log(Data)

    return (
        <div className={`${Styles.cardParent}`}>
            <img alt={Data.id} src={Data.image} className={Styles.imageCard}></img>
            <div>
                <h3>{Data.title}</h3>
                <h3>{Data.price} $</h3>
            </div>
        </div>
    );
};

export default Card;