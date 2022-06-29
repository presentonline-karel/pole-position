import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import Article from '../../3_molecules/Article/Article';

//types
import { ArticleItem, GrandPrixItem } from '../../types';

interface GrandPrixDetailPageProps {
    articles: ArticleItem[],
    grandPrixs: GrandPrixItem[]
}

interface ParamTypes {
    id: string | undefined
}



function GrandPrixDetailPage({ articles, grandPrixs }: GrandPrixDetailPageProps) {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    let { id } = useParams();
    let grandPrix = grandPrixs.find((grandPrix: GrandPrixItem) => grandPrix.id === parseInt(id!))!;



    return (
        <FadeIn className="page-flex">
            <div className="grandprixDetail">
                <Helmet>
                    <title>{grandPrix.country} GP | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <div className="banner">
                    <div className="banner__bg" style={{backgroundImage: `url(../${grandPrix.headerImage})`}}></div>

                    <div className="banner__info">
                        <div className="banner__info__circuit">
                            <img className="banner__info__circuit__img" src={`../${grandPrix.circuitImage}`} alt={`${grandPrix.circuitName} map`} />
                        </div>

                        <h2 className="banner__info__title">2022 {grandPrix.country} GP</h2>

                        <p className="button button-secondary skew"><span><i className="fa fa-calendar" aria-hidden="true"></i> {grandPrix.gpWeekend}</span></p>
                    </div>
                </div>

                <section className="grandprixDetail__articles section">
                    <div className="breadcrumbs">
                        <Link to="/grandprixs" className="breadcrumbs__item">Grand Prixs</Link>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        <NavLink to="/grandprix-detail" className="breadcrumbs__item">{grandPrix.country} Grand Prix</NavLink>
                    </div>

                    <h2 className="section__title">2022 {grandPrix.country} GP</h2>

                    <div className="grandprixDetail__articles__articles">

                        {/* All articles from specific GP */}
                        {articles.map((article: ArticleItem) => {
                            return <Article article={article} />
                        })}
                    </div>

                    <div className="center">
                        <a className="button button-tertiary skew"><span>More articles <i className="fa fa-chevron-down first-chevron" aria-hidden="true"></i></span></a>
                    </div>
                </section>
            </div>
        </FadeIn>
    );
}

export default GrandPrixDetailPage;