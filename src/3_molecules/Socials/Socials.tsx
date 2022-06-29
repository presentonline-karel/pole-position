import React from 'react';

function Socials() {
    return (
        <div className="socials flex">
            <a className="socials__item icon-bg-xlg" href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>

            <a className="socials__item icon-bg-xlg" href="https://facebook.com/" target="_blank">
                <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>

            <a className="socials__item icon-bg-xlg" href="https://linkedin.com/" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>

            <a className="socials__item icon-bg-xlg" href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
        </div>
    );
}

export default Socials;