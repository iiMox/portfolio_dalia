import "./ContactField.css";

const ContactField = ({ label, type, onChange }) => {
    return (
        <div className='contact-field'>
            <label>{label}</label>
            {type !== "message" ? (
                <input
                    type={type}
                    onChange={(e) => onChange(e.target.value, label)}
                />
            ) : (
                <textarea
                    onChange={(e) => onChange(e.target.value, label)}
                ></textarea>
            )}
        </div>
    );
};

export default ContactField;
