import { createBrowserRouter } from "react-router-dom";
import Roots from "../../Layout/Roots/Roots";
import Home from "../../Pages/Home/Home";

const routers = createBrowserRouter([
        {
            path:'/',
            element:<Roots/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }
            ]
        }
    ])

export default routers;