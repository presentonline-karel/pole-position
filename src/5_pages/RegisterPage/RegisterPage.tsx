import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import bannerImg from './article1.jpeg';

const Fade = require("react-reveal/Fade");

function RegisterPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    /* --- FORM FEEDBACK --- */
    //form
    const form = document.querySelector('.register__form');

    //inputs
    const firstName = document.querySelector('.firstName') as HTMLInputElement;
    const lastName = document.querySelector('.lastName') as HTMLInputElement;
    const salutation = document.querySelector('.salutation') as HTMLInputElement;
    const birthDate = document.querySelector('.birthDate') as HTMLInputElement;
    const country = document.querySelector('.country') as HTMLInputElement;

    const email = document.querySelector('.email') as HTMLInputElement;
    const password = document.querySelector('.password') as HTMLInputElement;

    if (form != null) {
        //If you really want to make the form work, change structure...
        form!.addEventListener('submit', (e) => {
            e.preventDefault();

            console.log("submitted");

            checkInputs();
        });
    }

    function checkInputs() {
        console.log("function");

        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const salutationValue = salutation.value.trim();
        const birthDateValue = birthDate.value.trim();
        const countryValue = country.value.trim();

        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        //firstname input
        if (firstNameValue === "") {
            setErrorFor(firstName, 'First name can\'t be blank');
        } else {
            setSuccessFor(firstName);
        }

        //lastname input
        if (lastNameValue === "") {
            setErrorFor(lastName, 'Last name can\'t be blank');
        } else {
            setSuccessFor(lastName);
        }

        //salutation input
        if (salutationValue === "") {
            setErrorFor(salutation, 'Salutation can\'t be blank');
        } else {
            setSuccessFor(salutation);
        }

        //birthdate input
        if (birthDateValue === "") {
            setErrorFor(birthDate, 'Birthdate can\'t be blank');
        } else {
            setSuccessFor(birthDate);
        }

        //country
        if (countryValue === "") {
            setErrorFor(country, 'Country can\'t be blank');
        } else {
            setSuccessFor(country);
        }

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
            setErrorFor(password, 'Password should be at min 8 characters');
        } else {
            setSuccessFor(password);
        }

        firstName.addEventListener('input', checkInputs);
        lastName.addEventListener('input', checkInputs);
        salutation.addEventListener('input', checkInputs);
        birthDate.addEventListener('input', checkInputs);
        country.addEventListener('input', checkInputs);

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
            <section className="register formPage">
                <Helmet>
                    <title>Register | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <div className="formPage__flexbox">
                        <div className="formPage__flexbox__content section">
                            <h2 className="title">Register</h2>
                            <p className="p">To make a Pole Position account.</p>

                            <form className="register__form custom-form" noValidate>

                                {/* TEXT INPUTS */}
                                <div className="form__inputs-container">

                                    {/* FIRST NAME INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="firstName" className="form__input input firstName" name="firstName" placeholder=" " />
                                            <label htmlFor="firstName" className="form__label">First name</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* LAST NAME INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="lastName" className="form__input input" name="lastName" placeholder=" " />
                                            <label htmlFor="lastName" className="form__label">Last name</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* SALUTATION INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="salutation" className="form__input input salutation" name="salutation" placeholder=" " />
                                            <label htmlFor="salutation" className="form__label">Salutation</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* BIRTHDATE INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="date" id="birthDate" className="form__input input birthDate" name="birthDate" placeholder=" " />
                                            <label htmlFor="birthDate" className="form__label">Birthdate</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* COUNTRY INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="country" className="form__input input country" name="country" placeholder=" " />
                                            <label htmlFor="country" className="form__label">Country</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    <hr className="form__line line" />

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

                                {/* NEWSLETTER CHECKBOX */}
                                <div className="register__form__checkbox flex">
                                    <label className="input-container">
                                        <input id="newsletterCheckbox" className="newsletterCheckbox input" type="checkbox" name="newsletterCheckbox" value="newsletterCheckbox" required />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="pizza-label checkbox-label" htmlFor="newsletterCheckbox">Sign up for the Pole Position newsletter</label>
                                </div>

                                {/* PRIVACY + TERMS & CONDITIONS */}
                                <p className="privacy-policy-agree p">
                                    By clicking on register you agree to the <Link className="custom-form__no-acc__link" to="/privacy-policy">terms, conditions & privacy policy</Link>
                                </p>

                                {/* SUBMIT BUTTON */}
                                <Link to="/payment" className="button button-primary skew"><span>Payment <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></Link>

                                <hr className="line" />

                                <div className="to-register flex">
                                    <p className="to-register__p p">You have an account?</p>
                                    <Link to="/login" className="button button-primary skew" type="submit"><span>Login <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></Link>
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

export default RegisterPage;