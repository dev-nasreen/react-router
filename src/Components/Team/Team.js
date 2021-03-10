import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css'

const Team = (props) => {
    console.log(props.team);
    const { idTeam, strTeam, strTeamBadge, strSport } = props.team;

    return (
        <>
            <div className="col-md-4 ">
            <div class="card py-5 text-center" >
                <img src={strTeamBadge} class="card-img-top card-img" alt="logo" />
                <div class="card-body">
                    <h5 class="card-title">{strTeam} </h5>
                    <p class="card-text">Sports Type: {strSport} </p>
                    <Link to={`/home/${idTeam}`}><button className="btn btn-primary">Explore</button></Link>
                </div>
            </div>
        </div> 
        </>
    );
};

export default Team;
