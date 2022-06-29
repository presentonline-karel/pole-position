import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import bannerImg from './max-verstappen-red-bull.jpeg';

const Fade = require("react-reveal/Fade");

function LoginPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    /* --- FORM FEEDBACK --- */
    //form
    const form = document.querySelector('.login__form');

    //inputs
    const email = document.querySelector('.email') as HTMLInputElement;
    const password = document.querySelector('.password') as HTMLInputElement;

    if (form != null) {

        //If you really want to make the form work, change structure...
        form!.addEventListener('submit', (e) => {
            e.preventDefault();

            checkInputs();
        });
    }

    function checkInputs() {
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        //email input
        if (emailValue === "") {
            setErrorFor(email, 'Email can\'t be blank');
        } else if (!isEmail(emailValue)) {
            setErrorFor(email, 'Email is not valid');
        } else {
            setSuccessFor(email);
        }

        //password input
        if (passwordValue === "") {
            setErrorFor(password, 'Password can\'t be blank')
        } else if (passwordValue.length < 8) {
            setErrorFor(password, 'Password is incorrect (min 8 characters)');
        } else {
            setSuccessFor(password);
        }

        email.addEventListener('input', checkInputs);
        password.addEventListener('input', checkInputs);
    }

    //Function sets error for certain input
    function setErrorFor(input: { parentElement: any; }, message: any) {
        const formGroup = input.parentElement; //form-group
        const small = formGroup.querySelector('small');

        if (small != null) {
            small.innerText = message;
        }

        formGroup.className = 'form-group error';
    }

    //Function sets success for certain input
    function setSuccessFor(input: { parentElement: any; }) {
        const formGroup = input.parentElement;
        formGroup.className = 'form-group success';
    }

    //Function to check if value is mail
    function isEmail(email: string) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    return (
        <FadeIn className="page-flex">
            <section className="login formPage">
                <Helmet>
                    <title>Login | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <div className="formPage__flexbox">

                        {/* FORMPAGE CONTENT */}
                        <div className="formPage__flexbox__content section">
                            <h2 className="title">Login</h2>
                            <p className="p">Please enter your email and password.</p>

                            <form className="login__form custom-form" noValidate>

                                {/* TEXT INPUTS */}
                                <div className="form__inputs-container">

                                    {/* EMAIL INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="email" className="form__input input email" name="email" placeholder=" " />
                                            <label htmlFor="email" className="form__label">Email</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* PASSWORD INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input id="password" className="form__input input password" type="password" name="password" placeholder=" " />
                                            <label htmlFor="password" className="form__label">Password</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>
                                </div>

                                <p className="custom-form__disclaimer">
                                    By login you agree to <span className="custom-form__disclaimer__link">terms & conditions</span>
                                </p>

                                <div className="flex">
                                    <button className="button button-primary skew" type="submit"><span>Login <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></button>
                                    <a className="custom-form__forgot-pw p" href="#">Forgot password?</a>
                                </div>

                                <hr className="login__line line" />

                                <div className="to-register flex">
                                    <p className="to-register__p p">No account yet?</p>
                                    <Link to="/register" className="button button-primary skew" type="submit"><span>Register <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></Link>
                                </div>
                            </form>
                        </div>

                        {/* IMAGE */}
                        <picture>
                            <source srcSet="/images/articles/webp/max-verstappen-red-bull.webp" type="image/webp" />
                            <source srcSet="/images/articles/jpg/max-verstappen-red-bull.jpg" type="image/jpg" />
                            <img className="formPage__flexbox__img" src="/images/articles/jpg/max-verstappen-red-bull.jpg" alt="Max Verstappen on track" />
                        </picture>
                    </div>
                </Fade>
            </section>
        </FadeIn>
    );
}

export default LoginPage;