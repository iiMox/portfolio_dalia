import "./Welcome.css";
import portrait from "../../assets/portrait.png";

const Welcome = () => {
    /* useEffect(() => {
        document.querySelector(".home .hero-section").style.height =
            window.innerHeight -
            document.querySelector(".home .navbar").offsetHeight +
            "px";

        window.addEventListener("resize", () => {
            document.querySelector(".home .hero-section").style.height =
                window.innerHeight -
                document.querySelector(".home .navbar").offsetHeight +
                "px";
        });
    }, []); */

    return (
        <div className='hero-section'>
            <div className='container'>
                <div className='picture'>
                    <img src={portrait} alt='Portrait' />
                </div>
                <div className='text'>
                    Welcome!
                    <br /> You Just Landed Into My
                    <br /> Website, <span>Where Design is Sustainable.</span>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
