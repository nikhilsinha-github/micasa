// import axios from "axios";
// let baseURL = "https://api-micasa.herokuapp.com/api";

// let userInfo = JSON.parse(localStorage.getItem("userInfo"));

// const instance = axios.create({
//   baseURL: baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//     //Authorization: userInfo ? userInfo.token : null,
//   },
//   timeout: 60000,
// });

// let statusCode = [401, 403];

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response && statusCode.includes(error.response.status)) {
//       localStorage.removeItem("userInfo");
//       window.location.href = `/login`;
//     }

//     return Promise.reject(error);
//   }
// );

// export default instance;
