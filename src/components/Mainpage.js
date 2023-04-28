import React from 'react';

// context 
import { useContext } from 'react';
import {Contextprovider} from '../context/Context'
// css
import Styles from "../Style/Mainpage.module.css"

// components 
import CaredsParent from './CaredsParent';
// img
import pictitle from "../picture/rsz_1collection_stylish_young_women_dressed_vector_image_on_vectorstock.jpg"
import bigback from "../picture/Untitled-3.gif"




const Mainpage = () => {

    const value = useContext(Contextprovider)
    const width = window.innerHeight

    // asign 
    const rr = "{"
    const rr2 = "}"

    return (
        <div className={`${Styles.Mainpage}  p-3`}>
            <div className={` ${Styles.scroll_pic} d-block`}>
                <div>
                     <h5>WELCOME TO SHOPLAND</h5>
                     
                </div>
                {/* <img src={bigback}></img> */}
            </div>
                <h1>{rr} PRODUCT {rr2} </h1>
                <CaredsParent />
        </div>
    );
};

export default Mainpage;