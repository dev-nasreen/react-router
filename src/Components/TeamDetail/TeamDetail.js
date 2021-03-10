import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import male from '../images/Photo/male.png';
import female from '../images/Photo/female.png';
import './TeamDetail.css';

const TeamDetail = () => {
    let { idTeam } = useParams();
    const [team, setTeam] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))

    }, [idTeam])


    let img = (team.strGender === "Male") ? <img src={male} alt="" /> : <img src={female} alt="" />



    return (
        <>
            <div className="team-detail-banner"  >
                <img src={team.strTeamBanner} className="banner-img" alt="team badge" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <div className="single-cart-detail">
                            <div className="cart-banner">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="left px-5 py-4">
                                            <img src={team.strTeamBadge} className="banner-logo" alt="team badge" />
                                            <h2>{team.strTeam}</h2>
                                            <p>Founded: {team.intFormedYear}</p>
                                            <p>Country: {team.strCountry}</p>
                                            <p>Sport Type: {team.strSport}</p>
                                            <p>Gender: {team.strGender}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="right d-flex justify-content-center py-5 px-5">
                                            {img}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-body">
                                  {team.strDescriptionEN} 
                                 
                            </div>

                            <Footer social={team.strFacebook}></Footer>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetail;