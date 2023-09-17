import upIcon from "../../assets/up_icon.png";
import fiverrIcon from "../../assets/fiverr_icon.png";
import instaIcon from "../../assets/insta_icon.png";
import linkedinIcon from "../../assets/linkedin_icon.png";
import gmailIcon from "../../assets/gmail_icon.png";

import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className='bg'></div>
            <div className='container'>
                <div className='social'>
                    <div
                        className='up-button'
                        onClick={() => {
                            window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        <img src={upIcon} alt='Up Icon' />
                    </div>
                    <a href='https://fiverr.com' target='_blank'>
                        <img src={fiverrIcon} alt='Fiverr' />
                    </a>
                    <a
                        href='https://instagram.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={instaIcon} alt='Instagram' />
                    </a>
                    <a
                        href='https://linkedin.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={linkedinIcon} alt='Linkedin' />
                    </a>
                    <a
                        href='https://gmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <img src={gmailIcon} alt='Gmail' />
                    </a>
                </div>
                <hr />
                <p>Copyright © 2023 Dalia YAICI</p>
            </div>
        </footer>
    );
};

export default Footer;
