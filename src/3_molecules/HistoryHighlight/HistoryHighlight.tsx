import React from 'react';

import Max from './article1.jpeg';

function HistoryHighlight() {
    return (
        <div className="historyHighlight">
            <img className="historyHighlight__thumbnail" src={Max} alt="Historical moment thumbnail" />

            <h3 className="historyHighlight__title">Heading 1</h3>

            <p className="historyHighlight__p">
                Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
            </p>

            <p className="historyHighlight__date tag detail">
                20th may 1997
            </p>
        </div>
    );
}

export default HistoryHighlight;