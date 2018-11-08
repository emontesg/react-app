import React, { useState, useEffect, Fragment } from "react";
import _ from "lodash";

import api from "../../services/api";
import JobsHeader from "./jobs-header";
import JobList from "./job_list";
import JobDetail from "./job-detail";

export default function Jobs() {
  const [term, setTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const search = _.debounce(async () => {
    try {
      const result = await api.getJobs(term);
      setJobs(result);
      setSelectedJob(result[0]);
    } catch (err) {}
  }, 500);

  useEffect(
    () => {
      search();
      return search.cancel;
    },
    [term]
  );

  return (
    <Fragment>
      <JobsHeader term={term} setTerm={setTerm} />
      <div className="row section-job">
        <JobList jobs={jobs} onJobSelect={setSelectedJob} />
        <JobDetail job={selectedJob} />
      </div>
    </Fragment>
  );
}
