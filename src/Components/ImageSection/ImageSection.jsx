import { BsPlusCircle } from 'react-icons/bs';
// import Logosimage from '../../assets/islamicImageLogo.jpg'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
// import Logo from '../../assets/fire5.jpg'
const ImageSection = () => {
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
    const rackupimage = import.meta.env.VITE_RackUpImageKey
    const [uploadLoading, setUploadLoading] = useState(false)

    const { data: totalImages = [], refetch } = useQuery({
        queryKey: ["images"],
        queryFn: async () => {
            const res = await fetch(`https://music-brand-server.vercel.app/images`)
            const data = res.json();
            return data
        }
    })

    const handleUploadPhoto = (e) => {
        e.preventDefault()
        // console.log(imgId)
        setUploadLoading(true)
        const image = e.target.files[0]
        // console.log(imgId, image)
        const formData = new FormData();
        formData.append('image', image)
        // setThumbneilId(id)

        fetch(`https://api.imgbb.com/1/upload?key=${rackupimage}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                console.log(image)
                if (image.success) {
                    const imageHolder = {

                        img: image.data.url
                    }

                    fetch(`https://music-brand-server.vercel.app/UploadImages`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(imageHolder)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            setUploadLoading(false)
                            toast.promise(
                                resolveAfter3Sec,
                                {
                                    pending: 'Image Uploading',
                                    success: 'SuccessFully UpLoaded👌'
                                }
                            )
                            refetch(`https://music-brand-server.vercel.app/images`)
                        })
                }
            })


        // 

    }
    return (
        <div className='py-10  lg:px-16 md:px-6 px-2 text-white' >
            <Fade direction='up' duration={2000}>
                <div>
                    <h1 className="text-center font-bold lg:text-5xl text-4xl">Our Images</h1>
                    <p className="text-xl lg:px-60 px-2 lg:text-center text-justify mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
                </div>
            </Fade>
            <div className='flex lg:justify-end md:justify-end justify-center mt-10  '>
                {uploadLoading ? <span className="btn btn-md bg-green-700 px-6"> <p className='w-6 h-6 border-4 rounded-full animate-spin border-dashed mx-auto  border-white'> </p></span> : <span>
                    <input type="file" name="photo" id="takephoto" accept="image/*" className="invisible h-0 w-0" onChange={handleUploadPhoto} />
                    <label htmlFor="takephoto" className="btn btn-md bg-green-600 hover:bg-green-600 text-white hover:text-white" title="Upload Photos" ><BsPlusCircle className="text-xl"></BsPlusCircle>Upload Photos</label>
                </span>}
            </div>
            <div className='lg:flex md:flex gap-2 pt-8'>

                <div className='lg:w-1/2 md:w-1/2 lg:mb-0 md:mb-0 mb-2'>
                    {
                        totalImages?.slice(0, 1).map(image => <PhotoProvider key={image?._id}>
                            <PhotoView src={image?.img} >
                                <img src={image?.img} alt="" className='lg:h-[76vh] md:h-[42vh] w-full' />
                            </PhotoView>
                        </PhotoProvider>)
                    }


                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 lg:w-1/2 md:w-1/2'>
                    {
                        totalImages?.slice(1, 7).map(image => <PhotoProvider key={image?._id}>
                            <PhotoView src={image?.img} >
                                <img src={image?.img} alt="" className='h-40 w-full' />
                            </PhotoView>
                        </PhotoProvider>)
                    }
                </div>
            </div>
            <div className='flex lg:justify-end md:justify-end justify-center pt-10 pb-6'>

                <button className='btn btn-outline bg-green-600 hover:bg-green-600 text-white px-10'><Link to='/allPhotos'>See All Photos</Link></button>

            </div>
        </div>
    );
};

export default ImageSection;