import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log (data.leagues))
            .then(data => {
                const Leagues = (data.countrys);
               // const first21 = Leagues.slice(0, 51);
                setLeagues(Leagues);
            })

    }, [])



    return (
        <>
            <Header></Header>
            <div className="home-area">
                <div className="container-fluid">
                    <div className="row my-5">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4 gx-4 ">

                                {
                                    leagues.map(league => <League league={league}></League>)
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;