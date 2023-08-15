import BlogSection from "../../Components/BlogSection/BlogSection";
import HeroSection from "../../Components/HeroSection/HeroSection";

import PopularBlog from "../../Components/HeroSection/PopularBlog/PopularBlog";
import ImageSection from "../../Components/ImageSection/ImageSection";
import UpcommingBlog from "../../Components/UpcommingBlog/UpcommingBlog";
import Vidoes from "../../Components/Videos/Vidoes";


const Home = () => {
    return (
        <div>

            <HeroSection></HeroSection>
            <BlogSection></BlogSection>
            <PopularBlog></PopularBlog>
            <UpcommingBlog></UpcommingBlog>
            <ImageSection></ImageSection>
            <Vidoes></Vidoes>

        </div>
    );
};

export default Home;