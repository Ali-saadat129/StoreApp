import React from 'react';

// bootstrap   
import 'bootstrap/dist/css/bootstrap.css';
import {Heart} from 'react-bootstrap-icons';
import {FilePlus} from 'react-bootstrap-icons';
import {FileMinus} from 'react-bootstrap-icons';


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
            <div className={`${Styles.info_part}`}>
                <h3>{Shorter(Data.title)}</h3>
                <h4>{Data.price} $</h4>
                <div className={`${Styles.footer_Card}`}>
                    <Heart /> 
                    <FilePlus />
                    <FileMinus />
                    <button className={`${Styles.buy_Button}`}>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default Card;