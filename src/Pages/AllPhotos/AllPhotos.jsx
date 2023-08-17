import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";

const AllPhotos = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const navigate = useNavigate()
    const { data: totalImages = [] } = useQuery({
        queryKey: ["images"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/images`)
            const data = res.json();
            return data
        }
    })
    return (
        <div className="py-10 bg-fuchsia-400">
            <div className="pb-10">
                <h1 className="text-center font-bold lg:text-5xl text-4xl">Our Images</h1>
                <p className="text-xl lg:px-60 px-2 lg:text-center text-justify mt-6">Grursus mal suada faci lisis Lorem ipsum dolarorit more a ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum.</p>
            </div>
            <div className=' lg:px-16 md:px-6 px-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 '>
                {
                    totalImages?.map(image => <PhotoProvider key={image?._id}>
                        <PhotoView src={image?.img} >
                            <img src={image?.img} alt="" className='h-64 w-full' />
                        </PhotoView>
                    </PhotoProvider>)
                }

            </div>
            <div className='flex lg:justify-end md:justify-end justify-center mt-6 me-6'>
                <button className='btn bg-green-600 hover:bg-green-600 text-white' onClick={() => navigate(-1)}>BACK PREVIOUS</button>
            </div>
        </div>
    );
};

export default AllPhotos;