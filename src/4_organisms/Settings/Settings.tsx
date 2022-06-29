import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function Settings() {
    return (
        <section className="settings section">

            {/* SETTINGS */}
            <div className="settings__group settings-account">
                <div className="settings__header">
                    <h2 className="settings__header__title">Account</h2>
                    <p className="settings__header__subtitle">Account details</p>
                </div>

                <div className="settings__item item-grey">
                    <div className="flex">
                        <div className="settings__item__content">
                            <p className="settings__item__content__title">Full Name</p>
                            <p className="settings__item__content__value">Karel Decoene</p>
                        </div>

                        <a className="icon-bg-lg"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="settings__item">
                    <div className="flex">
                        <div className="settings__item__content">
                            <p className="settings__item__content__title">Email</p>
                            <p className="settings__item__content__value">karel.decoene@hotmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="settings__item item-grey">
                    <div className="flex">
                        <div className="settings__item__content">
                            <p className="settings__item__content__title">Password</p>
                            <p className="settings__item__content__value">oooooooo</p>
                        </div>

                        <a className="icon-bg-lg"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="settings__item">
                    <div className="flex">
                        <div className="settings__item__content">
                            <p className="settings__item__content__title">Subscription date</p>
                            <p className="settings__item__content__value">14 march, 2022</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* FAVORITE DRIVER & TEAM */}
            <div className="settings__group settings-account">
                <div className="settings__header">
                    <h2 className="settings__header__title">Fav team & driver</h2>
                    <p className="settings__header__subtitle">Personal settings</p>
                </div>

                <div className="settings__item item-grey">
                    <div className="flex">
                        <div className="settings__item__content">
                            <p className="settings__item__content__title">Favorite driver</p>
                            <p className="settings__item__content__value">Max Verstappen</p>
                        </div>

                        <a className="icon-bg-lg"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="settings__item">
                    <div className="flex">
                        <div className="settings__item__content">
                            <p className="settings__item__content__title">Favorite team</p>
                            <p className="settings__item__content__value">Ferrari</p>
                        </div>

                        <a className="icon-bg-lg"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="settings__item item-grey">
                    <div className="flex">
                        <div className="settings__item__content">
                            <p className="settings__item__content__title">Langauge</p>
                            <p className="settings__item__content__value">ENG</p>
                        </div>

                        <a className="icon-bg-lg"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Settings;