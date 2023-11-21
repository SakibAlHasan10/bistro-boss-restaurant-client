import SectionTitle from "../../Shear/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import useSecure from "../../Hooks/AxiosSecure/useSecure";
import useAuth from "../../Hooks/AuthHook/useAuth";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const MyCart = () => {
  const { user } = useAuth();
  const email = user?.email;
  const axiosSecure = useSecure();
  const { data: items = [], refetch } = useQuery({
    queryKey: ["card", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cards/${email}`);
      return res.data;
    },
  });
  const total = items.reduce((pre, item) => pre + item.price, 0);
  const handleRemoveItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cards/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <SectionTitle title={"WANNA ADD MORE?"} subTitle={"---My Cart---"} />
      <div className="px-20 bg-white">
        <div className="flex justify-between items-center text-3xl font-bold">
          <h2>Total orders: {items?.length}</h2>
          <h2>total price: ${total}</h2>
          <button className="text-center btn">pay</button>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>ACTION</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.price}</td>
                    <th>
                      <button
                        onClick={() => handleRemoveItem(item?._id)}
                        className="btn btn-ghost btn-xs text-2xl"
                      >
                        <FaTrashAlt />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot></tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
