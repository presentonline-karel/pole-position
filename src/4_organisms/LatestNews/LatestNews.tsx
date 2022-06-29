import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import LatestNewsArticle from '../../3_molecules/LatestNewsArticle/LatestNewsArticle';

import { useTranslation } from "react-i18next";


function LatestNews() {
    const { t } = useTranslation()
    
    return (
        <section id="latestnews" className="latestnews section">
            <h2 className="latestnews__title section__title">{t('latest_news_title')}</h2>

            {/* MOBILE ARTICLES */}
            <div className="latestnews__articles flex-column mobile">
                <Link to="/blog-detail">
                    <LatestNewsArticle />
                </Link>
                <Link to="/blog-detail">
                    <LatestNewsArticle />
                </Link>
            </div>

            {/* TABLET LANDSCAPE ARTICLES */}
            <div className="latestnews__articles tablet-landscape flex">
                <Link className="big-article" to="/blog-detail">
                    <LatestNewsArticle />
                </Link>

                <div className="latestnews__articles__smallones flex-column">
                    <Link to="/blog-detail">
                        <LatestNewsArticle />
                    </Link>
                    <Link to="/blog-detail">
                        <LatestNewsArticle />
                    </Link>
                </div>
            </div>

            <p className="cta__p">{t('latest_news_cta')}</p>

            <Link className="button button-primary skew" to="/register">
                <span>{t('latest_news_cta_button')} <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
            </Link>
        </section>
    );
}

export default LatestNews;