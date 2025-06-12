import React from "react";
import { useLoaderData } from "react-router-dom";

const Updated = () => {
  const updatedData = useLoaderData();
  const { _id, title, dayNumber, date, dayName, time } = updatedData;

  const handleUpdatedData = (e) => {
    e.preventDefault();
    const form = e.target;

    const title = form.title.value;
    const dayNumber = form.dayNumber.value;
    const date = form.date.value;
    const dayName = form.dayName.value;
    const time = form.time.value;

    const updateData = { title, dayNumber, date, dayName, time };
    console.log(updateData);

    // put methods api:
    fetch(`https://server2-eight-khaki.vercel.app/schedule/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="w-full mx-auto p-6 bg-slate-500 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Add Gym Schedule
        </h2>
        <form onSubmit={handleUpdatedData} className="space-y-4">
          <div className="flex justify-between items-center gap-6">
            <div className="w-full">
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter title"
              />
            </div>

            <div className="w-full">
              <label className="block mb-1 font-medium">Day Number</label>
              <input
                type="number"
                name="dayNumber"
                defaultValue={dayNumber}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter day number"
              />
            </div>
          </div>

          <div className="flex justify-between items-center gap-6">
            <div className="w-full">
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                name="date"
                defaultValue={date}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div className="w-full">
              <label className="block mb-1 font-medium">Day Name</label>
              <select
                name="dayName"
                defaultValue={dayName}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Day</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Time</label>
            <input
              type="time"
              name="time"
              defaultValue={time}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Updated;
