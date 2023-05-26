import React from 'react';

// bootstrap   
import 'bootstrap/dist/css/bootstrap.css';
import {Twitter , Telegram , EnvelopeFill , Linkedin} from 'react-bootstrap-icons';
// style
import Styles from "../Style/Footer.module.css"


const Footer = () => {
    return (
        <div className={Styles.footerParent}>

            <div className={` col col-md-8 ${Styles.leftFooter}`}>
                Voluptate enim aute voluptate minim magna. culpa occaecat voluptate in laborum. voluptate minim magna. culpa occaecat voluptate in laborum. Ad officia consequat fugiat voluptate minim magna. culpa occaecat voluptate in laborum. Ad officia consequat fugiat Ad officia consequat fugiat labore nulla dolor pariatur magna occaecat. Ex ullamco nisi incididunt pariatur ut quis ad aliqua.

                Irure non ut  duis ullamco est dolor elit irure velit .  voluptate minim magna. culpa occaecat voluptate in laborum. Ad officia consequat fugiat. Sit qui ex consequat consectetur anim nostrud incididunt ullamco deserunt anim adipisicing.
            </div>

            <div  className={`col col-md-4 ${Styles.rightFooter}`}>
                <div className={Styles.rfooterTop}>Consectetur dolore ut culpa labore Lorem eiusmod non ea velit velit cillum culpa consequat. Exercitation occaecat est fugiat magna cupidatat nisi elit do nulla. Voluptate officia ea sunt esse mollit esse pariatur quis incididunt pariatur occaecat velit voluptate ut. Officia sunt tempor est excepteur aliqua consectetur adipisicing nisi. Duis quis amet tempor consectetur proident dolor voluptate quis magna.</div>
                <div className={`${Styles.iconsPart}`}>
                    <Twitter />
                    <Telegram />
                    <EnvelopeFill />
                    <Linkedin />
                </div>
            </div>
            
        </div>
    );
};

export default Footer;