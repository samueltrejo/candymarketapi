import axios from 'axios';

const baseUrl = 'http://localhost:60640';

const getCandy = () => new Promise ((resolve, reject) => {
  axios.get(`${baseUrl}/candy`)
    .then(response => resolve(response.data))
    .catch(error => reject(error));
})

export default { getCandy };
