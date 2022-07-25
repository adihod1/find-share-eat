import React from 'react'
import './welcome.scss'
import Logo from '../../../images/findShareEatLogo.png'
import Sharing from '../../../images/welcomeSharingIcon.png'
import Find from '../../../images/welcomeFindIcon.png'
import Login from "../login/login-connector";

function Welcome({isModalOpenValue, openLoginModalAction}) {
    return (
        <div id='welcome-container'>
            <img src={Logo} className="logo-image"/>
            <div id="welcome-text">
                <p>Hungry? Looking for something tasty to eat?</p>
                <p>Find, share and enjoy 1000's of recipes that anyone can make!</p>
                <p>Let the fun begin!</p>
            </div>
            <div id="footer">
                <img src={Sharing} className="bottom-images"/>
                <img src={Find} className="bottom-images"/>
            </div>

            <div className="login-wrapper">
                {isModalOpenValue ? <Login/> : ''}
                <button onClick={() => openLoginModalAction(true)}>Login</button>
            </div>
        </div>
    )
}

export default Welcome