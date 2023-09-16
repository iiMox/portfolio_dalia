import "./ServiceBox.css";

const ServiceBox = ({ icon, title, desc }) => {
    return (
        <div className='service-box'>
            <img src={icon} alt='Icon' />
            <h3>{title}</h3>
            <div className='desc'>{desc}</div>
        </div>
    );
};

export default ServiceBox;
