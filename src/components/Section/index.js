import "./Section.css";

const Section = ({ title, content }) => {
    return (
        <div className='section'>
            <h2>{title}</h2>
            <div className='content'>{content}</div>
        </div>
    );
};

export default Section;
