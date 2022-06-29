import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import Settings from '../../4_organisms/Settings/Settings';
import SubNav from '../../4_organisms/SubNav/SubNav';

const Fade = require("react-reveal/Fade");

function AccountPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    const [selected, setSelected] = useState("");

    if (selected == "") {
        setSelected("Account");
    }

    return (
        <FadeIn className="page-flex">
            <div className="dashboard">
                <Helmet>
                    <title>Account | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                {/* Subnavigation */}
                <SubNav selected={selected} setSelected={setSelected} />

                {/* Breadcrumbs */}
                <div className="breadcrumbs mobile">
                    <Link to="/dashboard" className="breadcrumbs__item">Dashboard</Link>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    <NavLink to="/dashboard" className="breadcrumbs__item">Account</NavLink>
                </div>

                <Fade>
                    {/* Settings content */}
                    <Settings />
                </Fade>
            </div>
        </FadeIn>
    );
}

export default AccountPage;