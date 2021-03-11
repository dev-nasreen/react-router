import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import male from '../images/Photo/male.png';
import female from '../images/Photo/female.png';
import mixed from '../images/Photo/mixed.jpg';
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialYoutubeCircular } from 'react-icons/ti';
import { FaFontAwesomeFlag } from 'react-icons/fa';
import { BiFootball } from 'react-icons/bi';
import { CgGenderMale} from 'react-icons/cg';
import { CgCalendarDates} from 'react-icons/cg';
import './LeagueDetail.css';

const LeagueDetail = () => {
    let {  idLeague } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))

    }, [ idLeague])


    let img = 
    (league.strGender === "Female") ? <img src={female} alt="" /> : 
    (league.strGender === "Male") ? <img src={male} alt="" /> :
    <img src={mixed} alt="" /> ;
    


    return (
        <>
            <div className="team-detail-banner"  >
                <img src={league.strBanner} className="banner-img" alt="team badge" />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="single-cart-detail">
                            <div className="cart-banner">
                                <div className="row align-items-center justify-content center">
                                    <div className="col-md-6 col-12">
                                        <div className="left">
                                            <img src={league.strLogo} className="banner-logo" alt="team badge" />
                                            <h2>{league.strLeague}</h2>
                                            <p><CgCalendarDates/> Founded: {league.intFormedYear}</p>
                                            <p><FaFontAwesomeFlag/> Country: {league.strCountry}</p>
                                            <p><BiFootball/> Sport Type: {league.strSport}</p>
                                            <p><CgGenderMale/> Gender: {league.strGender}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 ">
                                        <div className="right ">
                                            {img}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="cart-body">
                                <p>{league.strDescriptionEN} </p> 
                            </div>

                            <div className="cart-footer text-center">
                                    
                                  <a href={`https://${league.strTwitter}`} ><span className="twitter"> <AiFillTwitterCircle /></span> </a>   
                                    <a href={`https://${league.strYoutube}`} ><span className="youTube"><TiSocialYoutubeCircular /></span></a>
                                    <a href={`https://${league.strFacebook}`}><span  className="facebook"><FaFacebook/></span></a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeagueDetail;