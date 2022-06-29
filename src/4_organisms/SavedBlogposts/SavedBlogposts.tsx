import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";

import Article from '../../3_molecules/Article/Article';

//types
import { ArticleItem } from '../../types';

interface SavedBlogpostsProps {
    articles: ArticleItem[]
}

function SavedBlogposts({ articles }: { articles: ArticleItem[] }) {
    return (
        <section className="savedBlogposts section">
            <div className="welcome desktop">
                <div className="welcome__content">
                    <h2 className="welcome__content__title">Hi Karel, how are you?</h2>
                    <p className="welcome__content__p">Find your saved blogposts below</p>
                </div>
            </div>

            <div className="savedBlogposts__articles">
                {articles.map((article: ArticleItem) => {
                    return <Article article={article} />
                })}
            </div>

            <div className="center">
                <a className="button button-tertiary skew"><span>More articles <i className="fa fa-chevron-down first-chevron" aria-hidden="true"></i></span></a>
            </div>
        </section>
    );
}

export default SavedBlogposts;