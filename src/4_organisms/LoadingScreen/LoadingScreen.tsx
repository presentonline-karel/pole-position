import React from 'react';

import Logo from './logo-hollow.png';
import LoadingPlaceholder from './Loading.png';

function LoadingScreen() {
    return (
        <div className="loading">
            <div className="loading__screen">
                <img className="loading__screen__img logo" src={Logo} alt="Logo Pole Position" />
                <img className="loading__screen__img loading-placeholder" src={LoadingPlaceholder} alt="Loading placeholder" />
            </div>
        </div>
    );
}

export default LoadingScreen;