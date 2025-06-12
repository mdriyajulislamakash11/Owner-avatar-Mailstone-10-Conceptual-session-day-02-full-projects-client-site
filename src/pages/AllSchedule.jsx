import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AllSchedule = () => {
  const loadedData = useLoaderData();
  const [schedules, setSchedules] = useState(loadedData);
  const [search, setSearch] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(false);

  // 🔍 Search API Call
  useEffect(() => {
    if (searchTrigger) {
      fetch(`https://server2-eight-khaki.vercel.app/schedule?searchParams=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setSchedules(data);
          setSearchTrigger(false); // Reset trigger
        });
    }
  }, [searchTrigger]);

  // ❌ Delete Schedule
  const handleDelete = (_id) => {
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
        fetch(`https://server2-eight-khaki.vercel.app/schedule/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your schedule has been deleted.", "success");
              const remaining = schedules.filter((item) => item._id !== _id);
              setSchedules(remaining);
            }
          });
      }
    });
  };

  // 🔍 Handle Form Submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTrigger(true);
  };

  return (
    <div>
      {/* 🔍 Search Box */}
      <div className="flex justify-center mt-5 mb-3">
        <form className="flex items-end gap-4" onSubmit={handleSearchSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Search by Title / Date</span>
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type to search..."
              className="input input-bordered w-72"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Search
          </button>
        </form>
      </div>

      {/* 📅 Schedule Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
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
            {schedules.length > 0 ? (
              schedules.map((data, index) => (
                <tr key={data?._id}>
                  <th>{index + 1}</th>
                  <td>{data?.title}</td>
                  <td>{data?.dayNumber}</td>
                  <td>{data?.date}</td>
                  <td>{data?.dayName}</td>
                  <td>{data?.time}</td>
                  <td>
                    <Link to={`/update/${data?._id}`}>
                      <button className="btn btn-sm btn-warning mr-1">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(data?._id)}
                      className="btn btn-sm btn-error mr-1"
                    >
                      Delete
                    </button>
                    <button className="btn btn-sm btn-info">Test</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-red-500 py-4">
                  No data found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSchedule;
