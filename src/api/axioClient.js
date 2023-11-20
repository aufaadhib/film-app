import axios from "axios";
import queryString from "query-string";

import apiConfig from "./apiConfig";

const axiosClient = axios.create({
    baseURL :apiConfig.baseURL,
    headers:{
        'content-type':'application/json'
    },
    paramsSerializer: param => queryString.stringify({...param, api_key:apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async (config) => config);
axiosClient.interceptors.request.use((response) =>{
    if (response && response.data){
        return response.dataa;
    }

    return response;
}, (error)=>{
    throw error;
});

export default axiosClient;