import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';

interface SubnavProps {
    setSelected: Function,
    selected: string
}

function SubNav({ selected, setSelected }: SubnavProps) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Saved blogposts', 'Favorite driver', 'Favorite team', 'Account'];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}>{selected} <i className="fa fa-chevron-down" aria-hidden="true"></i></div>

            {/* SUBNAV DASHBOARD - MOBILE */}
            {isActive && (
                <div className="dropdown-content mobile">
                    <NavLink to="/dashboard" onClick={(e) => {
                        setSelected(options[0])
                        setIsActive(false)
                    }} className="dropdown-item">Saved Blogposts</NavLink>

                    <NavLink to="/driver" onClick={(e) => {
                        setSelected(options[1])
                        setIsActive(false)
                    }} className="dropdown-item">Favorite driver</NavLink>

                    <NavLink to="/team" onClick={(e) => {
                        setSelected(options[2])
                        setIsActive(false)
                    }} className="dropdown-item">Favorite team</NavLink>

                    <NavLink to="/account" onClick={(e) => {
                        setSelected(options[3])
                        setIsActive(false)
                    }} className="dropdown-item">Account</NavLink>
                </div>
            )}

            {/* SUBNAV DASHBOARD - DESKTOP */}
            <div className="dropdown-content-desktop desktop flex-between">
                <div className="dropdown-content-desktop__links flex">
                    <NavLink to="/dashboard" onClick={(e) => {
                        setSelected(options[0])
                        setIsActive(false)
                    }} className="dropdown-item button skew"><span>Saved Blogposts</span></NavLink>

                    <NavLink to="/driver" onClick={(e) => {
                        setSelected(options[1])
                        setIsActive(false)
                    }} className="dropdown-item button skew"><span>Favorite driver</span></NavLink>

                    <NavLink to="/team" onClick={(e) => {
                        setSelected(options[2])
                        setIsActive(false)
                    }} className="dropdown-item button skew"><span>Favorite team</span></NavLink>

                    <NavLink to="/account" onClick={(e) => {
                        setSelected(options[3])
                        setIsActive(false)
                    }} className="dropdown-item button skew"><span>Account</span></NavLink>
                </div>

                <Link to="/" className="signout-button button skew"><span><i className="chevron-first fa fa-sign-out" aria-hidden="true"></i> Sign out</span></Link>
            </div>

            {/* SUBNAV STANDINGS - MOBILE */}
            {isActive && (
                <div className="dropdown-content mobile standings-subnav">
                    <NavLink to="/driverStandings" onClick={(e) => {
                        setSelected(options[0])
                        setIsActive(false)
                    }} className="dropdown-item">Drivers</NavLink>

                    <NavLink to="/teamStandings" onClick={(e) => {
                        setSelected(options[1])
                        setIsActive(false)
                    }} className="dropdown-item">Teams</NavLink>
                </div>
            )}

            {/* SUBNAV STANDINGS - DESKTOP */}
            <div className="dropdown-content-desktop desktop standings-subnav">
                <NavLink to="/driverStandings" onClick={(e) => {
                    setSelected(options[0])
                    setIsActive(false)
                }} className="dropdown-item button skew"><span>Drivers</span></NavLink>

                <NavLink to="/teamStandings" onClick={(e) => {
                    setSelected(options[1])
                    setIsActive(false)
                }} className="dropdown-item button skew"><span>Teams</span></NavLink>
            </div>
        </div>
    );
}

export default SubNav;