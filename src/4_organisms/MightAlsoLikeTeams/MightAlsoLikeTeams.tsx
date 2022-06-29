import React from 'react';
import { Link } from 'react-router-dom';

import Team from '../../3_molecules/Team/Team';

function MightAlsoLikeTeams() {
    return (
        <section className="mightAlsoLike section">
            <h2 className="section__title">You might also like</h2>

            <div className="mightAlsoLike__drivers-teams">
                <Link to="/team">
                    <Team />
                </Link>

                <Link to="/team">
                    <Team />
                </Link>

                <Link to="/team">
                    <Team />
                </Link>
            </div>
        </section>
    );
}

export default MightAlsoLikeTeams;