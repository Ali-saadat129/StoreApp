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
    // sort button 
    const sortValue = document.getElementById('sort')
    // cards
    const cardssort = document.querySelectorAll(".cardpart")
    
    const sorthandler = (e) => {
        
        if(e.target.value==="all"){
            cardssort.forEach(card => card.style.display="block")
        }
        else if(e.target.value==="view"){
            cardssort.forEach(card => {
                if(card.id%2===0){
                    card.style.display="none"
                    console.log("none2")

                }
            }
        
                )

        }
        else{
            cardssort.forEach(card => {
                if(card.id %3 === 0){
                    card.style.display="none"
                    console.log("none")
                }
            })
        }
        
            
    }


    return (
        <div className={Styles.cardsParent}>
            <div className={`${Styles.sortParent}`} >
                <select className={`btn  btn-danger ${Styles.fdvfds}`} onClick={sorthandler} id='sort'  >
                    <option value='all' defaultValue>All product</option>
                    <option value='view'>most view</option>
                    <option value='buy'>most buy</option>
                </select>
                
            </div>

            <div className={`${Styles.cardPart} d-flex row`}>
                
                {allData.map(data => <div key={data.title} id={data.id} className={`col-10 col-sm-6 col-lg-4 cardpart ${Styles.card} `} > <Card key={data.title}   Data={data}></Card> </div>)}

            </div>

        </div>
    );
};

export default CaredsParent;