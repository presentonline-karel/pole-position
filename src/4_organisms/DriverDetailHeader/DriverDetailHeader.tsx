import React from 'react';

import DriverTeamDetailItem from '../../3_molecules/DriverTeamDetailItem/DriverTeamDetailItem';
import Socials from '../../3_molecules/Socials/Socials';

import { Link, NavLink, useParams } from 'react-router-dom';

//types
import { DriverItem } from '../../types';

interface DriverDetailHeaderProps {
    drivers: DriverItem[]
}

function DriverDetailHeader({ drivers }: DriverDetailHeaderProps) {
    let { id } = useParams();
    let driver = drivers.find((driver: DriverItem) => driver.id === parseInt(id!))!;

    return (
        <div className="detailHeader section">
            {/* Breadcrumbs */}
            <div className="breadcrumbs mobile">
                <Link to="/driverStandings" className="breadcrumbs__item">Drivers</Link>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <NavLink to={`/driver/${driver.id}`} className="breadcrumbs__item">{driver.firstName} {driver.lastName}</NavLink>
            </div>

            <div className="top flex">
                <div className="top__drivers top-driver">
                    <img className="top-driver__img" src={`../${driver.image}`} alt={`${driver.firstName} ${driver.lastName} avatar`} />
                </div>

                <div className="top__info">
                    <div className="top__info__logos flex">
                        <Link to="/team">
                            <img className="top__info__logos__team-logo" src={`../${driver.teamLogo}`} alt="F1 team logo" />
                        </Link>
                    </div>

                    <h2 className="top__info__title">{driver.firstName}<br /> {driver.lastName}</h2>

                    <div className="top__info__middle flex-desktop desktop">
                        <div className="top__info__driver-stats flex-desktop">
                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">Nationality</h5>
                                <p className="top__info__driver-stats__item__p">{driver.nationality}</p>
                            </div>

                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">Age</h5>
                                <p className="top__info__driver-stats__item__p">{driver.age}</p>
                            </div>

                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">Experience</h5>
                                <p className="top__info__driver-stats__item__p">{driver.experience} years</p>
                            </div>
                        </div>

                        <Socials />
                    </div>

                    <div className="socials-mobile mobile">
                        <Socials />
                    </div>

                    <div className="driver-team__items desktop">
                        {/* world championships */}
                        <div className="item flex">
                            <div className="flex">
                                <div className="item__icon-bg icon-bg-lg">
                                    <i className="fa fa-trophy" aria-hidden="true"></i>
                                </div>

                                <p className="item__title">
                                    World<br />
                                    Championships
                                </p>
                            </div>

                            <h2 className="item__number">{driver.worldChampionships}x</h2>
                        </div>

                        {/* pole positions */}
                        <div className="item flex">
                            <div className="flex">
                                <div className="item__icon-bg icon-bg-lg">
                                    <i className="fa fa-rocket" aria-hidden="true"></i>
                                </div>

                                <p className="item__title">
                                    Pole<br />
                                    Positions
                                </p>
                            </div>

                            <h2 className="item__number">{driver.polePositions}x</h2>
                        </div>

                        {/* fastest laps */}
                        <div className="item flex">
                            <div className="flex">
                                <div className="item__icon-bg icon-bg-lg">
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                </div>

                                <p className="item__title">
                                    Fastest<br />
                                    Laps
                                </p>
                            </div>

                            <h2 className="item__number">{driver.fastestLaps}x</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="driver-team__items mobile">
                {/* world championships */}
                <div className="item flex">
                    <div className="flex">
                        <div className="item__icon-bg icon-bg-lg">
                            <i className="fa fa-trophy" aria-hidden="true"></i>
                        </div>

                        <p className="item__title">
                            World<br />
                            Championships
                        </p>
                    </div>

                    <h2 className="item__number">{driver.worldChampionships}x</h2>
                </div>

                {/* pole positions */}
                <div className="item flex">
                    <div className="flex">
                        <div className="item__icon-bg icon-bg-lg">
                            <i className="fa fa-rocket" aria-hidden="true"></i>
                        </div>

                        <p className="item__title">
                            Pole<br />
                            Positions
                        </p>
                    </div>

                    <h2 className="item__number">{driver.polePositions}x</h2>
                </div>

                {/* fastest laps */}
                <div className="item flex">
                    <div className="flex">
                        <div className="item__icon-bg icon-bg-lg">
                            <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </div>

                        <p className="item__title">
                            Fastest<br />
                            Laps
                        </p>
                    </div>

                    <h2 className="item__number">{driver.fastestLaps}x</h2>
                </div>
            </div>
        </div>
    );
}

export default DriverDetailHeader;