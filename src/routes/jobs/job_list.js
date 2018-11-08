import React from "react";
import JobListItem from "./job-list-item";

const JobList = props => {
  const jobItems = props.jobs.map(job => {
    return (
      <JobListItem key={job.id} onJobSelect={props.onJobSelect} job={job} />
    );
  });

  return <div className="container-jobs col-md-4">{jobItems}</div>;
};
export default JobList;
