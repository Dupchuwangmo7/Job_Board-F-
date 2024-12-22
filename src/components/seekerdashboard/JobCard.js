import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-sm text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
