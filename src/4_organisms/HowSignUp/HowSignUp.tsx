import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function HowSignUp() {
    const { t } = useTranslation()

    return (
        <section className="howsignup section">
            <h2 className="howsignup__title section__title">{t('signup_title')}</h2>

            <p className="howsignup__p">{t('signup_p')}</p>

            <div className="howsignup__steps">
                <div className="step">
                    <h3 className="step__title">{t('signup_step1_title')}</h3>
                    <p className="step__p">{t('signup_step1_p')}</p>

                    <div className="step__number">1</div>
                </div>

                <div className="step">
                    <h3 className="step__title">{t('signup_step2_title')}</h3>
                    <p className="step__p">{t('signup_step2_p')}</p>

                    <div className="step__number">2</div>
                </div>

                <div className="step">
                    <h3 className="step__title">{t('signup_step3_title')}</h3>
                    <p className="step__p">{t('signup_step3_p')}</p>

                    <div className="step__number">3</div>
                </div>

                <div className="step">
                    <h3 className="step__title">{t('signup_step4_title')}</h3>
                    <p className="step__p">{t('signup_step4_p')}</p>

                    <div className="step__number">4</div>
                </div>
            </div>

            <div className="center">
                <Link className="button button-primary skew" to="/register">
                    <span>{t('signup_cta_button')} <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                </Link>
            </div>
        </section>
    );
}

export default HowSignUp;