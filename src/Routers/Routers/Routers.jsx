import { createBrowserRouter } from "react-router-dom";
import Roots from "../../Layout/Roots/Roots";
import Home from "../../Pages/Home/Home";
import OurMenu from "../../Pages/OurMenu/OurMenu";

const routers = createBrowserRouter([
        {
            path:'/',
            element:<Roots/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:"/Menu",
                    element:<OurMenu></OurMenu>
                }
            ]
        }
    ])

export default routers;