import React from 'react';

import Charles from './Charles.jpg';
import Helmet from './helmet-cut.png';

function Driver() {
    return (
        <div className="driver-team">
            <div className="driver-team__img">
                <img src={Charles} alt="Charles Leclercq" />
            </div>

            <div className="driver-team__content">
                <p className="tag tag-driver driver-team__content__tag"><img className="driver-team__content__tag__helmet-flag" src={Helmet} alt="driver helmet icon" />driver</p>

                <h3 className="driver-team__content__title">Charles Leclercq</h3>

                <p className="driver-team__content__paragraph">Leclerq entered the F1 grid in 2018 and was born in Monaco. He drove for the Alfo Romeo & Ferrari team.</p>

                <a className="button button-secondary skew" href="#"><span>Discover driver <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
            </div>
        </div>
    );
}

export default Driver;