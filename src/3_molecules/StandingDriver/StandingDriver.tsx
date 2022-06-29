import React from 'react';
import { Link } from 'react-router-dom';

//types
import { DriverItem } from '../../types';

interface StandingDriverProps {
    driver: DriverItem
}

function StandingDriver({ driver }: StandingDriverProps) {
    return (
        <Link to={`/driver/${driver.id}`}>
            <div className={`standing standing-driver ${driver.team}-bg flex-column`}>
                <div className="standing__top flex">
                    <div className="standing__top__team-logo">
                        <img className="standing__top__team-logo__img" src={driver.teamLogo} alt={`${driver.team} F1 team logo`} />
                    </div>

                    <div className="standing__top__driver">
                        <p className="tag detail">{driver.firstName}</p>
                        <h4 className={`standing__top__driver__lastname ${driver.team}`}>{driver.lastName}</h4>
                    </div>
                </div>

                <div className="standing__bottom">
                    <div className="standing__bottom__place flex">
                        <div className="tag detail standing__bottom__place__div standing-div-border desktop">
                            #{driver.id + 1}
                        </div>

                        <div className="tag detail standing__bottom__place__div standing-div-border mobile">
                            #{driver.id + 1}
                        </div>

                        <div className="tag detail standing__bottom__place__div">
                            {driver.wins} wins
                        </div>
                    </div>

                    <h3 className="standing__bottom__points">{driver.points} pts</h3>
                </div>

                <div className={`standing__number ${driver.team} desktop`}>{driver.raceNumber}</div>

                <div className="standing__driver-img">
                    <img src={driver.image} alt={`${driver.firstName} ${driver.lastName} avatar`} />
                </div>
            </div>
        </Link>
    );
}

export default StandingDriver;