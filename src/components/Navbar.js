import React from 'react';

// bootstrap   
import 'bootstrap/dist/css/bootstrap.css';
import { Cart4 , Heart , List , ChevronUp} from 'react-bootstrap-icons';
// css
import Styles from '../Style/Navbar.module.css';
// context 
import { useContext } from 'react';
import {CartContext} from '../context/Cardcontextuse'


const Navbar = () => {


    const {state, dispatch } = useContext(CartContext)

    const show_nav = (situation) =>{
        const nav1 = document.querySelector('.nav1');
        const nav2 = document.querySelector('.nav2');
        const showbutton = document.querySelector('.button1');
        const hidebutton = document.querySelector('.button2');

        if(situation=="show"){
            nav1.style.display='flex'
            nav2.style.display='flex'
            showbutton.style.display='none'
            hidebutton.style.display='block'
        }
        else{
            nav1.style.display='none'
            nav2.style.display='none'
            showbutton.style.display='block'
            hidebutton.style.display='none'
        }
    }


    return (
        <div className={`container-fluid ${Styles.navbar}`}>
            <div className={`row ${Styles.navbar_controller}`}>
                <h2 className={`col-10 col-lg-1`}>ShopLand</h2>
                <ul className={`col-lg-6 nav1  ${Styles.navbar_part}`}>
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>call</a></li>
                    <li><a>About us</a></li>

                </ul>

                 <ul className={ `col-lg-4 nav2 ${Styles.cart_part}`}>
                    <li><a className={`${Styles.icon}`}><Heart></Heart></a><span>{state.LikeCount}</span></li>
                    <li><a className={`${Styles.icon}`}><Cart4></Cart4></a><span>{state.Count}</span></li>
                    <li><a>Log in</a></li>

                </ul>
                <h1 className={`col-1 button1 ${Styles.toggle_button}`}  onClick={() => show_nav("show")}><List /></h1>
                <h1 className={`col-1 button2 ${Styles.toggle_button2}`}  onClick={() => show_nav("hide")}><ChevronUp /></h1>

            </div>

            
        </div>
    );
};

export default Navbar;