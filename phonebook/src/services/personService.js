import axios from 'axios'
const baseURl = 'http://localhost:3001/persons'

const getAll = () => {
  const req = axios.get(baseURl);
  return req.then(response => response.data);
}

const create = (newObj) => {
  return axios.post(baseURl, newObj).then(response => response.data)
}

const update = (id, newObj) => {
  return axios.put(`${baseURl}/${id}`, newObj).then(response => response.data);
}

const del = (id) => {
  return axios.delete(baseURl+'/'+id)
}

export default { getAll, create, update, del}