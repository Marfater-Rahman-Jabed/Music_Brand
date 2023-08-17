import { Link } from 'react-router-dom';
import blogImage from '../../assets/islamicImageLogo.jpg'
import { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';
const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allblogs')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBlogs(data)
            })
    }, [])
    // console.log(blogs.length)
    return (
        <div className='py-10 bg-fuchsia-100'>

            <Fade direction='up' duration={2000}>
                <div className=' pb-10'>
                    <h1 className="text-center font-bold text-5xl">Our Article</h1>
                    <p className="text-xl lg:px-60 px-4 text-center mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
                </div>
            </Fade>
            <div className='lg:flex  lg:px-6 md:px-4 px-2'>
                <div className='lg:w-1/2 lg:mb-0 mb-4 px-2'>
                    {
                        blogs?.slice(0, 1)?.map(blog => <div key={blog?._id} className="card card-compact  bg-slate-100 shadow-xl">
                            <figure><img src={blog.img} alt="Shoes" className='h-80 w-full' /></figure>
                            <div className="card-body">
                                <span >
                                    <h1 className="card-title text-3xl font-bold pt-4">{blog?.title}</h1>
                                    <span className='flex justify-between  pt-3 pb-2 lg:px-7 px-2'>
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
                                            <AiFillEye className='text-3xl'></AiFillEye><h1 className='font-bold text-xl ml-1'>{blog.view}</h1>
                                        </span>
                                    </span>
                                </span>
                                <p className='text-justify pt-3  font-semibold text-xl'>{blog?.description?.slice(0, 400)}...<Link to={`/blogDetails/${blog?._id}`} className='text-primary underline text-xl '>see more</Link></p>

                            </div>
                        </div>)
                    }
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 px-4 lg:w-1/2">
                    {
                        blogs?.slice(1, 5)?.map(blog => <div key={blog?._id} className="card card-compact  bg-slate-100  shadow-xl">
                            <figure><img src={blog.img} alt="Shoes" className='h-32 w-full' /></figure>
                            <div className="card-body">
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
                                <p className='text-justify'>{blog?.description?.slice(0, 100)}...<Link to={`/blogDetails/${blog?._id}`} className='text-primary hover:underline text-xl '>see more</Link></p>

                            </div>
                        </div>)
                    }




                </div>
            </div>

            <div className='flex lg:justify-end md:justify-end justify-center mt-6 me-8'>
                <button className='btn bg-green-600 hover:bg-green-600 text-white'><Link to='/allArticles'>SEE All Article</Link></button>
            </div>
        </div>
    );
};

export default BlogSection;