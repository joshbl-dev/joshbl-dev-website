import axios, { AxiosInstance } from "axios";
import { BaseUrl } from "./BaseUrl";

export const axiox: AxiosInstance = axios.create({
	baseURL: BaseUrl.JOSHBL_API
})