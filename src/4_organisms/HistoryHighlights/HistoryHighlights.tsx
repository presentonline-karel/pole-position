import React from 'react';

import HistoryHighlight from '../../3_molecules/HistoryHighlight/HistoryHighlight';

function HistoryHighlights() {
    return (
        <section className="historyHighlights section">
            <h2 className="historyHighlights__title section__title">History highlights</h2>

            {/* HISTORY HIGHLIGHTS MOBILE + TABLET PORTRAIT */}
            <div className="historyHighlights-mobile">
                <p className="historyHighlights__p">
                    Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een. Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                </p>

                <div className="historyHighlights__highlights">
                    <HistoryHighlight />
                    <HistoryHighlight />
                    <HistoryHighlight />
                </div>
            </div>

            {/* HISTORY HIGHLIGHTS TABLET LANDSCAPE + < */}
            <div className="historyHighlights-tablet-desktop">
                <div className="historyHighlights__header flex-tablet-landscape">
                    <h3 className="historyHighlights__header__title">Introduction</h3>

                    <p className="historyHighlights__p">
                        Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een. Het is al geruime tijd een bekend gegeven dat een lezer, tijdens het bekijken van de layout van een.
                    </p>
                </div>

                <div className="timeline">
                    <ul>
                        <li>
                            <div className="content">
                                <h4>Max Verstappen wins the 2021 World Championship!</h4>
                                <p>Verstappen won in de allerlaatste ronde van Lewis Hamilton na een overtake in Turn 5 nadat een crash van Nichalos Latifi het hele wedstrijdveld weer had samengebracht achter de safety car.</p>
                            </div>
                        </li>

                        <li>
                            <div className="content">
                                <h4>Max Verstappen wins the 2021 World Championship!</h4>
                                <p>Verstappen won in de allerlaatste ronde van Lewis Hamilton na een overtake in Turn 5 nadat een crash van Nichalos Latifi het hele wedstrijdveld weer had samengebracht achter de safety car.</p>
                            </div>
                        </li>

                        <li>
                            <div className="content">
                                <h4>Max Verstappen wins the 2021 World Championship!</h4>
                                <p>Verstappen won in de allerlaatste ronde van Lewis Hamilton na een overtake in Turn 5 nadat een crash van Nichalos Latifi het hele wedstrijdveld weer had samengebracht achter de safety car.</p>
                            </div>
                        </li>

                        <li>
                            <div className="content">
                                <h4>Max Verstappen wins the 2021 World Championship!</h4>
                                <p>Verstappen won in de allerlaatste ronde van Lewis Hamilton na een overtake in Turn 5 nadat een crash van Nichalos Latifi het hele wedstrijdveld weer had samengebracht achter de safety car.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default HistoryHighlights;