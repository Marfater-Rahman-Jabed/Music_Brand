import { toast } from 'react-toastify';
import { useState } from 'react';
import logo from '../../assets/islamicImageLogo.jpg'
import { useQuery } from '@tanstack/react-query';
import { AiFillDelete } from 'react-icons/ai';
const UpcommingBlog = () => {
    const month = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
    const [crossVAlue, setCrossVAlue] = useState(false)
    const { data: AllUpCommingBlogs = [], refetch } = useQuery({
        queryKey: ["upcommigBlogs"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/allUpcommigBlogs`)
            const data = res.json();
            return data
        }
    })
    const handleTitle = (e) => {
        // console.log(crossVAlue, e.target.title.value, thumbneilId)
        // e.preventDefault()

        const form = e.target
        const title = form.blogName.value;
        const bloger = form.blogerName.value;
        const releaseDate = form.releaseDate.value;
        console.log('yes', crossVAlue, title, bloger, releaseDate)

        const bodyData = {
            title, bloger, releaseDate
        }
        if (!crossVAlue && title && bloger && releaseDate) {
            fetch(`http://localhost:5000/setUpCommingBlog`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    e.target.reset()
                    toast.promise(
                        resolveAfter3Sec,
                        {
                            pending: 'UpComming Blog Details Uploading',
                            success: 'SuccessFully UpLoaded👌'
                        }
                    )
                    refetch(`http://localhost:5000/allUpcommigBlogs`)
                })
        }
        else if (!crossVAlue && (!title || !bloger || !releaseDate)) {
            toast.error('Please Provide All Proper Information', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }


    }

    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/deleteUpcomming/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.promise(
                    resolveAfter3Sec,
                    {
                        pending: 'UpComming Blog Details Deleting',
                        success: 'SuccessFully Deleted !!!'
                    }
                )
                refetch(`http://localhost:5000/allUpcommigBlogs`)
            })
    }



    return (
        <div className="py-10 bg-slate-400">
            <div>
                <h1 className="text-center font-bold lg:text-5xl text-4xl">UpComming Blog</h1>
                <p className="text-xl lg:px-60 px-4 text-center mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
            </div>
            <div className='flex lg:justify-end md:justify-end justify-center mt-10 mb-4 me-10'>
                <button className='btn bg-green-600 hover:bg-green-600 text-white' onClick={() => { window.upCommingModal.showModal() }}>Create UpComing</button>
            </div>
            <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-1 lg:px-10 px-2'>

                {
                    AllUpCommingBlogs?.map(UpcommingBlog => <div key={UpcommingBlog?._id} className='   flex items-center justify-between text-white bg-slate-700 lg:p-4 p-2 rounded-md'>
                        <div className='flex  items-center'>
                            <img src={logo} alt="" className='w-20 h-20 rounded-lg lg:mr-6 mr-2' />
                            <span>
                                <h1 className='text-xl font-bold'>{UpcommingBlog?.title}</h1>
                                <h1>{UpcommingBlog?.bloger}</h1>

                            </span>
                        </div>
                        <div className='lg:pe-8 flex items-center gap-2'>
                            <button className='btn bg-orange-600 hover:bg-red-600 rounded-full text-white'>Release Date : <br /> {UpcommingBlog?.releaseDate.slice(8, 10)} {month[parseInt(UpcommingBlog?.releaseDate.slice(5, 8)) - 1]} {UpcommingBlog?.releaseDate.slice(0, 4)}</button>
                            <div >
                                <button className='bg-red-700 p-2 rounded-full' onClick={() => handleDelete(UpcommingBlog._id)}><AiFillDelete className='text-xl'></AiFillDelete></button>
                            </div>
                        </div>

                    </div>)
                }





            </div>
            <dialog id="upCommingModal" className="modal">
                <div className="modal-box">

                    <form method="dialog" onSubmit={handleTitle}>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setCrossVAlue(true)}>✕</button>
                        <h3 className="font-bold text-lg mb-4">Set UpComming Blog Details Here</h3>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">What is Blog name?</span>
                            </label>
                            <input type="text" name="blogName" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">What is Bloger name?</span>
                            </label>
                            <input type="text" name="blogerName" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Possible Release Date</span>
                            </label>
                            <input type="date" name="releaseDate" className="input input-bordered w-full" />
                        </div>

                        <input type="Submit" className="btn bg-primary hover:bg-primary text-white w-full " onClick={() => setCrossVAlue(false)} />

                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default UpcommingBlog;