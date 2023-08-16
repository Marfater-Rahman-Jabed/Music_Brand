import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Logosimage from '../../assets/islamicImageLogo.jpg'
import { HiOutlineMailOpen } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
const Contributor = () => {
    return (
        <div className='py-10 bg-slate-400'>
            <div>
                <h1 className="text-center font-bold lg:text-5xl text-4xl">Our Contributor</h1>
                <p className="text-xl lg:px-60 px-2 lg:text-center text-justify mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 text-white lg:px-10 md:px-5 px-1 pt-6'>


                <div className="card w-full bg-black shadow-xl">
                    <PhotoProvider >
                        <PhotoView src={Logosimage} >
                            <img src={Logosimage} alt="" className='h-52 w-52  hover:w-full  mx-auto rounded-full hover:rounded-lg mt-6 hover:mt-6 hover:px-2 ' />
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
                </div>
                <div className="card w-full bg-black shadow-xl">
                    <PhotoProvider >
                        <PhotoView src={Logosimage} >
                            <img src={Logosimage} alt="" className='h-52 w-52  hover:w-full  mx-auto rounded-full hover:rounded-lg mt-6 hover:mt-6 hover:px-2 ' />
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
                </div>
                <div className="card w-full bg-black shadow-xl">
                    <PhotoProvider >
                        <PhotoView src={Logosimage} >
                            <img src={Logosimage} alt="" className='h-52 w-52  hover:w-full  mx-auto rounded-full hover:rounded-lg mt-6 hover:mt-6 hover:px-2 ' />
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
                </div>
                <div className="card w-full bg-black shadow-xl">
                    <PhotoProvider >
                        <PhotoView src={Logosimage} >
                            <img src={Logosimage} alt="" className='h-52 w-52  hover:w-full  mx-auto rounded-full hover:rounded-lg mt-6 hover:mt-6 hover:px-2 ' />
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
                </div>
            </div>
        </div>
    );
};

export default Contributor;