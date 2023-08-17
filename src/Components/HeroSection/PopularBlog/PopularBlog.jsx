import { AiFillEye } from 'react-icons/ai';
import imgLogo from '../../../assets/islamicImageLogo.jpg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
const PopularBlog = () => {
    const [populars, setPopulars] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularblogs')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setPopulars(data)
            })
    }, [])
    return (
        <div className="py-10 bg-fuchsia-300">
            <Fade direction='up' duration={2000}>
                <div>
                    <h1 className="text-center font-bold lg:text-5xl text-4xl">Top 5 Popular Blog</h1>
                    <p className="text-xl lg:px-60 px-4 text-center mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
                </div>
            </Fade>
            <div className='pt-10 lg:px-28'>
                {
                    populars?.slice(0, 5).map(popular => <Fade key={popular?._id} direction='up' duration={2000}>
                        <div className="lg:px-10 px-2">
                            <div className="flex justify-between bg-slate-700 text-white rounded-lg">
                                <div className="p-4 lg:w-80 w-44">
                                    <h1 className='lg:text-2xl font-bold'>{popular?.title}</h1>
                                    <h1 className=' lg:font-serif font-thin'>
                                        {
                                            popular?.time?.slice(0, 14) === new Date().toString().slice(0, 14) ? <p className='text-green-500 animate-pulse'>Published : {popular?.time?.slice(8, 10)}{popular?.time?.slice(3, 7)}{popular?.time?.slice(10, 15)}</p> : <p>Published : {popular?.time?.slice(8, 10)}{popular?.time?.slice(3, 7)}{popular?.time?.slice(10, 15)}</p>
                                        }
                                    </h1>
                                </div>
                                <div className="p-4 flex justify-center lg:items-center md:items-center lg:w-72 w-56">
                                    <img src={imgLogo} alt="" className='w-12 h-12 rounded-full mr-2' />
                                    <div >
                                        <h1 className='lg:text-xl font-bold'> Abdullah Rashid</h1>
                                        <h1 className='flex items-center gap-1'><AiFillEye className='text-xl'></AiFillEye><span>{popular?.view} views</span></h1>
                                    </div>
                                </div>
                                <div className="p-4 lg:w-60 w-4 flex justify-end  lg:pe-16 md:pe-10">
                                    <button><Link to={`/blogDetails/${popular?._id}`} className='underline'>View</Link></button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </Fade>)
                }

            </div>

        </div>
    );
};

export default PopularBlog;