import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Socials from '../../3_molecules/Socials/Socials';

function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="mobile">
                {/* LOGO + SCROLLUP */}
                <div className="top flex">
                    <Link to="/">
                        <img className="logoFooter" src="/images/logos/pole-position-logo-big-dark.svg" alt="logo Pole Position footer" />
                    </Link>

                    <a className="scrollup icon-bg" href="#container">
                        <i className="scrollup__icon fa fa-chevron-up" aria-hidden="true"></i>
                    </a>
                </div>

                {/* CONTACT */}
                <div className="footer__section">
                    <h3>{t('footer_contact_title')}</h3>

                    <a className="footer__section__p" href="tel:+32478692536">+32 478 69 25 36</a>
                    <a className="footer__section__p" href="mailto:info@poleposition.be">info@poleposition.be</a>
                </div>

                {/* HEADOFFICE */}
                <div className="footer__section">
                    <h3>{t('footer_headoffice_title')}</h3>

                    <a href="https://goo.gl/maps/AReNJ66swuL1HsJY6" target="_blank">
                        <p className="footer__section__p">Bredestraat 1550</p>
                        <p className="footer__section__p">2650 Hemiksem</p>
                        <p className="footer__section__p">Antwerp, Belgium</p>
                    </a>
                </div>

                {/* SOCIALS */}
                <div className="footer__section">
                    <h3>{t('footer_socials_title')}</h3>

                    <Socials />
                </div>

                {/* SITEMAP */}
                <div className="footer__section">
                    <h3>{t('footer_sitemap_title')}</h3>

                    <Link className="footer__section__p" to="/dashboard">{t('footer_dashboard_anchor')}</Link>
                    <Link className="footer__section__p" to="/blog">{t('footer_blog_anchor')}</Link>
                    <Link className="footer__section__p" to="/driverStandings">{t('footer_standings_anchor')}</Link>
                    <Link className="footer__section__p" to="/grandprixs">{t('footer_gps_anchor')}</Link>
                    <Link className="footer__section__p" to="/login">{t('footer_login_anchor')}</Link>
                    <Link className="footer__section__p" to="/register">{t('footer_register_anchor')}</Link>
                </div>

                {/* CONDITIONS & TERMS */}
                <div className="footer__section">
                    <h3>{t('footer_terms_title')}</h3>

                    <Link className="footer__section__p" to="/privacy-policy">{t('footer_terms_anchor')}</Link>
                    <Link className="footer__section__p" to="/privacy-policy">{t('footer_privacy_anchor')}</Link>
                </div>

                <hr className="footer__line line" />

                <p className="footer__section__p copyright">{t('footer_copyright')}</p>
            </div>

            {/* FOOTER DESKTOP */}
            <div className="desktop">
                {/* LOGO + SCROLLUP */}
                <div className="top flex">
                    <img className="logoFooter" src="/images/logos/pole-position-logo-big-dark.svg" alt="logo Pole Position footer" />

                    <a className="button button-primary skew" href="#container">
                        <span>{t('footer_backtotop')} <i className="scrollup__icon fa fa-chevron-up first-chevron" aria-hidden="true"></i></span>
                    </a>
                </div>

                <div className="footer__sections flex">
                    {/* SITEMAP */}
                    <div className="footer__section">
                        <h3>{t('footer_sitemap_title')}</h3>

                        <Link className="footer__section__p" to="/dashboard">{t('footer_dashboard_anchor')}</Link>
                        <Link className="footer__section__p" to="/blog">{t('footer_blog_anchor')}</Link>
                        <Link className="footer__section__p" to="/driverStandings">{t('footer_standings_anchor')}</Link>
                        <Link className="footer__section__p" to="/grandprixs">{t('footer_gps_anchor')}</Link>
                        <Link className="footer__section__p" to="/login">{t('footer_login_anchor')}</Link>
                        <Link className="footer__section__p" to="/register">{t('footer_register_anchor')}</Link>
                    </div>

                    {/* HEADOFFICE */}
                    <div className="footer__section">
                        <h3>{t('footer_headoffice_title')}</h3>

                        <a href="https://goo.gl/maps/AReNJ66swuL1HsJY6" target="_blank">
                            <p className="footer__section__p">Bredestraat 1550</p>
                            <p className="footer__section__p">2650 Hemiksem</p>
                            <p className="footer__section__p">Antwerp, Belgium</p>
                        </a>
                    </div>

                    {/* CONTACT */}
                    <div className="footer__section">
                        <h3>{t('footer_contact_title')}</h3>

                        <a className="footer__section__p" href="tel:+32478692536">+32 478 69 25 36</a>
                        <a className="footer__section__p" href="mailto:info@poleposition.be">info@poleposition.be</a>
                    </div>

                    {/* CONDITIONS & TERMS */}
                    <div className="footer__section">
                        <h3>{t('footer_terms_title')}</h3>

                        <Link className="footer__section__p" to="/privacy-policy">{t('footer_terms_anchor')}</Link>
                        <Link className="footer__section__p" to="/privacy-policy">{t('footer_privacy_anchor')}</Link>
                    </div>
                </div>

                <hr className="footer__line line" />

                <div className="bottom flex">
                    <p className="footer__section__p copyright">{t('footer_copyright')}</p>
                    <Socials />
                </div>
            </div>
        </footer>
    );
}

export default Footer;