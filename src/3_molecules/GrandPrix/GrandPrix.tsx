import React from 'react';
import { Link } from 'react-router-dom';

import circuitBackground from './circuit-background.png';

//types
import { GrandPrixItem } from '../../types';
import { getPackedSettings } from 'http2';

interface GrandPrixProps {
    grandPrix: GrandPrixItem
}

function GrandPrix({ grandPrix }: GrandPrixProps) {
    return (
        <Link to={`/grandprix-detail/${grandPrix.id}`}>
            <div className="grandprix">

                {/* GREY RECTANGLE ON OVERVIEW */}
                <img className="grandprix__bg" src={circuitBackground} alt="circuit bg image" />

                <div className="grandprix__header">
                    <div className="grandprix__header__title flex">
                        <img className="flag" src={grandPrix.flag} alt="Flag of country GP" />
                        <h3>{grandPrix.country} GP</h3>
                    </div>
                    <div className="tag detail">{grandPrix.circuitName}</div>
                </div>

                <img className="grandprix__circuit" src={grandPrix.circuitImage} alt={`${grandPrix.circuitName} map`} />

                <div className="grandprix__datetime">
                    <h3 className="grandprix__datetime__date">{grandPrix.gpDate} | {grandPrix.gpHour}</h3>
                    <p className="tag circuit"><i className="fa fa-clock-o" aria-hidden="true"></i> {grandPrix.timeUntilGP}</p>
                </div>

                <a className="button button-secondary skew" href="#"><span>{grandPrix.country} GP <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
            </div>
        </Link>
    );
}

export default GrandPrix;