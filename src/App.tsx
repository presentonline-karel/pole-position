// Core React
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Multilanguage
import { useTranslation } from "react-i18next";
import i18n from "i18next";

// Components
import Navbar from './4_organisms/NavBar/NavBar';
import Footer from './4_organisms/Footer/Footer';

// Pages
import HomePage from './5_pages/HomePage/HomePage';
import DashboardPage from './5_pages/DashboardPage/DashboardPage';
import GrandPrixsPage from './5_pages/GrandPrixsPage/GrandPrixsPage';
import GrandPrixDetailPage from './5_pages/GrandPrixDetailPage/GrandPrixDetailPage';
import DriverPage from './5_pages/DriverPage/DriverPage';
import TeamPage from './5_pages/TeamPage/TeamPage';
import BlogPage from './5_pages/BlogPage/BlogPage';
import PrivacyPolicyPage from './5_pages/PrivacyPolicyPage/PrivacyPolicyPage';
import LoginPage from './5_pages/LoginPage/LoginPage';
import RegisterPage from './5_pages/RegisterPage/RegisterPage';
import PaymentPage from './5_pages/PaymentPage/PaymentPage';
import NotFoundPage from './5_pages/NotFoundPage/NotFoundPage';
import TestPage from './5_pages/TestPage/TestPage';
import AccountPage from './5_pages/AccountPage/AccountPage';
import DriverStandingsPage from './5_pages/DriverStandingsPage/DriverStandingsPage';
import TeamStandingsPage from './5_pages/TeamStandingsPage/TeamStandingsPage';
import DetailPage from './5_pages/DetailPage/DetailPage';

// Global styles
import './style.scss';

//types
import { ArticleItem, DriverItem, GrandPrixItem, TeamItem } from './types';

import languages from "./languages";

// Multilanguage cookies
const cookies = require('js-cookie');

