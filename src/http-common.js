import axios from "axios";

export default axios.create({
  baseURL: "https://65e83bc64bb72f0a9c4eac3a.mockapi.io/userContacts",
  headers: {
    "Content-type": "application/json",
  },
});
