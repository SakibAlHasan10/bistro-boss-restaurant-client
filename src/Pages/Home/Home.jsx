
import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import ContactNumber from "./ContactNumber/ContactNumber";
import OnlineOrder from "./OnlneOrders.jsx/OnlineOrder";
import OurMenu from "./OurMenu/OurMenu";
import ShefRecomended from "./ShefRecomended/ShefRecomended";
import BottemMenu from "./BootemMenu/BottemMenu";
import Reviews from "./Reviews/Reviews";

const Home = () => {
    const [allMenus, setAllMenus] = useState([])
  // const [menus, setMenus] = useState(allMenus?.slice(0,6))
  useEffect(()=>{
    fetch('/menu.json')
    .then(res=>res.json())
    .then(data=>setAllMenus(data))
  },[])
    return (
        <div>
            <Banner/>
            <OnlineOrder/>
                <OurMenu 
                allMenus={allMenus}
                ></OurMenu>
            <ContactNumber/>
            <ShefRecomended allMenus={allMenus}/>
            <BottemMenu/>
            <Reviews/>
        </div>
    );
};

export default Home;