import React from 'react';
import './contact-styles.css';

const Contac = () => {
    return (
        <main className="ContainerContact">
            <section className="ContainerInfoContact">
                <article>
                    <div className="InfoContact">
                        <h2>Contact Us</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sed impedit ipsum obcaecati, iure a ipsam commodi nisi laborum molestiae, iusto quasi cum veniam maiores earum! Quam, dicta sapiente quod temporibus facere laboriosam ullam alias. Minus molestias eos exercitationem eaque est obcaecati vel facilis culpa ullam cum voluptatem, sed inventore!</p>
                    </div>
                    <div>
                        <form>
                            <div className="ContainerNamesContact">
                                <div>
                                    <p>First Name</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p>Last Name</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="ContainerInfoContact">
                                <div>
                                    <p>Email</p>
                                    <input type="email"/>
                                </div>
                                <div>
                                    <p>Subject</p>
                                    <input type="email"/>
                                </div>
                                <div>
                                    <p>Message</p>
                                    <textarea cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <button onClick={() => alert("Thank :3")}>Submit</button>
                        </form>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Contac;