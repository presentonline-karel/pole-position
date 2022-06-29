import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

//import './index.scss';
import App from './App';
import LoadingScreen from './4_organisms/LoadingScreen/LoadingScreen';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'fr'],

        fallbackLng: "en",
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: 'assets/locales/{{lng}}/translation.json', //change to Laravel API later
        },
    });

/* show during loading */
const loadingMarkup = (
    <LoadingScreen />
)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>
);

reportWebVitals();