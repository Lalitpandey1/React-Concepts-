import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Jobs() {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Jobs;

export const jobsLoader = async () => {
  console.log("API run Completed");
  const res = await fetch("http://localhost:5000/jobs");
  if (!res.ok) {
    throw Error("Could not Found the Job Details");
  }
  return res.json(); // read the data from the simulated API and returning the response
};
