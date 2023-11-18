import { useQuery } from "@tanstack/react-query";
import usePublic from "../AxiosPublic/usePublic";

const useCategory = ({category}) => {
  const axiosPublic = usePublic();
  const { data } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const res = await axiosPublic.get(`/menus/${category}`);
      return res.data;
    },
  });
  return [data];
};

export default useCategory;
