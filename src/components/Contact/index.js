import Section from "../Section";
import ContactField from "../ContactField";

import "./Contact.css";

const Contact = () => {
    return (
        <div className='contact-section'>
            <Section
                title="Let's talk"
                content={
                    <>
                        <div className='container'>
                            <form>
                                <div className='box'>
                                    <ContactField
                                        label='First Name'
                                        type='text'
                                    />
                                    <ContactField
                                        label='Last Name'
                                        type='text'
                                    />
                                </div>
                                <ContactField label='Email' type='email' />
                                <ContactField label='Phone' type='tel' />
                                <ContactField label='Message' type='message' />
                                <button>Send</button>
                            </form>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default Contact;
