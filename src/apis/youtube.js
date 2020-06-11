import axios from "axios";
const KEY = "AIzaSyCbsZYm9YmkYNw-_Omq4PffsKvqVMW7Y6g";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY
    }
});