import React from "react";
import { useLoaderData } from "react-router-dom";

function JobDetails() {
  const JobDetails = useLoaderData();
  return (
    <div className="job-details">
      <p>
        <strong>Job Title: </strong>
        {JobDetails.title}
      </p>
      <p>
        <strong>Salary: </strong>
        {JobDetails.salary}
      </p>
      <p>
        <strong>Location: </strong>
        {JobDetails.location}
      </p>
      <button>Apply Now</button>
    </div>
  );
}

export default JobDetails;
// param variable(id) will be same as the name entered after the ':'
export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
    throw Error("Could not Found the Job Details");
  }
  return res.json();
};
