import React from 'react';
import { Link } from 'react-router-dom';

import Driver from '../../3_molecules/Driver/Driver';

function MightAlsoLike() {
    return (
        <section className="mightAlsoLike section">
            <h2 className="section__title">You might also like</h2>

            <div className="mightAlsoLike__drivers">
                <Link to="/driver">
                    <Driver />
                </Link>

                <Link to="/driver">
                    <Driver />
                </Link>

                <Link to="/driver">
                    <Driver />
                </Link>
            </div>
        </section>
    );
}

export default MightAlsoLike;