import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from "./App";
import CountryDetailesPage from "./routes/CountryDetailesPage";
import Error from "./routes/PageNotFound";

const Router = () => {
    const BrowserRouter=createBrowserRouter(
        [
            {
                path:'/',
                element:<App/>
            },
            {
                path:'/:name',
                element:<CountryDetailesPage/>
            },
            {
                path:'*',
                element:<Error/>
            }
        ]);
    return <RouterProvider router={BrowserRouter}/>;
};
export default Router;