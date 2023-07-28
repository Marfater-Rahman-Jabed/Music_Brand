import { useState } from 'react'
// import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player'
import { PiVideoLight } from 'react-icons/pi';
import { AiOutlineDelete } from 'react-icons/ai';
import { BsPlusCircle } from 'react-icons/bs';
import { useQuery } from '@tanstack/react-query';
// import { MdChangeCircle } from 'react-icons/md';
// import { CloudinaryContext, Video } from 'cloudinary-react';

const Vidoes = () => {
    // const [totalVideos, setTotalVideos] = useState([])
    const [url, setUrl] = useState([])
    const [thumbneilId, setThumbneilId] = useState(null)
    const [imgId, setImgId] = useState(null)
    const [value, setValue] = useState(false)
    const [crossVAlue, setCrossVAlue] = useState(false)
    // console.log('crosValue', crossVAlue)
    const imageKey = import.meta.env.VITE_imagekey;

    const { data: totalVideos = [], refetch } = useQuery({
        queryKey: ["videos"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/videos`)
            const data = res.json();
            return data
        }
    })

    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => {
    //             setTotalVideos(data)
    //         })
    // }, [])
    const handleDelete = (id) => {
        console.log(id)
        fetch(`http://localhost:5000/videoDelete/${id}`, {
            method: 'Delete'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                refetch(`http://localhost:5000/videos`)
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
            fetch(`http://localhost:5000/updateTitle`, {
                method: 'put',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch(`http://localhost:5000/videos`)
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

                    fetch(`http://localhost:5000/updateImage`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(imageHolder)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            refetch(`http://localhost:5000/videos`)
                        })
                }
            })


        // 

    }

    const handleVideo = (ids, src) => {
        console.log(ids)
        window.my_modal_3.showModal()
        setUrl(src)
        setValue(true)
    }
    const handleUpload = async (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'uyy59f3d'); // Replace with your upload preset name

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
                    fetch('http://localhost:5000/uploadVideo', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(datas)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            refetch(`http://localhost:5000/videos`)
                        })
                }


            })

        // const data = await response.json();

    };

    return (
        <div className='lg:mx-24 md:mx-20 mx-16 py-16'>
            <div className='flex justify-end py-3'>
                <input type="file" name="photo" id="takevideo" accept="video/*" className="invisible h-0 w-0" onChange={handleUpload} />
                <label htmlFor="takevideo" className="btn btn-md bg-blue-700 hover:bg-blue-700 text-white hover:text-white" title="Upload Video" ><BsPlusCircle className="text-xl"></BsPlusCircle>Upload Video</label>

                {/* <span className='bg-primary'>
                    <h1 className=' text-white font-bold text-center'>Upload Video</h1>
                    <input className='text-white' type="file" accept="video/*" onChange={handleUpload} />
                </span> */}
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-8'>

                {
                    totalVideos.map((vidoe, i) => <div key={i} className='h-96 bg-base-200 shadow-lg'>
                        <button onClick={() => handleVideo(vidoe._id, vidoe.src)}> <span>
                            <img src={vidoe?.picture ? vidoe?.picture : `https://i.ibb.co/VW3r4C6/267-2678423-bacteria-video-thumbnail-default.png`} alt="" className='h-60 w-96' />
                            {/* <PiVideoLight className=''></PiVideoLight> */}
                        </span>
                            <span className=''>
                                <h1 className='text-xl font-semibold flex'><PiVideoLight className='text-4xl  me-2'></PiVideoLight>{vidoe?.title ? vidoe?.title : 'Latest Video'}</h1>
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


                    </div>)
                }


                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box p-4 lg:h-[70vh] md:h-[35vh]   w-[100vw]  bg-black">
                        <button className="btn btn-md  btn-circle bg-red-500 absolute right-4 lg:top-6 md:top-4 top-4 text-2xl" onClick={() => setValue(false)}>✕</button>
                        <div className=' w-full lg:mt-12 md:mt-16 mt-16 rounded-full lg:h-5/6 '>
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


            </div>
        </div>
    );
};

export default Vidoes;