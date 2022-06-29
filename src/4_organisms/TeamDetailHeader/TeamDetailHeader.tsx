import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

import DriverTeamDetailItem from '../../3_molecules/DriverTeamDetailItem/DriverTeamDetailItem';
import Socials from '../../3_molecules/Socials/Socials';

//types
import { TeamItem } from '../../types';

interface TeamDetailHeaderProps {
    teams: TeamItem[]
}

function TeamDetailHeader({ teams }: TeamDetailHeaderProps) {
    let { id } = useParams();
    let team = teams.find((team: TeamItem) => team.id === parseInt(id!))!;

    return (
        <div className="detailHeader detailHeader-team section">
            {/* Breadcrumbs */}
            <div className="breadcrumbs mobile">
                <Link to="/teamStandings" className="breadcrumbs__item">Teams</Link>
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                <NavLink to="/driver" className="breadcrumbs__item">{team.teamName}</NavLink>
            </div>

            <div className="top flex">
                <div className="top__drivers top-team">

                    {/* INSERT DRIVER LINKS */}
                    <img className="top-team__img" src={`../${team.firstDriver}`} alt={`${team.firstDriverName} avatar`} />
                    <img className="top-team__img" src={`../${team.secondDriver}`} alt={`${team.secondDriverName} avatar`} />
                </div>

                <div className="top__info">
                    <a href="https://www.redbullracing.com/int-en" target="_blank">
                        <img className="top__info__logos__team-logo" src={`../${team.teamLogo}`} alt="F1 team logo" />
                    </a>

                    <h2 className="top__info__title">{team.teamName}</h2>

                    <div className="top__info__middle flex-desktop desktop">
                        <div className="top__info__driver-stats flex-desktop">
                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">Origin Country</h5>
                                <p className="top__info__driver-stats__item__p">{team.originCountry}</p>
                            </div>

                            <div className="top__info__driver-stats__item">
                                <h5 className="top__info__driver-stats__item__title">First Entry</h5>
                                <p className="top__info__driver-stats__item__p">{team.firstEntry}</p>
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

                            <h2 className="item__number">{team.worldChampionships}x</h2>
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

                            <h2 className="item__number">{team.polePositions}x</h2>
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

                            <h2 className="item__number">{team.fastestLaps}x</h2>
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

                    <h2 className="item__number">{team.worldChampionships}x</h2>
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

                    <h2 className="item__number">{team.polePositions}x</h2>
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

                    <h2 className="item__number">{team.fastestLaps}x</h2>
                </div>
            </div>
        </div>
    );
}

export default TeamDetailHeader;