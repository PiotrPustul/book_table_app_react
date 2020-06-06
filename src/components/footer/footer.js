import React from 'react'
import './_Footer.scss';
import logo from '../images/logo.png'


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                <div className="opening__hours">
                    <h2>opening hours</h2>
                    <span>Monday to Saturday 11.00 - 23.30</span>
                    <span>Sunday 12.00 - 22.00</span>
                </div>
                <div className="footer__contact">
                    <div className="logo__footer">
                        <img src={logo} alt="" />
                    </div >
                    <div>
                        <span><i className="fas fa-map-marker-alt"></i> 00 SMITH STREET, CHELSEA, LONDON SW3 4EE</span>
                        <span><i className="fas fa-phone-square-alt"></i> 020 7766 5544</span>
                        <span><i className="fas fa-envelope-square"></i> restaurant@restaurant.co.uk</span>
                    </div>

                </div>

            </div>
        </div >
    );
}

export default Footer;