import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const http = {
  get: async <T>(url: string, params?:Record<string, any>): Promise<T> => {
    const { data } = await axiosInstance.get<T>(url,params);
    return data;
  },
  post: async <T>(url: string, body?: any): Promise<T> => {
    const { data } = await axiosInstance.post<T>(url, body);
    return data;
  },
  patch: async <T>(url: string, body?: any): Promise<T> => {
    const { data } = await axiosInstance.patch<T>(url, body);
    return data;
  },
  delete: async <T>(url: string): Promise<T> => {
    const { data } = await axiosInstance.delete<T>(url);
    return data;
  },
};