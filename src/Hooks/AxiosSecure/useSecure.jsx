import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/v1", withCredentials:true
});
const useSecure = () => {
  return axiosSecure;
};

export default useSecure;
