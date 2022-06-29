import React from 'react';
import { Link } from 'react-router-dom';

//types
import { TeamItem } from '../../types';

interface StandingTeamProps {
    team: TeamItem
}

function StandingTeam({ team }: StandingTeamProps) {
    return (
        <Link to={`/team/${team.id}`}>
            <div className={`standing standing-team ${team.team}-bg flex-column`}>
                <div className="standing__top flex">
                    <div className="standing__top__team-logo">
                        <img className="standing__top__team-logo__img" src={team.teamLogo} alt="team logo" />
                    </div>

                    <div className="standing__top__driver">
                        <h4 className={`standing__top__driver__teamname ${team.team}`}>{team.teamName}</h4>
                    </div>
                </div>

                <div className="standing__bottom">
                    <div className="standing__bottom__place flex">
                        <div className="tag detail standing__bottom__place__div standing-div-border desktop">
                            {team.polePositions} poles
                        </div>

                        <div className="tag detail standing__bottom__place__div standing-div-border mobile">
                            #{team.id + 1}
                        </div>

                        <div className="tag detail standing__bottom__place__div">
                            {team.wins} wins
                        </div>
                    </div>

                    <h3 className="standing__bottom__points">{team.points} pts</h3>
                </div>

                <div className={`standing__number ${team.team} desktop`}>{team.id + 1}</div>

                <div className="standing-team__driver driver1">
                    <img src={team.firstDriver} alt={`${team.firstDriverName} avatar`} />
                </div>
                <div className="standing-team__driver driver2">
                    <img src={team.secondDriver} alt={`${team.secondDriverName} avatar`} />
                </div>
            </div>
        </Link>
    );
}

export default StandingTeam;