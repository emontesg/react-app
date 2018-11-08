import React from "react";

const JobDetail = ({ job }) => {
  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-md-8 jobr">
      <div className="single-job">
        <h4 id="puesto-sin">{job.Puesto}</h4>
        <div className="custom-file">
          <input
            type="file"
            name="fileToUpload"
            id="fileToUpload"
            className="custom-file-input"
            lang="es"
          />
          <label className="custom-file-label" htmlFor="customFileLang">
            Adjuntar CV
          </label>
        </div>
        <h6 id="lugar-sin">{job.Lugar}</h6>
        <h6>
          A través de <span id="red-sin">{job.RedSocial}</span>
        </h6>
        <h6>
          <i className="fa fa-clock" />
          &nbsp;
          <span id="fecha-sin">
            &nbsp;
            {job.FechaCreacion}
          </span>
          &nbsp;&nbsp;
          <i className="fa fa-suitcase" />{" "}
          <span id="tiempo-sin">{job.Tiempo} </span>
        </h6>
        <p id="descipcion-sin">{job.Descripcion}</p>
      </div>
    </div>
  );
};
export default JobDetail;
