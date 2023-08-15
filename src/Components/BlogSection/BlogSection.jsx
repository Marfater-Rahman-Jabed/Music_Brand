import { Link } from 'react-router-dom';
import blogImage from '../../assets/islamicImageLogo.jpg'
const BlogSection = () => {
    return (
        <div className='py-10 bg-slate-400'>
            <div className=' pb-10'>
                <h1 className="text-center font-bold text-5xl">Our Article</h1>
                <p className="text-xl lg:px-60 px-4 text-center mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 px-4">
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={blogImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <span >
                            <h1 className="card-title text-xl font-bold">Story Of Islamic Revulation</h1>
                            <span className='flex pt-2'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
                                        <img src={blogImage} />
                                    </div>
                                </div>
                                <span className='ml-3 font-semibold'>
                                    <p>Autohor: Abdul Karim</p>
                                    <p>Published 2 mins ago</p>
                                </span>
                            </span>
                        </span>
                        <p className='text-justify'>If a dog chews shoes whose shoeschews shoes whose shoeschews shoes whose shoeschews shoesasdasdasd whose asdsdasddshoeschews shoes whose shoeschews shoes...</p><Link to='/blogDetails' className='text-primary underline text-xl'>see more</Link>

                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={blogImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <span >
                            <h1 className="card-title text-xl font-bold">Story Of Islamic Revulation</h1>
                            <span className='flex pt-2'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
                                        <img src={blogImage} />
                                    </div>
                                </div>
                                <span className='ml-3 font-semibold'>
                                    <p>Autohor: Abdul Karim</p>
                                    <p>Published 2 mins ago</p>
                                </span>
                            </span>
                        </span>
                        <p className='text-justify'>If a dog chews shoes whose shoeschews shoes whose shoeschews shoes whose shoeschews shoesasdasdasd whose asdsdasddshoeschews shoes whose shoeschews shoes... <a href="" className='text-primary underline text-xl'>see more</a> </p>

                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={blogImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <span >
                            <h1 className="card-title text-xl font-bold">Story Of Islamic Revulation</h1>
                            <span className='flex pt-2'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
                                        <img src={blogImage} />
                                    </div>
                                </div>
                                <span className='ml-3 font-semibold'>
                                    <p>Autohor: Abdul Karim</p>
                                    <p>Published 2 mins ago</p>
                                </span>
                            </span>
                        </span>
                        <p className='text-justify'>If a dog chews shoes whose shoeschews shoes whose shoeschews shoes whose shoeschews shoesasdasdasd whose asdsdasddshoeschews shoes whose shoeschews shoes... <a href="" className='text-primary underline text-xl'>see more</a> </p>

                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src={blogImage} alt="Shoes" /></figure>
                    <div className="card-body">
                        <span >
                            <h1 className="card-title text-xl font-bold">Story Of Islamic Revulation</h1>
                            <span className='flex pt-2'>
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
                                        <img src={blogImage} />
                                    </div>
                                </div>
                                <span className='ml-3 font-semibold'>
                                    <p>Autohor: Abdul Karim</p>
                                    <p>Published 2 mins ago</p>
                                </span>
                            </span>
                        </span>
                        <p className='text-justify'>If a dog chews shoes whose shoeschews shoes whose shoeschews shoes whose shoeschews shoesasdasdasd whose asdsdasddshoeschews shoes whose shoeschews shoes... <a href="" className='text-primary underline text-xl'>see more</a> </p>

                    </div>
                </div>


            </div>
            <div className='flex lg:justify-end md:justify-end justify-center mt-6 me-6'>
                <button className='btn bg-green-600 hover:bg-green-600 text-white'>SEE All Article</button>
            </div>
        </div>
    );
};

export default BlogSection;