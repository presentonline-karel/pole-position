import React, { useEffect } from 'react';

import { useTranslation } from "react-i18next";

function LatestNewsArticle() {
    const { t } = useTranslation()
    
    return (
        <div className="latestnews__articles__article">
            <h4>{t('latest_news_article')}</h4>
        </div>
    );
}

export default LatestNewsArticle;