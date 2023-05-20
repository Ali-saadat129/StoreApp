import React from 'react';
// hooks 
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
// context 
import { CartContext } from '../context/Cardcontextuse';
import {Contextprovider} from '../context/Context'
// css and styles
import Styles from "../Style/DetailCard.module.css"
// Bootstrap and icons
import 'bootstrap/dist/css/bootstrap.css';
import {FilePlus ,FileMinus ,Trash ,Star ,BackspaceFill} from 'react-bootstrap-icons';

// react router dom 
import { Link } from 'react-router-dom';
// function 
import { ProductCount ,isSelected} from '../Functions/Title';


const DetailCard = (props) => {
    const { id } = useParams();

    // state for button and selceted ithem 
    const {state, dispatch} = useContext(CartContext)
    //state of all data of products 
    const Item = useContext(Contextprovider)

    const Data = Item[id-1]

    return (
        <div className={Styles.DetailParent}>
             <div className={Styles.innerparent}>
            <h3 className={Styles.Backicon}><Link to="/"><BackspaceFill></BackspaceFill></Link></h3>

                <div className={Styles.imageDetail}>
                    <img src={Data.image}></img>
                </div>

                <h3>{Data.title}</h3>
                <p>Category : {Data.category}</p>
                <span>About product : {Data.description}</span>
                <h5>{Data.price}$</h5>
                <span>{Data.rating.rate} <Star></Star></span>
                
                <div>
                    {ProductCount(state,Data.id) === 1 && <Trash onClick={() => dispatch({type:"REMOVE" , payload:Data})} /> }
                    {ProductCount(state,Data.id) > 1 && <FileMinus onClick={() => dispatch({type:"DECREASE" , payload:Data})} /> }


                    {!isSelected(state,Data.id)  && <button onClick={() => dispatch({type:"ADD" , payload:Data})} className={`${Styles.buy_Button}`}>Buy</button> }
                   
                    {ProductCount(state,Data.id) && <FilePlus onClick={() => dispatch({type:"INCREASE" , payload:Data} )} />}
                </div>

             </div>
        </div>
    );
};

export default DetailCard;