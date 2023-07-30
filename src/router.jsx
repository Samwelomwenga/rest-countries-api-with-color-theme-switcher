import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import CountryDetailesPage from "./routes/CountryDetailesPage";

const Router = () => {
    const BrowserRouter=createBrowserRouter(
        [
            {
                path:'/',
                element:<App/>
            },
            {
                path:'/country',
                element:<CountryDetailesPage/>
            }
        ]);
    return <RouterProvider router={BrowserRouter}/>;
};
export default Router;