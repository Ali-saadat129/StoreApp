import React from 'react';

// font awsem icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import { Cart4 } from 'react-bootstrap-icons';

const Navbar = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><h2>ShopLand</h2></li>
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>About us</a></li>

                </ul>
            </div>

            <div>
                 <ul>
                  
                    <li><a><Cart4></Cart4></a></li>
                    <li><a>Log in</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;