function App() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);

        //change title of tab
        document.title = "Pole Positon - F1 Blog";
    }, []);

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find(element => element.code === currentLanguageCode)

    const { t } = useTranslation()

    const releaseDate = new Date('2021-03-07')
    const timeDifference = new Date().valueOf() - releaseDate.valueOf()
    const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    useEffect(() => {
        document.body.dir = currentLanguage!.dir || 'ltr';
        document.title = t('app_title');
        localStorage.setItem("lang", currentLanguageCode); // save lang to local strorage
        document.documentElement.setAttribute("lang", currentLanguageCode);
    }, [currentLanguage, t])



    // Light/dark theme - KEEP THIS CODE
    let theme = localStorage.getItem('data-theme');



    const changeThemeToDark = () => {
        document.documentElement.setAttribute("data-theme", "dark") // set theme to dark
        localStorage.setItem("data-theme", "dark") // save theme to local storage
        theme = "dark";
    }

    const changeThemeToLight = () => {
        document.documentElement.setAttribute("data-theme", "light") // set theme light
        localStorage.setItem("data-theme", 'light') // save theme to local storage
        theme = "light";
    }



    if (localStorage.getItem('data-theme') == '' || localStorage.getItem('data-theme') == null) {
        let darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

        if (darkThemeMq.matches == true) {
            changeThemeToDark()
        } else {
            changeThemeToLight()
        }
    }
    else {
        document.documentElement.setAttribute("data-theme", localStorage.getItem('data-theme')!);
    }
    //const [checked, setChecked] = useState(false); */



    // "dynamic" articles -> just for showcase
    let articles: ArticleItem[] = [
        {
            id: 0,
            date: "Januari 13 2022 - 10:15",
            image: "/images/articles/webp/max-verstappen-red-bull.webp",
            fallbackImage: "/images/articles/jpg/max-verstappen-red-bull.jpg",
            altText: "Max Verstappen on track",
            mainTag: "Red Bull",
            mainTagColor: "redBull",
            mainTagBackgroundColor: "redBull-bg",
            minutesRead: 8,
            title: "Possible advantage for Red Bull in the second half of the season",
            intro: "Helmut Marko has confirmed that Red Bull Racing's RB18 is roughly ten kilos of 'overweight', but expects the team to be there within a few weeks",
            subtitleFirst: "Marko warns Red Bull for second competitor this season",
            paragraphFirst: "Marko states that at the start of the season he doubted whether Mercedes was actually short of speed. The Red Bull adviser has repeatedly experienced in recent years that the Germans withheld performance, so that he did not immediately take the problems with the team seriously. After two disappointing races, Charles Leclerc also has something to make up for, but according to Klien, Red Bull is in better shape for the next two races. He emphasizes that the Monegask had better pace in Spain and Monaco, but that Red Bull had an edge in terms of strategy and tire degradation. Now there are Baku and Montreal, two high-speed tracks, where I see Red Bull in the lead, he explains.",
            imageSecond: "/images/articles/webp/sergio-perez-red-bull.webp",
            fallbackImageSecond: "/images/articles/jpg/sergio-perez-red-bull.jpg",
            altTextSecond: "Max Verstappen & Sergio during rainy Monaco GP",
            subtitleSecond: "Should Verstappen fear his teammate?",
            paragraphSecond: "Klien indicates to ServusTV that Verstappen was 'clearly the fastest man' in Baku last year and that he is keen to get revenge. Sergio Perez made up for the damage for his teammate and won the race, but according to the Austrian, Verstappen should have been the actual winner. The Monaco Grand Prix turned out better for Perez than for Verstappen, who was looking for the right balance all weekend. However, Klien does not believe that Perez can actually give his teammate a hard time in the championship. “Max maybe just lacked that little bit of confidence in the car. This is a setup story that will be resolved with the development of the car.",
            publisher: "Karel Decoene"
        },
        {
            id: 1,
            date: "February 13 2022 - 12:15",
            image: "/images/articles/webp/charles-leclerc-ferrari.webp",
            fallbackImage: "/images/articles/jpg/charles-leclerc-ferrari.jpg",
            altText: "Charles Leclerq in conversation with technician",
            mainTag: "Ferrari",
            mainTagColor: "ferrari",
            mainTagBackgroundColor: "ferrari-bg",
            minutesRead: 8,
            title: "Ferrari hugely disappointed after last weekend in Monaco.",
            intro: "Yes, Charles Leclerc made it to the chequered flag at Monaco for the first time in his Formula 1 career. But that was scant consolation, after the home hero pole-sitter fell to P4 by the chequered flag ",
            subtitleFirst: "“It was a freaking disaster today”",
            paragraphFirst: "fumed Leclerc, who had pulled a 5s lead over Sainz in the early stages of the race. “The win was clearly in our hands: we had the performance, we had everything. I just don’t really understand the call that I had and I need explanations for now. “I couldn’t do much, I was called just before the last corner, so I couldn’t react or ask for any information, but that was clearly the wrong choice… We need to get better.”",
            imageSecond: "/images/articles/webp/charles-leclerc-ferrari-2.webp",
            fallbackImageSecond: "/images/articles/jpg/charles-leclerc-ferrari-2.jpg",
            altTextSecond: "Charles Leclerq doing a pit stop",
            subtitleSecond: "Leclerc finishing behind Verstappen saw the Dutchman increase his title lead ",
            paragraphSecond: "But with Sainz then brought in for dry hard tyres three laps later, Leclerc was initially called in as well – only to then be told to stay out. But that call came too late, Leclerc’s total time in the pits four seconds longer than his team mate's as Ferrari double-stacked the pair, which saw him fall to P4 behind eventual winner Sergio Perez, Sainz and the second Red Bull of title rival Max Verstappen.",
            publisher: "Karel Decoene"
        },
        {
            id: 2,
            date: "February 13 2022 - 12:15",
            image: "/images/articles/webp/daniel-ricciardo-mclaren.webp",
            fallbackImage: "/images/articles/jpg/daniel-ricciardo-mclaren.jpg",
            altText: "Daniel Ricciardo walking on Monaco track",
            mainTag: "McLaren",
            mainTagColor: "mclaren",
            mainTagBackgroundColor: "mclaren-bg",
            minutesRead: 9,
            title: "McLaren may say goodbye to Ricciardo before the end of the season",
            intro: "Daniel Ricciardo may have won the 2018 Monaco Grand Prix, but the McLaren driver couldn't deliver any Monte Carlo magic on Sunday, finishing 13th…",
            subtitleFirst: "Obviously, a tough weekend to take, unfortunately I’m experienced with these",
            paragraphFirst: "A crash in FP2 (below) meant Ricciardo began the weekend on the back foot and he went on to qualify 14th and finish 13th. This season the Australian has struggled in comparison to team mate Lando Norris – now standing 37 points behind the Briton – and is looking to \"reset\" ahead of the Azerbaijan Grand Prix. \"Obviously, a tough weekend to take, unfortunately I’m experienced with these – had a few of them the last 12 months, so I feel like I can handle them a little bit better,\" said Ricciardo.",
            imageSecond: "/images/articles/webp/daniel-ricciardo-mclaren-2.webp",
            fallbackImageSecond: "/images/articles/jpg/daniel-ricciardo-mclaren-2.jpg",
            altTextSecond: "Daniel Ricciardos car after Monaco FP3 crash",
            subtitleSecond: "I will continue to smile or at least try to smile",
            paragraphSecond: "After a run of points scores at Monaco from 2014-19, the Honey Badger has finished outside the top 10 for McLaren in 2021 and 2022. He explained why this year's Monaco Grand Prix didn't go quite as well as past iterations. \"It’s tough. I mean, no mistake, Monaco you need confidence. You need to be at one with the car; for sure if you’re not quite there it can show on the stopwatch. So as much as I love this place, at the core, that’s what you need.",
            publisher: "Karel Decoene"
        }
    ]

    // "dynamic" drivers -> just for showcase
    let drivers: DriverItem[] = [
        {
            id: 0,
            image: "./images/drivers/max-verstappen.webp",
            raceNumber: 1,
            points: 125,
            wins: 4,
            team: "redBull",
            teamLogo: "./images/teams/red-bull.webp",
            firstName: "Max",
            lastName: "Verstappen",
            age: 24,
            experience: 8,
            worldChampionships: 1,
            fastestLaps: 2,
            polePositions: 1,
            nationality: "Dutch",
            countryFlag: "flag",
            twitter: "https://twitter.com/max33verstappen",
            facebook: "https://www.facebook.com/MaxVerstappen",
            instagram: "https://www.instagram.com/maxverstappen1/"
        },
        {
            id: 1,
            image: "./images/drivers/charles-leclerc.webp",
            raceNumber: 16,
            points: 116,
            wins: 2,
            team: "ferrari",
            teamLogo: "./images/teams/ferrari.webp",
            firstName: "Charles",
            lastName: "Leclerq",
            age: 24,
            experience: 5,
            worldChampionships: 0,
            fastestLaps: 3,
            polePositions: 6,
            nationality: "Monegasque",
            countryFlag: "flag",
            twitter: "https://twitter.com/charles_leclerc",
            facebook: "https://www.facebook.com/CharlesLeclercOfficiel",
            instagram: "https://www.instagram.com/charles_leclerc/"
        },
        {
            id: 2,
            image: "./images/drivers/sergio-perez.webp",
            raceNumber: 11,
            points: 110,
            wins: 1,
            team: "redBull",
            teamLogo: "./images/teams/red-bull.webp",
            firstName: "Sergio",
            lastName: "Perez",
            age: 32,
            experience: 12,
            worldChampionships: 0,
            fastestLaps: 1,
            polePositions: 1,
            nationality: "Mexican",
            countryFlag: "flag",
            twitter: "https://twitter.com/schecoperez",
            facebook: "https://www.facebook.com/sergioperezf1",
            instagram: "https://www.instagram.com/schecoperez/"
        },
        {
            id: 3,
            image: "./images/drivers/george-russel.webp",
            raceNumber: 63,
            points: 84,
            wins: 0,
            team: "mercedes",
            teamLogo: "./images/teams/mercedes.webp",
            firstName: "George",
            lastName: "Russel",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 0,
            polePositions: 0,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 4,
            image: "./images/drivers/carlos-sainz.webp",
            raceNumber: 55,
            points: 83,
            wins: 0,
            team: "ferrari",
            teamLogo: "./images/teams/ferrari.webp",
            firstName: "Carlos",
            lastName: "Sainz",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 0,
            polePositions: 0,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 5,
            image: "./images/drivers/lewis-hamilton.webp",
            raceNumber: 44,
            points: 50,
            wins: 0,
            team: "mercedes",
            teamLogo: "./images/teams/mercedes.webp",
            firstName: "Lewis",
            lastName: "Hamilton",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 6,
            image: "./images/drivers/lando-norris.webp",
            raceNumber: 4,
            points: 48,
            wins: 0,
            team: "mclaren",
            teamLogo: "./images/teams/mclaren.webp",
            firstName: "Lando",
            lastName: "Norris",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 7,
            image: "./images/drivers/valtteri-bottas.webp",
            raceNumber: 77,
            points: 40,
            wins: 0,
            team: "alfaRomeo",
            teamLogo: "./images/teams/alfa-romeo.webp",
            firstName: "Valtteri",
            lastName: "Bottas",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 8,
            image: "./images/drivers/esteban-ocon.webp",
            raceNumber: 31,
            points: 30,
            wins: 0,
            team: "alpine",
            teamLogo: "./images/teams/alpine.webp",
            firstName: "Esteban",
            lastName: "Ocon",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 9,
            image: "./images/drivers/kevin-magnussen.webp",
            raceNumber: 20,
            points: 15,
            wins: 0,
            team: "haas",
            teamLogo: "./images/teams/haas.webp",
            firstName: "Kevin",
            lastName: "Magnussen",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 10,
            image: "./images/drivers/daniel-ricciardo.webp",
            raceNumber: 3,
            points: 11,
            wins: 0,
            team: "mclaren",
            teamLogo: "./images/teams/mclaren.webp",
            firstName: "Daniel",
            lastName: "Ricciardo",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 11,
            image: "./images/drivers/yuki-tsunoda.webp",
            raceNumber: 22,
            points: 11,
            wins: 0,
            team: "alphaTauri",
            teamLogo: "./images/teams/alpha-tauri.webp",
            firstName: "Yuki",
            lastName: "Tsunoda",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 12,
            image: "./images/drivers/fernando-alonso.webp",
            raceNumber: 14,
            points: 10,
            wins: 0,
            team: "alpine",
            teamLogo: "./images/teams/alpine.webp",
            firstName: "Fernando",
            lastName: "Alonso",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 13,
            image: "./images/drivers/pierre-gasly.webp",
            raceNumber: 10,
            points: 6,
            wins: 0,
            team: "alphaTauri",
            teamLogo: "./images/teams/alpha-tauri.webp",
            firstName: "Pierre",
            lastName: "Gasly",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 14,
            image: "./images/drivers/sebastian-vettel.webp",
            raceNumber: 5,
            points: 5,
            wins: 0,
            team: "astonMartin",
            teamLogo: "./images/teams/aston-martin.webp",
            firstName: "Sebastian",
            lastName: "Vettel",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 15,
            image: "./images/drivers/alexander-albon.webp",
            raceNumber: 23,
            points: 3,
            wins: 0,
            team: "williams",
            teamLogo: "./images/teams/williams.webp",
            firstName: "Alexander",
            lastName: "Albon",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 16,
            image: "./images/drivers/lance-stroll.webp",
            raceNumber: 18,
            points: 2,
            wins: 0,
            team: "astonMartin",
            teamLogo: "./images/teams/aston-martin.webp",
            firstName: "Lance",
            lastName: "Stroll",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 17,
            image: "./images/drivers/guanyu-zhou.webp",
            raceNumber: 24,
            points: 1,
            wins: 0,
            team: "alfaRomeo",
            teamLogo: "./images/teams/alfa-romeo.webp",
            firstName: "Guanyu",
            lastName: "Zhou",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 18,
            image: "./images/drivers/mick-schumacher.webp",
            raceNumber: 47,
            points: 0,
            wins: 0,
            team: "haas",
            teamLogo: "./images/teams/haas.webp",
            firstName: "Mick",
            lastName: "Schumacher",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 19,
            image: "./images/drivers/nicholas-latifi.webp",
            raceNumber: 6,
            points: 0,
            wins: 0,
            team: "williams",
            teamLogo: "./images/teams/williams.webp",
            firstName: "Nicholas",
            lastName: "Latifi",
            age: 24,
            experience: 4,
            worldChampionships: 0,
            fastestLaps: 7,
            polePositions: 1,
            nationality: "GB",
            countryFlag: "flag",
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        }
    ]

    // "dynamic" teams -> just for showcase
    let teams: TeamItem[] = [
        {
            id: 0,
            team: "redBull",
            teamName: "Red Bull",
            teamLogo: "./images/teams/red-bull.webp",
            points: 235,
            wins: 5,
            podiums: 225,
            firstDriver: "./images/drivers/max-verstappen.webp",
            firstDriverName: "Max Verstappen",
            secondDriver: "./images/drivers/sergio-perez.webp",
            secondDriverName: "Sergio Perez",
            originCountry: "Austria",
            firstEntry: 2005,
            worldChampionships: 4,
            fastestLaps: 3,
            polePositions: 2,
            twitter: "https://twitter.com/redbullracing",
            facebook: "https://www.facebook.com/redbullracing/",
            instagram: "https://www.instagram.com/redbullracing/"
        },
        {
            id: 1,
            team: "ferrari",
            teamName: "Ferrari",
            teamLogo: "./images/teams/ferrari.webp",
            points: 199,
            wins: 2,
            podiums: 768,
            firstDriver: "./images/drivers/charles-leclerc.webp",
            firstDriverName: "Charles Leclerc",
            secondDriver: "./images/drivers/carlos-sainz.webp",
            secondDriverName: "Carlos Sainz",
            originCountry: "Italy",
            firstEntry: 1950,
            worldChampionships: 16,
            fastestLaps: 3,
            polePositions: 5,
            twitter: "https://twitter.com/scuderiaferrari",
            facebook: "https://www.facebook.com/ScuderiaFerrari/",
            instagram: "https://www.instagram.com/scuderiaferrari/"
        },
        {
            id: 2,
            team: "mercedes",
            teamName: "Mercedes",
            teamLogo: "./images/teams/mercedes.webp",
            points: 134,
            wins: 0,
            podiums: 336,
            firstDriver: "./images/drivers/lewis-hamilton.webp",
            firstDriverName: "Lewis Hamilton",
            secondDriver: "./images/drivers/george-russel.webp",
            secondDriverName: "George Russel",
            originCountry: "Germany",
            firstEntry: 1954,
            worldChampionships: 8,
            fastestLaps: 0,
            polePositions: 0,
            twitter: "https://twitter.com/mercedesamgf1",
            facebook: "https://www.facebook.com/MercedesAMGF1/",
            instagram: "https://www.instagram.com/mercedesamgf1/"
        },
        {
            id: 3,
            team: "mclaren",
            teamName: "McLaren",
            teamLogo: "./images/teams/mclaren.webp",
            points: 59,
            wins: 0,
            podiums: 526,
            firstDriver: "./images/drivers/lando-norris.webp",
            firstDriverName: "Lando Norris",
            secondDriver: "./images/drivers/daniel-ricciardo.webp",
            secondDriverName: "Daniel Ricciardo",
            originCountry: "United Kingdom",
            firstEntry: 1966,
            worldChampionships: 8,
            fastestLaps: 1,
            polePositions: 0,
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 4,
            team: "alfaRomeo",
            teamName: "Alfa Romeo",
            teamLogo: "./images/teams/alfa-romeo.webp",
            points: 41,
            wins: 0,
            podiums: 30,
            firstDriver: "./images/drivers/valtteri-bottas.webp",
            firstDriverName: "Valtteri Bottas",
            secondDriver: "./images/drivers/guanyu-zhou.webp",
            secondDriverName: "Guanyu Zhou",
            originCountry: "Switzerland",
            firstEntry: 1950,
            worldChampionships: 0,
            fastestLaps: 0,
            polePositions: 0,
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 5,
            team: "alpine",
            teamName: "Alpine",
            teamLogo: "./images/teams/alpine.webp",
            points: 40,
            wins: 0,
            podiums: 2,
            firstDriver: "./images/drivers/esteban-ocon.webp",
            firstDriverName: "Esteban Ocon",
            secondDriver: "./images/drivers/fernando-alonso.webp",
            secondDriverName: "Fernando Alonso",
            originCountry: "France",
            firstEntry: 2021,
            worldChampionships: 0,
            fastestLaps: 0,
            polePositions: 0,
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 6,
            team: "alphaTauri",
            teamName: "AlphaTauri",
            teamLogo: "./images/teams/alpha-tauri.webp",
            points: 17,
            wins: 0,
            podiums: 2,
            firstDriver: "./images/drivers/pierre-gasly.webp",
            firstDriverName: "Pierre Gasly",
            secondDriver: "./images/drivers/yuki-tsunoda.webp",
            secondDriverName: "Yuki Tsunoda",
            originCountry: "Italy",
            firstEntry: 2020,
            worldChampionships: 0,
            fastestLaps: 0,
            polePositions: 0,
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 7,
            team: "haas",
            teamName: "Haas",
            teamLogo: "./images/teams/haas.webp",
            points: 15,
            wins: 0,
            podiums: 0,
            firstDriver: "./images/drivers/kevin-magnussen.webp",
            firstDriverName: "Kevin Magnussen",
            secondDriver: "./images/drivers/mick-schumacher.webp",
            secondDriverName: "Mick Schumacher",
            originCountry: "United States",
            firstEntry: 2016,
            worldChampionships: 0,
            fastestLaps: 0,
            polePositions: 0,
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 8,
            team: "astonMartin",
            teamName: "Aston Martin",
            teamLogo: "./images/teams/aston-martin.webp",
            points: 7,
            wins: 0,
            podiums: 1,
            firstDriver: "./images/drivers/sebastian-vettel.webp",
            firstDriverName: "Sebastian Vettel",
            secondDriver: "./images/drivers/lance-stroll.webp",
            secondDriverName: "Lance Stroll",
            originCountry: "United Kingdom",
            firstEntry: 1959,
            worldChampionships: 0,
            fastestLaps: 0,
            polePositions: 0,
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        },
        {
            id: 9,
            team: "williams",
            teamName: "Williams",
            teamLogo: "./images/teams/williams.webp",
            points: 3,
            wins: 0,
            podiums: 341,
            firstDriver: "./images/drivers/alexander-albon.webp",
            firstDriverName: "Alexander Albon",
            secondDriver: "./images/drivers/nicholas-latifi.webp",
            secondDriverName: "Nicholas Latifi",
            originCountry: "United Kingdom",
            firstEntry: 1975,
            worldChampionships: 9,
            fastestLaps: 0,
            polePositions: 0,
            twitter: "https://twitter.com",
            facebook: "https://www.facebook.com",
            instagram: "https://www.instagram.com"
        }
    ]

    // "dynamic" grand prixs -> just for showcase
    let grandPrixs: GrandPrixItem[] = [
        {
            id: 0,
            circuitImage: "./images/grandPrixs/spain.webp",
            circuitName: "Circuit de Barcelona-Catalunya",
            headerImage: "./images/grandPrixs/backgrounds/spain.webp",
            country: "Spain",
            flag: "./images/flags/spain.webp",
            gpWeekend: "20 - 22 MAY",
            gpDate: "22 may",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        },
        {
            id: 1,
            circuitImage: "./images/grandPrixs/monaco.webp",
            circuitName: "Circuit de Monaco",
            headerImage: "./images/grandPrixs/backgrounds/monaco.webp",
            country: "Monaco",
            flag: "./images/flags/monaco.webp",
            gpWeekend: "27 - 29 MAY",
            gpDate: "29 may",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        },
        {
            id: 2,
            circuitImage: "./images/grandPrixs/great-britain.webp",
            circuitName: "Silverstone Circuit",
            headerImage: "./images/grandPrixs/backgrounds/great-britain.webp",
            country: "Great Britain",
            flag: "./images/flags/great-britain.webp",
            gpWeekend: "01 - 03 JUL",
            gpDate: "03 jul",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        },
        {
            id: 3,
            circuitImage: "./images/grandPrixs/belgium.webp",
            circuitName: "Circuit de Spa-Francorchamps",
            headerImage: "./images/grandPrixs/backgrounds/belgium.webp",
            country: "Belgium",
            flag: "./images/flags/belgium.webp",
            gpWeekend: "26 - 28 AUG",
            gpDate: "28 aug",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        },
        {
            id: 4,
            circuitImage: "./images/grandPrixs/netherlands.webp",
            circuitName: "Circuit Zandvoort",
            headerImage: "./images/grandPrixs/backgrounds/netherlands.webp",
            country: "Netherlands",
            flag: "./images/flags/netherlands.webp",
            gpWeekend: "02 - 04 SEP",
            gpDate: "04 sep",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        },
        {
            id: 5,
            circuitImage: "./images/grandPrixs/italy.webp",
            circuitName: "Autodromo Nazionale Monza",
            headerImage: "./images/grandPrixs/backgrounds/italy.webp",
            country: "Italy",
            flag: "./images/flags/italy.webp",
            gpWeekend: "09 - 11 SEP",
            gpDate: "11 sep",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        },
        {
            id: 6,
            circuitImage: "./images/grandPrixs/japan.webp",
            circuitName: "Suzuka International Racing Course",
            headerImage: "./images/grandPrixs/backgrounds/japan.webp",
            country: "Japan",
            flag: "./images/flags/japan.webp",
            gpWeekend: "07 - 09 OCT",
            gpDate: "09 oct",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        },
        {
            id: 7,
            circuitImage: "./images/grandPrixs/brazil.webp",
            circuitName: "Autódromo José Carlos Pace",
            headerImage: "./images/grandPrixs/backgrounds/brazil.webp",
            country: "Brazil",
            flag: "./images/flags/brazil.webp",
            gpWeekend: "11 - 13 NOV",
            gpDate: "13 nov",
            gpHour: "12:30",
            timeUntilGP: "2 days, 8 hours"
        }
    ]



    return (
        <Router>
            <div id="container" className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<DashboardPage articles={articles} />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/grandprixs" element={<GrandPrixsPage grandPrixs={grandPrixs} />} />
                    <Route path="/grandprix-detail/:id" element={<GrandPrixDetailPage articles={articles} grandPrixs={grandPrixs} />} />
                    <Route path="/driverStandings" element={<DriverStandingsPage drivers={drivers} />} />
                    <Route path="/teamStandings" element={<TeamStandingsPage teams={teams} />} />
                    <Route path="/driver/:id" element={<DriverPage articles={articles} drivers={drivers} />} />
                    <Route path="/team/:id" element={<TeamPage articles={articles} teams={teams} />} />

                    <Route path="/blog" element={<BlogPage articles={articles} />} />
                    <Route path="/detail/:id" element={<DetailPage articles={articles} />} />

                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/payment" element={<PaymentPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}

export default App;