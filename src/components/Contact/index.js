import { useState } from "react";
import axios from "axios";
import moment from "moment";
import Section from "../Section";
import ContactField from "../ContactField";

import "./Contact.css";

const Contact = () => {
    const [message, setMessage] = useState({
        "First name": "",
        "Last name": "",
        Email: "",
        Phone: "",
        Message: "",
        Date: moment().format("DD/MM/YYYY"),
    });

    const onChange = (value, prop) => {
        const temp = { ...message };
        temp[prop] = value;
        setMessage({ ...temp });
    };

    const onSubmit = () => {
        try {
            const req = axios.post(
                "https://sheet.best/api/sheets/ba837ecb-34b8-4a35-afb5-5d1ef2acb269",
                message
            );
            setMessage({
                "First name": "",
                "Last name": "",
                Email: "",
                Phone: "",
                Message: "",
            });
        } catch (error) {
            console.log(error);
        }
    };

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
                                        label='First name'
                                        type='text'
                                        onChange={onChange}
                                    />
                                    <ContactField
                                        label='Last name'
                                        type='text'
                                        onChange={onChange}
                                    />
                                </div>
                                <ContactField
                                    label='Email'
                                    type='email'
                                    onChange={onChange}
                                />
                                <ContactField
                                    label='Phone'
                                    type='tel'
                                    onChange={onChange}
                                />
                                <ContactField
                                    label='Message'
                                    type='message'
                                    onChange={onChange}
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSubmit();
                                    }}
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </>
                }
            />
        </div>
    );
};

export default Contact;
