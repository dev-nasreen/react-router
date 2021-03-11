import React from 'react';
import { Link } from 'react-router-dom';
import {FaArrowRight } from 'react-icons/fa';
import './League.css'

const League = (props) => {
    console.log(props.league);
    const { idLeague, strLeague, strBadge, strSport, strGender } = props.league;

    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card text-center" >
                <img src={strBadge} class="card-img-top card-img" alt="logo" />
                <div class="card-body">
                    <h5 class="card-title">{strLeague} </h5>
                    <p class="card-text">Sports Type: {strSport} </p>
                    <p class="card-text">Gender: {strGender} </p>
                    <Link to={`/home/${idLeague}`}><button className="btn btn-primary">Explore  <FaArrowRight/></button></Link>
                </div>
            </div>
        </div> 
        </>
    );
};

export default League;
