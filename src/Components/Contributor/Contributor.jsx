import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
// import Logosimage from '../../assets/islamicImageLogo.jpg'
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';
// import Logo from '../../assets/fire5.jpg'
import actor1 from '../../assets/actor1.jpeg'
import actor2 from '../../assets/actor2.jpeg'
import actor3 from '../../assets/actor3.jpeg'
import actor4 from '../../assets/actor4.jpeg'

const Contributor = () => {
    const actors = [actor1, actor2, actor3, actor4]
    return (
        <div className='py-6 text-white' >
            <Fade direction='up' duration={2000}>
                <div>
                    <h1 className="text-center font-bold lg:text-5xl text-4xl">Our Contributor</h1>
                    <p className="text-xl lg:px-60 md:px-16 pb-4 px-2 lg:text-center text-justify mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
                </div>
            </Fade>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 text-white lg:px-10 md:px-5 px-1 pt-6'>

                {
                    actors.map((actor, i) => <div key={i} className="card w-full bg-slate-700 shadow-xl">
                        <PhotoProvider >
                            <PhotoView src={actor} >
                                <img src={actor} alt="" className='h-52 w-52  hover:w-full  mx-auto rounded-full hover:rounded-lg mt-6 hover:mt-6 hover:px-2 ' />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Abdullah Rashid</h2>
                            <p>Most Popular content writer in Bangladesh. Graduated from Dhaka University. </p>
                            <span className='flex gap-3'>
                                <HiOutlineMailOpen className='text-2xl'></HiOutlineMailOpen>
                                <BsWhatsapp className='text-2xl'></BsWhatsapp>
                                <AiFillGithub className='text-2xl'></AiFillGithub>
                                <AiFillYoutube className='text-3xl'></AiFillYoutube>
                            </span>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Contributor;