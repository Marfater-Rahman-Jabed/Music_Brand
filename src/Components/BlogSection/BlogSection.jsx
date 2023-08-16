import { Link } from 'react-router-dom';
import blogImage from '../../assets/islamicImageLogo.jpg'
import { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
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
        <div className='py-10 bg-slate-400'>
            <div className=' pb-10'>
                <h1 className="text-center font-bold text-5xl">Our Article</h1>
                <p className="text-xl lg:px-60 px-4 text-center mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 px-4">
                {
                    blogs?.slice(0, 4)?.map(blog => <div key={blog?._id} className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img src={blog.img} alt="Shoes" className='h-48 w-full' /></figure>
                        <div className="card-body">
                            <span >
                                <h1 className="card-title text-xl font-bold">{blog?.title}</h1>
                                <span className='flex justify-between  pt-2 pb-2'>
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
                            <p className='text-justify'>{blog?.description?.slice(0, 250)}...<Link to={`/blogDetails/${blog?._id}`} className='text-primary underline text-xl '>see more</Link></p>

                        </div>
                    </div>)
                }




            </div>
            <div className='flex lg:justify-end md:justify-end justify-center mt-6 me-6'>
                <button className='btn bg-green-600 hover:bg-green-600 text-white'>SEE All Article</button>
            </div>
        </div>
    );
};

export default BlogSection;