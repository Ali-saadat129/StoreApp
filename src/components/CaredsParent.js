import React from 'react';

// hooks
import { useContext } from 'react';
// css
import Styles from "../Style/CardsParent.module.css"
// context
import { Contextprovider } from '../context/Context';
// bootstrap   
import 'bootstrap/dist/css/bootstrap.css';
// components
import Card from './Card';


const CaredsParent = () => {

    const allData = useContext(Contextprovider)
    // console.log(allData)
    
    return (
        <div className={Styles.cardsParent}>
            <div className={`${Styles.sortParent}`}>

                <select>
                    <option>All product</option>
                    <option>most view</option>
                    <option>most buy</option>
                </select>
                
            </div>

            <div className={`${Styles.cardPart} d-flex row`}>
                
                {allData.map(data => <div key={data.title} className={`col-4`}> <Card key={data.title}  Data={data}></Card> </div>)}

            </div>

        </div>
    );
};

export default CaredsParent;