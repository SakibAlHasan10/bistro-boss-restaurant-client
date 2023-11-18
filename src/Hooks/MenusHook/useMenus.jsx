import { useQuery } from "@tanstack/react-query";
import usePublic from "../AxiosPublic/usePublic";

const useMenus = () => {
    const axiosPublic= usePublic()
    const {data} = useQuery({
        queryKey:["menus"],
        queryFn: async ()=>{
          const res = await axiosPublic.get('/menus')
          return res.data
        }
      })
    return [data]
};

export default useMenus;