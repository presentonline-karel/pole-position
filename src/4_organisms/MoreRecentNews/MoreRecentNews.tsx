import React from 'react';
import { Link } from 'react-router-dom';

import Article from '../../3_molecules/Article/Article';

// types
import { ArticleItem } from '../../types';

interface MoreRecentNewsProps {
    articles: ArticleItem[]
}

function MoreRecentNews({ articles }: { articles: ArticleItem[] }) {
    return (
        <div className="moreRecentNews section">
            <h2 className="section__title">More recent news</h2>

            <div className="moreRecentNews__articles">
                {articles.map((article: ArticleItem) => {
                    return <Article article={article} />
                })}
            </div>

            <div className="center">
                <Link className="button button-secondary skew" to="/blog"><span>All latest news <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></Link>
            </div>
        </div>
    );
}

export default MoreRecentNews;