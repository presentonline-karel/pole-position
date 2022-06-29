import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import GrandPrix from '../../3_molecules/GrandPrix/GrandPrix';

//types
import { GrandPrixItem } from '../../types';

interface GrandPrixsPageProps {
    grandPrixs: GrandPrixItem[],
}

const Fade = require("react-reveal/Fade");



function GrandPrixsPage({ grandPrixs }: GrandPrixsPageProps) {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    return (
        <FadeIn className="page-flex">
            <div className="grandprixs">
                <Helmet>
                    <title>Grand Prixs | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <LatestGP />
                </Fade>

                <Fade>
                    <div className="grandprixs-section section">
                        <h2 className="section__title">All 2022 Grand Prixs</h2>

                        <div className="grandprixs-section__items">
                            {grandPrixs.map((grandPrix: GrandPrixItem) => {
                                return <GrandPrix grandPrix={grandPrix} />
                            })}

                        </div>
                    </div>
                </Fade>
            </div>
        </FadeIn>
    );
}

export default GrandPrixsPage;