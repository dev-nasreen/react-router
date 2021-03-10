import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Team from '../Team/Team';


const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log (data.leagues))
            .then(data => {
                const Leagues = (data.teams);
                const first15 = Leagues.slice(0, 100);
                setTeams(first15);
                console.log(first15);
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
                                    teams.map(team => <Team team={team}></Team>)
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