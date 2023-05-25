import React from 'react';

// bootstrap   
import 'bootstrap/dist/css/bootstrap.css';
import {Twitter , Telegram , EnvelopeFill , Linkedin} from 'react-bootstrap-icons';
// style
import Styles from "../Style/Footer.module.css"


const Footer = () => {
    return (
        <div className={Styles.footerParent}>

            <div className={Styles.leftFooter}>
                Voluptate enim aute voluptate minim magna. Elit cillum exercitation deserunt enim laborum nisi nulla occaecat cupidatat qui. Culpa nostrud exercitation ad eiusmod ut cupidatat irure nisi duis ea adipisicing. Eiusmod tempor culpa occaecat voluptate in laborum. Ad officia consequat fugiat labore nulla dolor pariatur magna occaecat. Ex ullamco nisi incididunt pariatur ut quis ad aliqua.

                Irure non ut deserunt nisi amet ipsum minim incididunt non consectetur. Sint laboris nulla irure consequat do cupidatat. Fugiat fugiat do Lorem quis duis ullamco ipsum non culpa commodo duis veniam commodo cupidatat. Commodo amet excepteur proident fugiat minim veniam sint amet nostrud est dolor elit irure velit. Dolor irure nulla dolore adipisicing ea pariatur ut minim voluptate labore laboris occaecat ex. Fugiat elit Lorem ad esse commodo incididunt Lorem voluptate occaecat officia irure sunt dolor. Sit qui ex consequat consectetur anim nostrud incididunt ullamco deserunt anim adipisicing.
            </div>

            <div  className={Styles.rightFooter}>
                <div>Consectetur dolore ut culpa labore Lorem eiusmod non ea velit velit cillum culpa consequat. Exercitation occaecat est fugiat magna cupidatat nisi elit do nulla. Voluptate officia ea sunt esse mollit esse pariatur quis incididunt pariatur occaecat velit voluptate ut. Officia sunt tempor est excepteur aliqua consectetur adipisicing nisi. Duis quis amet tempor consectetur proident dolor voluptate quis magna.</div>
                <div>
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