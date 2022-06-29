import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';
import bannerImg from './article1.jpeg';

const Fade = require("react-reveal/Fade");

function PaymentPage() {
    useEffect(() => {
        //scroll to top on opening
        document.documentElement.scrollTo(0, 0);
    }, []);

    /* --- FORM FEEDBACK --- */
    //form
    const form = document.querySelector('.payment__form');

    //inputs
    const name = document.querySelector('.nameCardHolder') as HTMLInputElement;
    const cardNumber = document.querySelector('.creditCardNumber') as HTMLInputElement;
    const expiration = document.querySelector('.expiration') as HTMLInputElement;
    const cvv = document.querySelector('.cvv') as HTMLInputElement;

    if (form != null) {

        //If you really want to make the form work, change structure...
        form!.addEventListener('submit', (e) => {
            e.preventDefault();

            checkInputs();
        });
    }

    function checkInputs() {
        const nameValue = name.value.trim();
        const cardNumberValue = cardNumber.value.trim();
        const expirationValue = expiration.value.trim();
        const cvvValue = cvv.value.trim();

        //name input
        if (nameValue === '') {
            setErrorFor(name, 'Name can\'t be blank');
        } else {
            setSuccessFor(name);
        }

        //cardnumber input
        if (cardNumberValue === "") {
            setErrorFor(cardNumber, 'Cardnumber can\'t be blank');
        } else if (!isCardNumber(cardNumberValue)) {
            setErrorFor(cardNumber, 'Not a valid Mastercard number (no spaces)');
        } else {
            setSuccessFor(cardNumber);
        }

        //expiration input
        if (expirationValue === "") {
            setErrorFor(expiration, 'Expiration can\'t be blank');
        } else if (expirationValue.length != 5) {
            setErrorFor(expiration, 'Not a valid expiry date');
        }
        else {
            setSuccessFor(expiration);
        }

        //cvv input
        if (cvvValue === "") {
            setErrorFor(cvv, 'CVV can\'t be blank');
        } else if (cvvValue.length != 3) {
            setErrorFor(cvv, 'Not a valid cvv code')
        }
        else {
            setSuccessFor(cvv);
        }

        name.addEventListener('input', checkInputs);
        cardNumber.addEventListener('input', checkInputs);
        expiration.addEventListener('input', checkInputs);
        cvv.addEventListener('input', checkInputs);
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

    function isCardNumber(cardNumber: any) {
        return /^(?:5[1-5][0-9]{14})$/.test(cardNumber);
    }

    return (
        <FadeIn className="page-flex">
            <section className="payment formPage">
                <Helmet>
                    <title>Payment | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <Fade>
                    <div className="formPage__flexbox">
                        <div className="formPage__flexbox__content section">
                            <h2 className="title">Payment</h2>
                            <p className="p">Small cost, big value.</p>

                            <form className="payment__form custom-form" noValidate>

                                {/* TEXT INPUTS */}
                                <div className="form__inputs-container">

                                    {/* NAME INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="nameCardHolder" className="form__input input nameCardHolder" name="nameCardHolder" placeholder=" " />
                                            <label htmlFor="nameCardHolder" className="form__label">Name card holder</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* CARDNUMBER INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="creditCardNumber" className="form__input input creditCardNumber" name="creditCardNumber" placeholder=" " />
                                            <label htmlFor="creditCardNumber" className="form__label">Credit card number</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* EXPIRATION INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="expiration" className="form__input input expiration" name="expiration" placeholder=" " />
                                            <label htmlFor="expiration" className="form__label">Expiration</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>

                                    {/* CVV INPUT */}
                                    <div className="form-control-forms">
                                        <div className="form-group">
                                            <input type="text" id="cvv" className="form__input input cvv" name="cvv" placeholder=" " />
                                            <label htmlFor="cvv" className="form__label">CVV</label>

                                            {/* form feedback */}
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                            <small>Error message</small>
                                        </div>
                                    </div>
                                </div>

                                {/* SUBMIT BUTTON */}
                                <div className="flex">
                                    <Link to="/register" className="button button-secondary skew to-register-button"><span><i className="fa fa-chevron-left" aria-hidden="true"></i><i className="fa fa-chevron-left chevron-first" aria-hidden="true"></i> Personal info</span></Link>
                                    <button className="button button-primary skew" type="submit"><span>Continue <i className="fa fa-chevron-right first-chevron" aria-hidden="true"></i><i className="fa fa-chevron-right" aria-hidden="true"></i></span></button>
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

export default PaymentPage;