import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';

import BlogSearch from '../../4_organisms/BlogSearch/BlogSearch';
import MoreRecentNews from '../../4_organisms/MoreRecentNews/MoreRecentNews';
import Navbar from '../../4_organisms/NavBar/NavBar';

// types
import { ArticleItem } from '../../types';

interface BlogPageProps {
    articles: ArticleItem[],
}

const Fade = require("react-reveal/Fade");

function BlogPage({ articles }: BlogPageProps) {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);



        /* --- BLOG SEARCH FUNCTION --- */
        //sections
        const allArticlesSection = document.querySelector('.moreRecentNews__articles') as HTMLDivElement;

        //articles
        const allArticles = document.querySelectorAll('.article-container') as unknown as HTMLCollectionOf<HTMLElement>;
        const searchInput = document.querySelector('.blogSearch__form__input') as HTMLInputElement;

        //titles + tags
        const articleTitles = document.querySelectorAll('.article__content__title');
        const articleTags = document.querySelectorAll('.tag-search');

        //section title
        const sectionTitle = document.querySelector('.section__title');

        if (typeof sectionTitle != undefined) {
            sectionTitle!.innerHTML = "All recent F1 news";
        }

        //on input start displaying matching content
        searchInput?.addEventListener('input', function () {
            var searchInputValue = searchInput.value;
            var amountOfResults = 0;

            //when input is empty -> display normal content
            if (searchInputValue.length < 1) {
                for (let i = 0; i < allArticles.length; i++) {
                    allArticles[i].style.display = "block";

                    if (typeof sectionTitle != undefined) {
                        sectionTitle!.innerHTML = "All recent F1 news";
                    }
                }
            }

            //when input is not empty -> only show matching content on title/tag
            else {
                for (let i = 0; i < allArticles.length; i++) {
                    var searchableTitleArticle = articleTitles[i].innerHTML.toLowerCase();
                    var searchableTagArticle = articleTags[i].innerHTML.toLowerCase();

                    if (searchableTitleArticle.includes(searchInputValue)) {
                        amountOfResults++;
                        allArticles[i].style.display = "block";
                    }
                    else if (searchableTagArticle.includes(searchInputValue)) {
                        amountOfResults++;
                        allArticles[i].style.display = "block";
                    }
                    else {
                        allArticles[i].style.display = "none";
                    }

                    //Show how many results in title
                    if (typeof sectionTitle != undefined) {
                        if (amountOfResults == 0) {
                            sectionTitle!.innerHTML = "geen zoekresultaat";
                        }
                        else if (amountOfResults == 1) {
                            sectionTitle!.innerHTML = "1 article found";
                        }
                        else {
                            sectionTitle!.innerHTML = amountOfResults + " articles found";
                        }
                    }
                }
            }
        })
    }, []);



    return (
        <FadeIn className="page-flex">
            <section className="blogPage">
                <Helmet>
                    <title>Blog | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <BlogSearch />
                </Fade>

                <Fade delay={500}>
                    <MoreRecentNews articles={articles} />
                </Fade>
            </section>
        </FadeIn>
    );
}

export default BlogPage;