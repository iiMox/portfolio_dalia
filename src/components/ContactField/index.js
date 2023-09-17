import "./ContactField.css";

const ContactField = ({ label, type, pattern }) => {
    return (
        <div className='contact-field'>
            <label>{label}</label>
            {type !== "message" ? <input type={type} /> : <textarea></textarea>}
        </div>
    );
};

export default ContactField;
