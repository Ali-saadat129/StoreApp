import React from 'react';

// context 
import { useContext } from 'react';
import {Contextprovider} from '../context/Context';
import {CartContext} from '../context/Cardcontextuse';

// css
import Styles from "../Style/Mainpage.module.css"

// components 
import CaredsParent from './CaredsParent';
import Footer from './Footer';

// img
import pictitle from "../picture/rsz_1collection_stylish_young_women_dressed_vector_image_on_vectorstock.jpg"
import bigback from "../picture/Untitled-3.gif"

import { Link } from 'react-router-dom';


const Mainpage = () => {
// context data 
    const value = useContext(Contextprovider);
    const {state , dispatch} = useContext(CartContext);
    const width = window.innerHeight;

    // asign 
    const rr = "{"
    const rr2 = "}"

    return (
        <div className={`${Styles.Mainpage}  p-3`}>
            <div className={` ${Styles.scroll_pic} d-block`}>
                <div>
                     <h5>{rr}WELCOME TO SHOPLAND{rr2}</h5>
                     
                </div>
                <img src={bigback}></img>
            </div>
                <h1 className={`mt-4`}>{rr} PRODUCT {rr2} </h1>
                <CaredsParent />
                <Footer></Footer>
        </div>
    );
};

export default Mainpage;