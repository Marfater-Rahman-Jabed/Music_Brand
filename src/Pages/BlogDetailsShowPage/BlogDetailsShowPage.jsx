
import { useState } from "react";
import { useEffect } from "react";
import parse from 'html-react-parser';
import { useNavigate } from "react-router-dom";
const BlogDetailsShowPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const UrlId = window.location.pathname.split('/')[2];
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`https://music-brand-server.vercel.app/blogdetailsshow/${UrlId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
                fetch(`https://music-brand-server.vercel.app/ViewUpdate`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: UrlId,
                        view: data[0]?.view + 1
                    })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                    })
            })
    }, [UrlId])


    return (
        <div >
            <div className="">
                <img src={details[0]?.img} alt="" className="w-full 
                lg:h-[60vh] md:h-[30vh] h-[50vh]" />
            </div>
            <div className="lg:px-36 md:px-36">
                <h1 className="lg:text-5xl text-3xl text-center font-bold pt-6 pb-4">{details[0]?.title}</h1>
                <p className="lg:text-center text-justify font-semibold pt-10 pb-4 lg:px-28 px-4 bg-slate-200"><i>&apos;&apos;{details[0]?.description}&apos;&apos;</i></p>

                <p className="pt-10 px-4 text-justify">
                    {parse(`${details[0]?.blog}`)}
                </p>
                <div className='flex justify-end  mt-6 lg:me-6 me-2'>
                    <button className='btn bg-green-600 hover:bg-green-600 text-white' onClick={() => navigate(-1)}>BACK PREVIOUS</button>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsShowPage;