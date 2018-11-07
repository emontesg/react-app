import Fuse from "fuse.js";
import axios from "axios";
import qs from "qs";

const AIR_TABLE_API_KEY = "keyW6xcq7GgfeIoAA";
const BASE_URL = `https://api.airtable.com/v0/appB4IQ3CxGcnp9p9/Trabajos?api_key=${AIR_TABLE_API_KEY}`;
const ADD_USER = 'http://chambaideal.com/back-end/addUser';
const getJobs = async query => {
  const jobs = await fetch(BASE_URL).then(response => response.json());
  const result = jobs.records.map(({ fields, ...other }) => ({
    ...other,
    ...fields
  }));

  if (!query) return result;

  const fuse = new Fuse(result, { keys: ["Puesto", "Descripcion"] });
  return fuse.search(query);
};
const addUser = async user => {
  return axios.post(ADD_USER, user).then(response => response).catch(error => error);
}
const getJob = async jobId => {
  const jobs = await getJobs();

  const job = jobs.find(({ id }) => id === jobId);
  if (!job) throw new Error("Job not found");

  return job;
};

const api = {
  getJobs,
  getJob,
  addUser
};

export default api;
