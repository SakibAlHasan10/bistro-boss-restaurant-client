import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../Shear/SectionTitle";

const MyBooking = () => {
  return (
    <div>
      <SectionTitle
        title={"MY BOOKINGS"}
        subTitle={"---Excellent Ambience---"}
      />
      <div className="px-20 bg-white">
        <div className="flex justify-between items-center text-3xl font-bold">
          <h2>Total bookings: 3</h2>
          <h2>total price: $88.2</h2>
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
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </td>
                  <td>ITEM NAME</td>
                  <td>price</td>
                  <th>
                    <button className="btn btn-ghost btn-xs text-2xl">
                      <FaTrashAlt />
                    </button>
                  </th>
                </tr>
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

export default MyBooking;
