import { useState } from 'react'
import ReactPlayer from 'react-player'
import { PiVideoLight } from 'react-icons/pi';
import { AiOutlineDelete, AiOutlinePlayCircle } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Slider from 'react-slick';

const Vidoes = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate()
    const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
    // const [clickAll, setClickAll] = useState()
    const [url, setUrl] = useState([])
    const [title, setTitle] = useState([])
    const [thumbneilId, setThumbneilId] = useState(null)
    const [imgId, setImgId] = useState(null)
    const [value, setValue] = useState(false)
    const [crossVAlue, setCrossVAlue] = useState(false)
    const [uploadLoading, setUploadLoading] = useState(false)
    // console.log('crosValue', crossVAlue)
    const imageKey = import.meta.env.VITE_imagekey;

    const { data: totalVideos = [], refetch } = useQuery({
        queryKey: ["videos"],
        queryFn: async () => {
            const res = await fetch(`https://music-brand-server.vercel.app/videos`)
            const data = res.json();
            return data
        }
    })

    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://music-brand-server.vercel.app/videoDelete/${id}`, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.promise(
                    resolveAfter3Sec,
                    {
                        pending: 'Video is Deleting',
                        success: 'SuccessFully Deleted👌'
                    }
                )
                refetch(`https://music-brand-server.vercel.app/videos`)
            })
    }
    const handleTitle = (e) => {
        console.log(crossVAlue, e.target.title.value, thumbneilId)

        const titleName = e.target.title.value;
        const thumId = thumbneilId
        const bodyData = {
            id: thumId,
            title: titleName
        }
        if (!crossVAlue && titleName) {
            fetch(`https://music-brand-server.vercel.app/updateTitle`, {
                method: 'put',
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
                            pending: 'Video Title Updating',
                            success: 'SuccessFully Updated👌'
                        }
                    )
                    refetch(`https://music-brand-server.vercel.app/videos`)
                })
        }

    }
    const handleThambneil = (e) => {
        e.preventDefault()
        // console.log(imgId)
        const image = e.target.files[0]
        console.log(imgId, image)
        const formData = new FormData();
        formData.append('image', image)
        // setThumbneilId(id)

        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                console.log(image)
                if (image.success) {
                    const imageHolder = {
                        id: imgId,
                        img: image.data.url
                    }

                    fetch(`https://music-brand-server.vercel.app/updateImage`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(imageHolder)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.promise(
                                resolveAfter3Sec,
                                {
                                    pending: 'Video thumbneil Updating',
                                    success: 'SuccessFully Updated👌'
                                }
                            )
                            refetch(`https://music-brand-server.vercel.app/videos`)
                        })
                }
            })


        // 

    }

    const handleVideo = (ids, src, title) => {
        console.log(ids)
        window.my_modal_3.showModal()
        setUrl(src)
        setValue(true)
        setTitle(title)
    }
    const handleRightClick = (e) => {
        e.preventDefault();
    }
    const handleUpload = async (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'uyy59f3d'); // Replace with your upload preset name
        setUploadLoading(true)
        fetch(
            `https://api.cloudinary.com/v1_1/dg8hb8vuk/video/upload`,
            {
                method: 'POST',
                body: formData,
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log(data.secure_url);
                const datas = {
                    src: data.secure_url
                }
                if (data.secure_url) {
                    fetch('https://music-brand-server.vercel.app/uploadVideo', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(datas)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            setUploadLoading(false)
                            toast.promise(
                                resolveAfter3Sec,
                                {
                                    pending: 'Video Uploading',
                                    success: 'SuccessFully Uploaded👌'
                                }
                            )
                            refetch(`https://music-brand-server.vercel.app/videos`)
                        })
                }
            })
    };

    return (
        <div className='py-16 bg-gradient-to-r from-orange-700 via-black to-red-700'>
            <Fade direction='up' duration={2000}>
                <div className='text-white pb-10'>
                    <h1 className="text-center font-bold text-5xl">Videos</h1>
                    <p className="text-xl lg:px-60 px-4 text-center mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
                </div>
            </Fade>

            <div className='flex lg:justify-end md:justify-end justify-center lg:pe-10 md:pe-8  mb-4'>

                {
                    uploadLoading ? <span className="btn btn-md bg-blue-700 px-6"> <p className='w-6 h-6 border-4 rounded-full animate-spin border-dashed mx-auto  border-white'> </p></span> : <span><input type="file" name="photo" id="takevideo" accept="video/*" className="invisible h-0 w-0" onChange={handleUpload} />
                        <label htmlFor="takevideo" className="btn btn-outline bg-green-600 hover:bg-green-600 text-white px-16 hover:text-white" title="Upload Video" ><BsPlusCircle className="text-xl"></BsPlusCircle>Upload Video</label></span>
                }
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-8 gap-4 lg:px-12 md:px-6'>
                {
                    totalVideos?.map((vidoe, i) => <Fade key={i} direction='left' duration={2000}>
                        <div className='h-96 bg-base-200 shadow-lg rounded-lg'>
                            <button onClick={() => handleVideo(vidoe._id, vidoe.src, vidoe.title)}> <span >
                                <img src={vidoe?.picture ? vidoe?.picture : `https://i.ibb.co/VW3r4C6/267-2678423-bacteria-video-thumbnail-default.png`} onContextMenu={handleRightClick} alt="" className='h-60 w-[100vw] rounded-t-lg' />
                            </span>
                                <span className=''>
                                    <h1 className='text-xl font-semibold flex ms-4 mt-2'><PiVideoLight className='text-4xl  me-2 hover:animate-pulse'></PiVideoLight>{vidoe?.title ? vidoe?.title : 'Latest Video'}<AiOutlinePlayCircle className='text-3xl mt-1 hover:animate-spin mx-2'></AiOutlinePlayCircle></h1>
                                </span>
                            </button>
                            <div className='flex justify-between mx-2'>
                                <span className=''>
                                    <input type="file" name="photo" id="takephoto" accept="image/*" className="invisible h-0 w-0" onChange={handleThambneil} />
                                    <label htmlFor="takephoto" className="btn btn-md hover:bg-blue-700 hover:text-white" title="Change thumbneil" onClick={() => { setImgId(vidoe._id) }}><BsPlusCircle className="text-xl"></BsPlusCircle>Change  Thumb</label>
                                </span>
                                <span className=''>
                                    <button className='font-semibold btn btn-md hover:bg-blue-700 hover:text-white' onClick={() => { window.my_modal_4.showModal(); setThumbneilId(vidoe._id); }}>Change title</button>
                                </span>
                                <span>
                                    <button className=' btn btn-md  hover:bg-red-500  hover:text-white' onClick={() => handleDelete(vidoe._id)}><AiOutlineDelete className='text-xl '></AiOutlineDelete></button>
                                </span>
                            </div>
                        </div>
                    </Fade>)
                }
            </div>


            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box p-6 lg:h-[75vh]   w-[100vw]  bg-slate-950">
                    <button className="btn btn-md  btn-circle bg-red-500 absolute right-4 lg:top-6 md:top-4 top-4 text-2xl" onClick={() => setValue(false)}>✕</button>
                    <h1 className='text-xl text-white text-center'>Video title : {title}</h1>
                    <div className=' w-full lg:mt-6 md:mt-10 mt-12 rounded-full lg:h-5/6 '>
                        <ReactPlayer url={url} controls playing={value} width='100%'
                            height='100%'

                        />
                    </div>
                </form>

            </dialog>
            {/* You can open the modal using ID.showModal() method */}

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">

                    <form method="dialog" onSubmit={handleTitle}>
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => setCrossVAlue(true)}>✕</button>
                        <h3 className="font-bold text-lg mb-4">Set Title Here</h3>
                        <input type="text" name='title' placeholder="Change Title here" className="input input-bordered input-secondary w-full mb-3" />
                        <input type="Submit" className="btn bg-primary hover:bg-primary text-white w-full " onClick={() => setCrossVAlue(false)} />

                    </form>
                </div>
            </dialog>

            <div className='flex lg:justify-end md:justify-end justify-center mt-6 lg:me-12 md:me-6'>
                <button className='btn bg-green-600 hover:bg-green-600 text-white' onClick={() => navigate(-1)}>BACK PREVIOUS</button>
            </div>
        </div>

    );
};

export default Vidoes;