import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { PiVideoLight } from 'react-icons/pi';
const Vidoes = () => {
    const [totalVideos, setTotalVideos] = useState([])
    const [url, setUrl] = useState([])
    const [value, setValue] = useState(false)
    console.log(value)

    useEffect(() => {
        fetch('Videos.json')
            .then(res => res.json())
            .then(data => {
                setTotalVideos(data)
            })
    }, [])


    const handleVideo = (ids, src) => {
        console.log(ids)
        window.my_modal_3.showModal()
        setUrl(src)
        setValue(true)
    }

    return (
        <div className='lg:mx-24 md:mx-20 mx-16 py-16'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-8'>

                {
                    totalVideos.map((vidoe, i) => <div key={i}>
                        <button onClick={() => handleVideo(vidoe._id, vidoe.src)}> <span>
                            <img src={vidoe.picture} alt="" className='h-60 w-96' />
                            {/* <PiVideoLight className=''></PiVideoLight> */}
                        </span>
                            <span className=''>
                                <h1 className='text-xl font-semibold flex'><PiVideoLight className='text-4xl  me-2'></PiVideoLight>{vidoe.title}</h1>
                            </span>
                        </button>

                    </div>)
                }


                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box p-4 lg:h-[70vh] md:h-[35vh]   w-[100vw]  bg-black">
                        <button className="btn btn-md  btn-circle bg-red-500 absolute right-4 lg:top-6 md:top-4 top-4 text-2xl" onClick={() => setValue(false)}>✕</button>
                        <div className=' w-full lg:mt-12 md:mt-16 mt-16 rounded-full lg:h-5/6 '>
                            <ReactPlayer url={url} controls playing={value} width='100%'
                                height='100%' />
                        </div>
                    </form>

                </dialog>
            </div>
        </div>
    );
};

export default Vidoes;