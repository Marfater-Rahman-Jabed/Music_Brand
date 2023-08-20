import { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import moment from 'moment/moment';
const CreatePost = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
    const imageKey = import.meta.env.VITE_imagekey;
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image', 'video'],
            [{ color: [] }, { background: [] }],

            ['clean'],
        ],
    };
    const [value, setValue] = useState('');
    const { quill, quillRef } = useQuill({ modules });
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const nevigate = useNavigate()
    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {

                // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                // console.log(quill.getContents());

                setValue(quillRef.current.firstChild.innerHTML)
            });
        }
    }, [quill]);


    const handleSubmit = (e) => {
        e.preventDefault()
        const image = e.target.image.files[0]
        const formData = new FormData();
        formData.append('image', image)


        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                console.log(image)
                if (image.success) {
                    const blogData = {
                        title: title,
                        description,
                        img: image.data.url,
                        blog: value,
                        view: 0,
                        time: new Date().toString()
                    }
                    fetch('https://music-brand-server.vercel.app/createPost', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(blogData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged) {
                                toast.promise(
                                    resolveAfter3Sec,
                                    {
                                        pending: 'Uploading Blog',
                                        success: 'SuccessFully Upload👌'
                                    }
                                )
                                nevigate('/')
                            }
                        })
                }
            })
        // console.log(image)
        // console.log(title, description, value)
        // 
    }

    return (
        <div className=''>
            <div className='text-center pt-4'>
                <h1 className='text-4xl font-bold'>Create Your Post Now</h1>
            </div>
            <div className='py-10 lg:px-10 md:px-4 px-4 lg:flex md:flex gap-2'>
                <div className="lg:w-1/2 md:w-1/2  pb-2">
                    <h1 className='text-center font-bold text-xl text-white p-4 bg-purple-600'>Write Content Here</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Write The Content Title</span>

                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " onChange={(e) => setTitle(e.target.value)} />

                        </div>
                        <div className="form-control w-full pt-2">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Write The Content Description ( Short Description )</span>

                            </label>
                            <textarea type="text" placeholder="Type here" className="textarea textarea-bordered w-full" onChange={(e) => setDescription(e.target.value)} />

                        </div>
                        <div className="form-control w-full pt-4">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Write Your Content Here</span>

                            </label>
                            <div className='w-full h-full  pt-2 '>
                                <div ref={quillRef} value={value} />
                            </div>

                        </div>
                        <div className="form-control w-full pb-10">
                            <label className="label">
                                <span className="label-text text-xl font-bold">Select Your blog Photo</span>

                            </label>
                            <input type="file" name='image' className="file-input file-input-bordered w-full 
                            " />


                        </div>
                        <div className='flex justify-end'>
                            <input type="submit" className='btn btn-primary px-10' value="Submit" />
                        </div>

                    </form>
                </div>
                <div className='lg:w-1/2 md:w-1/2 bg-slate-200 pb-4'>
                    <h1 className='text-center font-bold text-xl text-white p-4 bg-green-600'>Preview</h1>
                    <h1 className='text-center font-bold text-2xl pt-2 mb-2'>{title}</h1>
                    {description && <p className='text-center pt-2 mx-6 bg-slate-50 rounded-lg p-2'> <i>&apos;&apos;{description}&apos;&apos;</i></p>}
                    <h1 className='px-4 pt-6 text-justify'>
                        {parse(`${value}`)}
                        {/* {value} */}
                    </h1>
                </div>

            </div>

        </div>
    );
};

export default CreatePost;