import React from 'react';

import FactNumber from '../../3_molecules/FactNumber/FactNumber';

function FactsNumbers() {
    return (
        <div className="factsNumbers section">
            <h2 className="section__title">Facts & numbers</h2>

            <div className="factsNumbers__items">
                <FactNumber />
                <FactNumber />
                <FactNumber />
                <FactNumber />
            </div>
        </div>
    );
}

export default FactsNumbers;