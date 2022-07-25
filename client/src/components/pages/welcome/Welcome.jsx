import React from 'react'
import './styles.scss'
import Logo from '../../../images/findShareEatLogo.png'
import Sharing from '../../../images/welcomeSharingIcon.png'
import Find from '../../../images/welcomeFindIcon.png'

function Welcome() {
    return (
        <div id='welcome-container'>
            <img src={Logo} class="logo-image" />
            <div id="welcome-text">
                <p>Hungry? Looking for something tasty to eat?</p>
                <p>Find, share and enjoy 1000's of recipes thatanyone can make!</p>
                <p>Let the fun begin!</p>
            </div>
            <div id="footer">
                <img src={Sharing} class="bottom-images"/>
                <img src={Find} class="bottom-images"/>
            </div>
        </div>
    )
}

export default Welcome