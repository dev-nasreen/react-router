import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="banner-text text-center px-5">
                        <h1>List of All Leagues in England </h1>
                        <h4>League Mania</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
