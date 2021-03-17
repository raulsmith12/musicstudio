import React from 'react';
import ContactForm from "./components/Form";
import Footer from './components/Footer';

export default function Page(props) {
    const { page } = props;
    let contactForm;
    if (page.slug === 'contact-us') {
        contactForm = <ContactForm />
    }
    return (
        <div className="page">
            <div className="img-center">
                <img src={"https://galacticblue.net/musicstudio/img/logo.png"} width={"25%"} alt={"Grey Dragon Studios"} />
            </div>
            <div className="page-container">
                <h1 className="page-title">{page.title.rendered}</h1>
                <div className="text-white" dangerouslySetInnerHTML={{ __html: page.content.rendered }}/>
                {contactForm}
            </div>
            <Footer />
        </div>
    )
}
