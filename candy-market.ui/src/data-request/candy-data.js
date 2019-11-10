import axios from 'axios';

const baseUrl = 'http://localhost:60640';

const getCandy = () => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/candy`)
    .then(response => resolve(response.data))
    .catch(error => reject(error));
})

const deleteCandy = (id) => axios.delete(`${baseUrl}/candy/${id}/eat`);

const addCandy = (newCandy) => axios.post(`${baseUrl}/candy`, newCandy);

export default { getCandy, deleteCandy, addCandy };
