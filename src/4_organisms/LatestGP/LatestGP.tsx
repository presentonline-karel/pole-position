import React from 'react';
import { Link } from 'react-router-dom';

function LatestGP() {
    return (
        <div className="latestGP">
            <h2 className="latestGP__title">See the latest news for the next GP!</h2>

            <p className="latestGP__paragraph">
                Find the latest articles, timetable and other info about the Spanisch Grand Prix. You don't want to miss out, do you?
            </p>

            <Link className="button button-primary skew" to="/grandprix-detail">
                <span>Spanisch GP <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
            </Link>
        </div>
    );
}

export default LatestGP;