import React from 'react';
import './footer-style.css';

const FooterApp = () => {
    return (
        <footer>
            <section className="ContainerFooter">
                <article>
                    <p>Sign up to receive news and updates.</p>
                </article>
                <article>
                    <input type="email" placeholder="Email Address" />
                    <button><strong>Sing Up</strong></button>
                </article>
                <article>
                    <p>Made by <a href="https://portafolio-manu.netlify.app/" target="_blank">Manuel Fonseca</a></p>
                </article>
            </section>
        </footer>
    );
};

export default FooterApp;