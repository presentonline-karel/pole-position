import React, { useEffect } from 'react';
import { i18n, t } from "i18next";
import { useTranslation } from "react-i18next";

// Multilanguage cookies
const cookies = require('js-cookie');

const languages = [
    {
        code: 'fr',
        name: 'Français',
        country_code: 'fr'
    },
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
        dir: 'empty'
    },
]



//not needed now
function Benefit() {
    const { t } = useTranslation()
    
    return (
        <div className="benefit">
            <div className="icon-bg-lg">
                <i className="fa fa-users" aria-hidden="true"></i>
            </div>

            <h4 className="benefit__title">title</h4>

            <p className="benefit__p">paragraph</p>
        </div>
    );
}

export default Benefit;