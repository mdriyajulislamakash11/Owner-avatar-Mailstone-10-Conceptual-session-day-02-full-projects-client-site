
import { useLoaderData } from "react-router-dom";

const AllSchedule = () => {
  const usegsData = useLoaderData();
  console.log(usegsData);

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
                    <button className="btn mr-2">X</button>
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
