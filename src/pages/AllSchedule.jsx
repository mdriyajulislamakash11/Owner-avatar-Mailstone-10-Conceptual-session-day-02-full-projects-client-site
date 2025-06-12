import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllSchedule = () => {
  const usegsDataOne = useLoaderData();
  const [usegsData, setUsegsData] = useState(usegsDataOne);

  const handleDelate = (_id) => {
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
        fetch(`http://localhost:5000/schedule/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            const remaining = usegsData.filter(
              (newData) => newData?._id !== _id
            );
            setUsegsData(remaining);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Day Number</th>
              <th>Date</th>
              <th>Day Name</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {usegsData.map((data, index) => (
              <tr key={data?._id}>
                <th>{index + 1}</th>
                <td>{data?.title}</td>
                <td>{data?.dayNumber}</td>
                <td>{data?.date}</td>
                <td>{data?.dayName}</td>
                <td>{data?.time}</td>
                <td>
                  <button className="btn mr-2">E</button>
                  <button
                    onClick={() => handleDelate(data?._id)}
                    className="btn mr-2"
                  >
                    X
                  </button>
                  <button className="btn mr-2">T</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSchedule;
