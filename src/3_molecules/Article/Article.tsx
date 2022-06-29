import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";

import articleImage from './article1.jpeg';

// types
import { ArticleItem } from '../../types';

interface ArticleProps {
    article: ArticleItem
}

function Article({ article }: ArticleProps) {
    return (

        <Link className="article-container" to={`/detail/${article.id}`}>
            {/*<article className="article">
                <div className="article__content">
                    <div>
                        <div className="article__img">
                            <img src={articleImage} alt="article cover image" />
                        </div>

                        <div className="article__content__top flex">
                            <p className="tag mercedes mercedes-bg">Mercedes</p>
                            <p className="tag detail">8 min read</p>
                        </div>

                        <h4 className="article__content__title">Possible advantage for Red Bull in the second half of the season</h4>

                        <p className="article__content__paragraph">
                            Helmut Marko has confirmed that Red Bull Racing's RB18 is roughly ten kilos of 'overweight'...
                        </p>
                    </div>

                    <div className="article__content__bottom flex">
                        <a className="button button-secondary skew" href="#"><span>Read Article <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                        <a className="icon-bg" href="#"><i className="fa fa-bookmark" aria-hidden="true"></i></a>
                    </div>
                </div>
            </article>*/}

            {/* Actual article */}
            <article className="article" >
                <div className="article__content">
                    <div>
                        <div className="article__img">
                            <img src={article.image} alt={article.altText} />
                        </div>

                        <div className="article__content__top flex">
                            <p className={`tag tag-search ${article.mainTagColor} ${article.mainTagBackgroundColor}`}>{article.mainTag}</p>
                            <p className="tag detail">{article.minutesRead} min read</p>
                        </div>

                        <h4 className="article__content__title">{article.title}</h4>
                        <p className="article__content__paragraph">{article.intro}</p>
                    </div>

                    <div className="article__content__bottom flex">
                        <a className="button button-secondary skew" href="#"><span>Read Article <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></a>
                        <a className="icon-bg" href="#"><i className="fa fa-bookmark" aria-hidden="true"></i></a>
                    </div>
                </div>
            </article>
        </Link >
    );
}

export default Article;