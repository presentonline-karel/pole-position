import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import PlatformItem from '../../3_molecules/PlatformItem/PlatformItem';

function Platform() {
    const { t } = useTranslation()

    return (
        <section id="platform" className="platform section">
            <div className="flex-desktop">
                <div className="platform__heading">
                    <h2 className="platform__title section__title">{t('platform_title')}</h2>
                    <p className="desktop">
                        {t('platform_introduction')}
                    </p>
                </div>

                <div className="platform__items ">
                    <div className="platform-item">
                        <h4 className="platform-item__title">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            {t('platform_item1_title')}
                        </h4>

                        <p className="platform-item__p">
                            {t('platform_item1_p')}
                        </p>
                    </div>

                    <div className="platform-item">
                        <h4 className="platform-item__title">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            {t('platform_item2_title')}
                        </h4>

                        <p className="platform-item__p">
                            {t('platform_item2_p')}
                        </p>
                    </div>

                    <div className="platform-item">
                        <h4 className="platform-item__title">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            {t('platform_item3_title')}
                        </h4>

                        <p className="platform-item__p">
                            {t('platform_item3_p')}
                        </p>
                    </div>

                    <div className="platform-item">
                        <h4 className="platform-item__title">
                            <i className="fa fa-check" aria-hidden="true"></i>
                            {t('platform_item4_title')}
                        </h4>

                        <p className="platform-item__p">
                            {t('platform_item4_p')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="signup flex-desktop">
                <div className="signup__content">
                    <h3 className="signup__content__title">{t('platform_cta_title')}</h3>
                    <p className="signup__content__p">{t('platform_cta_p')}</p>
                </div>

                <Link className="button button-primary skew" to="/register">
                    <span>{t('platform_cta_button')} <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span>
                </Link>
            </div>
        </section>
    );
}

export default Platform;