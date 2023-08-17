import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CreatePost from "../Pages/CreatePost/CreatePost";
import BlogDetailsShowPage from "../Pages/BlogDetailsShowPage/BlogDetailsShowPage";
import AllArticles from "../Pages/AllArticles/AllArticles";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogDetails',
                element: <Home></Home>
            },
            {
                path: '/createPost',
                element: <CreatePost></CreatePost>
            },
            {
                path: '/blogDetails/:id',
                element: <BlogDetailsShowPage></BlogDetailsShowPage>
            },
            {
                path: '/allArticles',
                element: <AllArticles></AllArticles>
            }
        ]
    }
])