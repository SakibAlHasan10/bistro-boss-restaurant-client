import { useState } from "react";
import SectionBanner from "../../Shear/SectionBanner";
import img from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useQuery } from "@tanstack/react-query";
import usePublic from "../../Hooks/AxiosPublic/usePublic";
import ShefCard from "../../Shear/ShefCard/ShefCard";
import Area from "../../Shear/area";
// import useCategory from "../../Hooks/CategorysHook/useCategory";
const OurShop = () => {
  const axiosPublic = usePublic();
  const [category, setCategory] = useState("salad");
  //   const [data] = useCategory({category});

  const { data, refetch } = useQuery({
    queryKey: ["menus", category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menus/${category}`);
      return res.data;
    },
  });
  refetch();
  return (
    <div>
      <SectionBanner
        title={"OUR SHOP"}
        des={"Would you like to try a dish?"}
        img={img}
      />
      <Area>
        <div className="uppercase">
          <Tabs>
            <div className="text-center mt-10 mb-10">
              <TabList>
                <Tab onClick={() => setCategory("salad")}>salad</Tab>
                <Tab onClick={() => setCategory("pizza")}>pizza</Tab>
                <Tab onClick={() => setCategory("soup")}>soups</Tab>
                <Tab onClick={() => setCategory("dessert")}>desserts</Tab>
                <Tab onClick={() => setCategory("drinks")}>drinks</Tab>
              </TabList>
            </div>

            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((item) => (
                  <ShefCard key={item._id} item={item}></ShefCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((item) => (
                  <ShefCard key={item._id} item={item}></ShefCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((item) => (
                  <ShefCard key={item._id} item={item}></ShefCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((item) => (
                  <ShefCard key={item._id} item={item}></ShefCard>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data?.map((item) => (
                  <ShefCard key={item._id} item={item}></ShefCard>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Area>
    </div>
  );
};

export default OurShop;
