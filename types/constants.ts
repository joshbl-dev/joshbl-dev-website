import axios, { AxiosInstance } from "axios";
import { BaseUrl } from "./BaseUrl";

export const AXIOS_INSTANCE: AxiosInstance = axios.create({
	baseURL: BaseUrl.JOSHBL_API
})
