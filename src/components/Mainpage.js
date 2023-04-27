import React from 'react';

// context 
import { useContext } from 'react';
import {Contextprovider} from '../context/Context'
// css
import Styles from "../Style/Mainpage.module.css"

// img
import pictitle from "../picture/rsz_1collection_stylish_young_women_dressed_vector_image_on_vectorstock.jpg"

const Mainpage = () => {

    const value = useContext(Contextprovider)


    return (
        <div className={`container-fluid p-3`}>
            <div className={`row ${Styles.scroll_pic}`}>
                <img src={pictitle}></img>
                <h5>WELCOME TO SHOPLAND</h5>
            </div>
        </div>
    );
};

export default Mainpage;