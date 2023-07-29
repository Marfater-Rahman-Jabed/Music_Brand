import './HeroSection.css'
const HeroSection = () => {
    return (
        <div>
            <div className="md:h-[60vh] h-[65vh] lg:min-h-screen" style={{ backgroundImage: 'url("https://i.ibb.co/bLfZs9S/pexels-photo-2690323.jpg")', backgroundRepeat: 'no', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="bg-opacity-10"></div>
                <div className="">
                    <div className="">
                        <div className='lg:pt-32 md:pt-48 pt-44 lg:ps-10 ps-2'>
                            <h1 className="mb-2 lg:text-7xl md:text-7xl text-4xl font-serif  text-color-animation" >HIT SONGS,</h1>
                            <h1 className="mb-5 lg:text-9xl md:text-8xl text-5xl font-bold text-color-animation">HOT NEWS</h1>

                            <button className="btn bg-red-600 hover:bg-red-600 px-8 text-white mt-6">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="https://i.ibb.co/0MShrfb/images-q-tbn-ANd9-Gc-Smv-p-Do-W90rx-XHJAfa-FWywm-T585-Vam-Ddmg-IRnv-Szg-YJjy-Es-XRW.jpg" alt="" /> */}
        </div>
    );
};

export default HeroSection;