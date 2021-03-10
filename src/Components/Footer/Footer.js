import React from 'react';

const Footer = (props) => {
    return (
        <>
            <div className="cart-footer">
            <a href={props.social} target='_blank'
          rel="noopener"> Link</a>
        </div>
        </>
    );
};

export default Footer;