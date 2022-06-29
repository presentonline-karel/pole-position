import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import SavedBlogposts from '../../4_organisms/SavedBlogposts/SavedBlogposts';
import LatestGP from '../../4_organisms/LatestGP/LatestGP';
import Settings from '../../4_organisms/Settings/Settings';
import SubNav from '../../4_organisms/SubNav/SubNav';

// types
import { ArticleItem } from '../../types';

const Fade = require("react-reveal/Fade");

interface DashboardPageProps {
    articles: ArticleItem[],
}

function DashboardPage({articles} : DashboardPageProps) {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Saved Blogposts");
    }

    return (
        <FadeIn className="page-flex">
            <div className="dashboard">
                <Helmet>
                    <title>Dashboard | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                {/* Subnavigation */}
                <SubNav selected={selected} setSelected={setSelected} />

                {/* Breadcrumbs */}
                <div className="breadcrumbs mobile">
                    <Link to="/dashboard" className="breadcrumbs__item">Dashboard</Link>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <NavLink to="/dashboard" className="breadcrumbs__item">Saved blogposts</NavLink>
                </div>

                <Fade>
                    {/* Saved blogposts content */}
                    <SavedBlogposts articles={articles} />
                </Fade>

                <Fade delay={500}>
                    <LatestGP />
                </Fade>
            </div>
        </FadeIn>
    );
}

export default DashboardPage;