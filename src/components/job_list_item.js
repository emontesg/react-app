import React from 'react';

const JobListItem = ({job, onJobSelect}) => {
 return(
     <div onClick={()=> onJobSelect(job)} className="job" id="jobi">
        <h4>{job.Puesto}</h4>
        <h5>{job.Empresa}</h5>
        <h6>{job.Puesto}</h6>
        <h6>A través de <span>{job.RedSocial}</span></h6>
        <h6><i className="fa fa-clock"></i><span> {job.FechaCreacion}   </span><i className="fa fa-suitcase"></i> <span> {job.Tiempo}</span></h6>
    </div>
 )
}
export default JobListItem;