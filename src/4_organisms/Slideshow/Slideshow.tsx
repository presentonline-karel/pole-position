import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Kevin from './Kevin.webp';
import Lando from './Lando.webp';
import Max from './Max.webp';

function Slideshow() {
    return (
        <section className="recentShots section">
            <h2 className="section__title">Most recent shots</h2>

            <section className="slideshow">
                <a className="slideshow__link" href={Kevin} data-lightbox="image-1" data-title="Kevin Magnussen - Monaco GP">
                    <img className="slideshow__link__img" src={Kevin} alt="Kevin picture" />
                </a>

                <a className="slideshow__link" href={Lando} data-lightbox="image-1" data-title="Lando Norris - Monaco GP">
                    <img className="slideshow__link__img" src={Lando} alt="Kevin picture" />
                </a>

                <a className="slideshow__link" href={Max} data-lightbox="image-1" data-title="Max Verstappen - Monaco GP">
                    <img className="slideshow__link__img" src={Max} alt="Kevin picture" />
                </a>

                <a className="slideshow__link" href={Kevin} data-lightbox="image-1" data-title="Kevin Magnussen - Monaco GP">
                    <img className="slideshow__link__img" src={Kevin} alt="Kevin picture" />
                </a>

                <a className="slideshow__link" href={Lando} data-lightbox="image-1" data-title="Lando Norris - Monaco GP">
                    <img className="slideshow__link__img" src={Lando} alt="Kevin picture" />
                </a>

                <a className="slideshow__link" href={Max} data-lightbox="image-1" data-title="Max Verstappen - Monaco GP">
                    <img className="slideshow__link__img" src={Max} alt="Kevin picture" />
                </a>

                <a className="slideshow__link" href={Lando} data-lightbox="image-1" data-title="Lando Norris - Monaco GP">
                    <img className="slideshow__link__img" src={Lando} alt="Kevin picture" />
                </a>

                <a className="slideshow__link" href={Max} data-lightbox="image-1" data-title="Max Verstappen - Monaco GP">
                    <img className="slideshow__link__img" src={Max} alt="Kevin picture" />
                </a>
            </section>
        </section>
    );
}

export default Slideshow;