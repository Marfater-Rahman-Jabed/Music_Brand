
import { useState } from "react";
import { useEffect } from "react";
import parse from 'html-react-parser';
const BlogDetailsShowPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const UrlId = window.location.pathname.split('/')[2];
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/blogdetailsshow/${UrlId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetails(data)
                fetch(`http://localhost:5000/ViewUpdate`, {
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





    // console.log(details)
    return (
        <div className="pb-10 px-10">
            <div className="">
                <img src={details[0]?.img} alt="" className="w-full h-[70vh]" />
            </div>
            <h1 className="text-5xl text-center font-bold pt-6 pb-4">{details[0]?.title}</h1>
            <p className="text-center font-semibold pt-10 pb-4 px-28 bg-slate-200"><i>&apos;&apos;{details[0]?.description}&apos;&apos;</i></p>

            <p className="pt-10">
                {parse(`${details[0]?.blog}`)}
            </p>
        </div>
    );
};

export default BlogDetailsShowPage;