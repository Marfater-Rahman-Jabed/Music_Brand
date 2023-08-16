import Logosimage from '../../assets/islamicImageLogo.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ImageSection = () => {
    return (
        <div className='py-10 bg-fuchsia-400 lg:px-16 md:px-6 px-2'>
            <div>
                <h1 className="text-center font-bold lg:text-5xl text-4xl">Our Images</h1>
                <p className="text-xl lg:px-60 px-2 lg:text-center text-justify mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
            </div>
            <div className='lg:flex md:flex gap-2 pt-8'>
                <div className='lg:w-1/2 md:w-1/2 lg:mb-0 md:mb-0 mb-2'>
                    <PhotoProvider >
                        <PhotoView src={Logosimage} >
                            <img src={Logosimage} alt="" className='h-full' />
                        </PhotoView>
                    </PhotoProvider>

                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 lg:w-1/2 md:w-1/2'>
                    <PhotoProvider>
                        <PhotoView src={Logosimage}>
                            <img src={Logosimage} alt="" className='h-full' />
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={Logosimage}>
                            <img src={Logosimage} alt="" className='h-full' />
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={Logosimage}>
                            <img src={Logosimage} alt="" className='h-full' />
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={Logosimage}>
                            <img src={Logosimage} alt="" className='h-full' />
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={Logosimage}>
                            <img src={Logosimage} alt="" className='h-full' />
                        </PhotoView>
                    </PhotoProvider>
                    <PhotoProvider>
                        <PhotoView src={Logosimage}>
                            <img src={Logosimage} alt="" className='h-full' />
                        </PhotoView>
                    </PhotoProvider>
                </div>
            </div>
            <div className='flex lg:justify-end md:justify-end justify-center pt-10 pb-6'>

                <button className='btn btn-outline bg-green-600 hover:bg-green-600 text-white px-16'>See All Photos</button>

            </div>
        </div>
    );
};

export default ImageSection;