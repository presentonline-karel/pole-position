import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { ArticleItem } from "../../types";
import FadeIn from "react-fade-in";

import Socials from "../../3_molecules/Socials/Socials";
import MoreRecentNews from "../../4_organisms/MoreRecentNews/MoreRecentNews";
import NavBar from "../../4_organisms/NavBar/NavBar";
import { useEffect } from "react";

const Fade = require("react-reveal/Fade");

interface ParamTypes {
    id: string | undefined
}

interface DetailPageProps {
    articles: ArticleItem[]
}

function DetailPage({ articles }: DetailPageProps) {
    let { id } = useParams();
    let article = articles.find((article: ArticleItem) => article.id === parseInt(id!))!;

    //scroll to the top
    document.documentElement.scrollTo(0, 0);

    return (
        <FadeIn className="page-flex">
            <section className="blogDetail">
                <Helmet>
                    <title>Blog detail | Pole Positon - F1 Blog</title>
                </Helmet>

                <NavBar />

                <div className="blogDetail__content section">
                    <p className="blogDetail__content__date tag detail">{article.date}</p>

                    <h2 className="blogDetail__content__title section__title">{article.title}</h2>
                    <p className="blogDetail__content__intro">{article.intro}</p>

                    {/* <img className="blogDetail__content__img header-img" src={"../" + process.env.PUBLIC_URL + "images" + article.image} alt="detail picture blogpost" /> */}
                    <img className="blogDetail__content__img header-img" src={`../${article.image}`} alt="detail picture blogpost" />

                    <div className="flex-desktop">
                        <div className="first-block">
                            <h4 className="blogDetail__content__subtitle">{article.subtitleFirst}</h4>
                            <p className="blogDetail__content__p">{article.paragraphFirst}</p>
                        </div>

                        <div className="blogDetail__content__blogpostInfo desktop">
                            <p className="blogDetail__content__blogpostInfo__title">PUBLISHER</p>
                            <p className="blogDetail__content__blogpostInfo__p">{article.publisher}</p>

                            <p className="blogDetail__content__blogpostInfo__title">TAGS</p>
                            <p className="blogDetail__content__blogpostInfo__p"><button className={`button skew ${article.mainTagColor} ${article.mainTagBackgroundColor}`}><span>{article.mainTag}</span></button></p>

                            <p className="blogDetail__content__blogpostInfo__title">SHARE</p>
                            <Socials />
                        </div>
                    </div>

                    <img className="blogDetail__content__img" src={article.imageSecond} alt={article.altTextSecond} />

                    <div className="regular-block">
                        <h4 className="blogDetail__content__subtitle">{article.subtitleSecond}</h4>
                        <p className="blogDetail__content__p">{article.paragraphSecond}</p>
                    </div>

                    <div className="blogDetail__content__blogpostInfo mobile">
                        <p className="blogDetail__content__blogpostInfo__title">PUBLISHER</p>
                        <p className="blogDetail__content__blogpostInfo__p">{article.publisher}</p>

                        <p className="blogDetail__content__blogpostInfo__title">TAGS</p>
                        <p className="blogDetail__content__blogpostInfo__p"><button className={`button skew ${article.mainTagColor} ${article.mainTagBackgroundColor}`}><span>{article.mainTag}</span></button></p>

                        <p className="blogDetail__content__blogpostInfo__title">SHARE</p>
                        <Socials />
                    </div>
                </div>

                <Fade delay={500}>
                    <MoreRecentNews articles={articles} />
                </Fade>
            </section>
        </FadeIn>
    )
}

export default DetailPage;