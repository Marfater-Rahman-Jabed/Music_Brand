import { Link } from 'react-router-dom';
import blogImage from '../../assets/islamicImageLogo.jpg'
import { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
// import Logo from '../../assets/fire5.jpg'
const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://music-brand-server.vercel.app/allblogs')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogs(data)
            })
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        // speed: 7000,

        autoplaySpeed: 4000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                }
            }
        ]
    };
    // console.log(blogs.length)
    return (
        <div className='py-10 ' >

            <Fade direction='up' duration={2000}>
                <div className=' pb-10 text-white'>
                    <h1 className="text-center font-bold text-5xl">Our Article</h1>
                    <p className="text-xl lg:px-60 px-4 text-center mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
                </div>
            </Fade>
            <div className='  lg:px-6 md:px-6 px-6'>

                <Slider {...settings} >

                    {
                        blogs?.map(blog => <div key={blog?._id} className="card card-compact  mx-4   shadow-xl md:ml-2 ml-2 w-96">
                            <div className=' mx-2  '>
                                <figure><img src={blog.img} alt="Shoes" className='h-44 w-full rounded-t-lg' /></figure>
                            </div>
                            <div className="card-body lg:h-64 h-72 bg-slate-300 mx-2 rounded-b-lg">
                                <span >
                                    <h1 className="card-title text-xl font-bold ">{blog?.title}</h1>
                                    <span className='flex justify-between  pt-2 pb-2  px-2'>
                                        <div className='flex'>
                                            <div className="avatar">
                                                <div className="w-10 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
                                                    <img src={blogImage} />
                                                </div>
                                            </div>
                                            <span className='ml-3 font-semibold'>
                                                <p>Autohor: Abdul Karim</p>
                                                {
                                                    blog?.time?.slice(0, 14) === new Date().toString().slice(0, 14) ? <p className='text-green-500 animate-pulse'>Published : {blog?.time?.slice(8, 10)}{blog?.time?.slice(3, 7)}{blog?.time?.slice(10, 15)}</p> : <p>Published : {blog?.time?.slice(8, 10)}{blog?.time?.slice(3, 7)}{blog?.time?.slice(10, 15)}</p>
                                                }
                                            </span>
                                        </div>
                                        <span className='flex items-center '>
                                            <AiFillEye className='text-xl'></AiFillEye><h1 className='font-bold'>{blog.view}</h1>
                                        </span>
                                    </span>
                                </span>
                                <p className='text-justify '>{blog?.description?.slice(0, 250)}...<Link to={`/blogDetails/${blog?._id}`} className='text-primary hover:underline text-xl '>see more</Link></p>

                            </div>
                        </div>)
                    }





                </Slider>


            </div>
            <div className='flex lg:justify-end md:justify-end justify-center mt-6 me-8'>
                <button className='btn bg-green-600 hover:bg-green-600 text-white'><Link to='/allArticles'>SEE All Article</Link></button>
            </div>
        </div>
    );
};

export default BlogSection;