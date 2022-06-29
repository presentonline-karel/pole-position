import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import FadeIn from 'react-fade-in';

import Navbar from '../../4_organisms/NavBar/NavBar';

function PrivacyPolicyPage() {
    useEffect(() => { document.documentElement.scrollTo(0, 0); }, []);

    return (
        <FadeIn className="page-flex">
            <section className="privacyPolicy">
                <Helmet>
                    <title>Privacy policy | Pole Positon - F1 Blog</title>
                </Helmet>

                <Navbar />

                <div className="privacyPolicy__content">
                    <h2 className="privacyPolicy__title section__title">Privacy Policy</h2>

                    <p className="privacyPolicy__p">
                        In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.<br /><br />

                        Virginia, heeft één van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt.<br /><br />

                        Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, "Lorem ipsum dolor sit amet..", komt uit een zin in sectie 1.10.32.
                    </p>

                    <h4 className="privacyPolicy__subtitle">Subtitle the first</h4>

                    <p className="privacyPolicy__p">
                        In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.<br /><br />

                        Virginia, heeft één van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt.<br /><br />

                        Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, "Lorem ipsum dolor sit amet..", komt uit een zin in sectie 1.10.32.
                    </p>

                    <h4 className="privacyPolicy__subtitle">Subtitle the first</h4>

                    <p className="privacyPolicy__p">
                        In tegenstelling tot wat algemeen aangenomen wordt is Lorem Ipsum niet zomaar willekeurige tekst. het heeft zijn wortels in een stuk klassieke latijnse literatuur uit 45 v.Chr. en is dus meer dan 2000 jaar oud. Richard McClintock, een professor latijn aan de Hampden-Sydney College in.<br /><br />

                        Virginia, heeft één van de meer obscure latijnse woorden, consectetur, uit een Lorem Ipsum passage opgezocht, en heeft tijdens het zoeken naar het woord in de klassieke literatuur de onverdachte bron ontdekt.<br /><br />

                        Lorem Ipsum komt uit de secties 1.10.32 en 1.10.33 van "de Finibus Bonorum et Malorum" (De uitersten van goed en kwaad) door Cicero, geschreven in 45 v.Chr. Dit boek is een verhandeling over de theorie der ethiek, erg populair tijdens de renaissance. De eerste regel van Lorem Ipsum, "Lorem ipsum dolor sit amet..", komt uit een zin in sectie 1.10.32.
                    </p>
                </div>
            </section>
        </FadeIn>
    );
}

export default PrivacyPolicyPage;