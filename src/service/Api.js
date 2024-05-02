import axios from "axios";

const get = (url) => axios.get(url)
    .then(req => req.data)
    .catch(error => error.response.data)

export const getLuzStatus = (userID) => get(`http://localhost:3000/segba/${userID}`)
