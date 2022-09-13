import axios from "axios";
import { getNewToken } from "./auth";
export const API = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
})

API.interceptors.request.use((req) => {
    if (localStorage.getItem('access_token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    }

    return req;
});
API.interceptors.response.use(
    (response) => response,
    async function (error) {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            originalRequest.url === `${process.env.REACT_APP_BASEURL}/auth/refresh-tokens`
        ) {
            console.log('mistake')
            localStorage.clear()
            window.location.replace("http://localhost:3000/login");
            return Promise.reject(error);
        }
        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            try {
                console.log("get api again");
                const { data: { data } } = await getNewToken(
                    localStorage.getItem("refresh_token")
                );
                console.log("refreshTokenData", data)
                localStorage.setItem("access_token", data.access.token);
                localStorage.setItem("refresh_token", data.refresh.token);
                axios.defaults.headers.common["Authorization"] =
                    "Bearer" + localStorage.getItem("access_token");

                return API(originalRequest);
            } catch (error) {
                console.log('mistake')
                localStorage.clear()
                window.location.replace("http://localhost:3000/login");
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);