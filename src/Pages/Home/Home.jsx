import { useEffect } from "react";
import BlogSection from "../../Components/BlogSection/BlogSection";
import Contributor from "../../Components/Contributor/Contributor";
import HeroSection from "../../Components/HeroSection/HeroSection";

import PopularBlog from "../../Components/HeroSection/PopularBlog/PopularBlog";
import ImageSection from "../../Components/ImageSection/ImageSection";
import UpcommingBlog from "../../Components/UpcommingBlog/UpcommingBlog";
import Vidoes from "../../Components/Videos/Vidoes";


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>

            <HeroSection></HeroSection>
            <BlogSection></BlogSection>
            <PopularBlog></PopularBlog>
            <UpcommingBlog></UpcommingBlog>
            <ImageSection></ImageSection>
            <Vidoes></Vidoes>
            <Contributor></Contributor>

        </div>
    );
};

export default Home;