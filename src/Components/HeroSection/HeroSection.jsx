import './HeroSection.css'
import Logo from '../../assets/islamicImageLogo.jpg'
import { Fade } from 'react-awesome-reveal';
const HeroSection = () => {
    return (
        <div>
            <div className="md:h-[60vh] h-[65vh] lg:min-h-screen" style={{ backgroundImage: `url(${Logo})`, backgroundRepeat: 'no', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-opacity-10"></div>
                <div className="">
                    <div className="">
                        <div className='lg:pt-32 md:pt-48 pt-24 lg:ps-10 ps-2'>
                            <Fade direction='up' duration={2000}>
                                <h1 className="mb-2 lg:text-7xl md:text-7xl text-4xl  font-semibold  text-color-animation" >PERSONAL SITE,</h1>
                                <h1 className="mb-5 lg:text-8xl md:text-7xl text-5xl font-bold text-color-animation">GREAT NEWS</h1>
                            </Fade>
                            <Fade direction='up' duration={2000}>
                                <p className='lg:w-1/2 w-2/3 text-justify font-semibold text-color-animation pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi eveniet expedita quae quas soluta eaque dicta obcaecati tempora! Culpa natus fuga nemo provident dicta doloremque consectetur itaque quisquam sed!</p>
                            </Fade>
                            {/* <button className="btn  px-8  mt-6 bg-green-400"><span className='text-color-animation font-bold'>Contact Us</span></button> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="https://i.ibb.co/0MShrfb/images-q-tbn-ANd9-Gc-Smv-p-Do-W90rx-XHJAfa-FWywm-T585-Vam-Ddmg-IRnv-Szg-YJjy-Es-XRW.jpg" alt="" /> */}
        </div>
    );
};

export default HeroSection;