import { useEffect, useState } from 'react'
// import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player'
import { PiVideoLight } from 'react-icons/pi';
// import { MdChangeCircle } from 'react-icons/md';
// import { CloudinaryContext, Video } from 'cloudinary-react';

const Vidoes = () => {
    const [totalVideos, setTotalVideos] = useState([])
    const [url, setUrl] = useState([])
    const [thumbneilId, setThumbneilId] = useState(null)
    const [imgId, setImgId] = useState(null)
    const [value, setValue] = useState(false)
    const [crossVAlue, setCrossVAlue] = useState(false)
    // console.log('crosValue', crossVAlue)
    const imageKey = import.meta.env.VITE_imagekey;
    useEffect(() => {
        fetch('http://localhost:5000/videos')
            .then(res => res.json())
            .then(data => {
                setTotalVideos(data)
            })
    }, [])
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

            })

        // const data = await response.json();

    };

    return (
        <div className='lg:mx-24 md:mx-20 mx-16 py-16'>
            <div className='flex justify-end py-3'>
                <span className='bg-primary'>
                    <h1 className=' text-white font-bold text-center'>Upload Video</h1>
                    <input className='text-white' type="file" accept="video/*" onChange={handleUpload} />
                </span>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-8'>

                {
                    totalVideos.map((vidoe, i) => <div key={i} className='h-96 bg-base-200 shadow-lg'>
                        <button onClick={() => handleVideo(vidoe._id, vidoe.src)}> <span>
                            <img src={vidoe?.picture ? vidoe?.picture : `https://i.ibb.co/9m0FFhV/squirrel-animal-cute-rodents-47547-jpeg-cs-srgb-dl-pexels-pixabay-47547.jpg`} alt="" className='h-60 w-96' />
                            {/* <PiVideoLight className=''></PiVideoLight> */}
                        </span>
                            <span className=''>
                                <h1 className='text-xl font-semibold flex'><PiVideoLight className='text-4xl  me-2'></PiVideoLight>{vidoe.title}</h1>
                            </span>
                        </button>
                        <div className='flex justify-between'>
                            <span className='w-3/5'>
                                <h1 className='ms-3 font-semibold'>Change Thambneil</h1>
                                <input className='text-white input-sm' type="file" accept="image/*" onChange={handleThambneil} onClick={() => { setImgId(vidoe._id) }} />
                            </span>
                            <span className='w-2/5'>
                                <button className='font-semibold btn btn-md' onClick={() => { window.my_modal_4.showModal(); setThumbneilId(vidoe._id); }}>Change title</button>
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