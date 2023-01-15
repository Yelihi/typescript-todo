import axios, { AxiosRequestConfig, AxiosHeaders } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:8080",
};

export const client = axios.create(axiosConfig);

// login
export interface IResult {
  config: any;
  data: { message: string; token: string };
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export const tryToLogin = async (props: LoginProps) => {
  try {
    const result: IResult = await client.post("/users/login", props);
    localStorage.setItem("Token", result.data.token);
    alert(result.data.message);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    } else {
      console.log("unexpected error", error);
    }
  }
};

// signup

export interface SignUpProps {
  email: string;
  password: string;
}

export const addToAccount = async (props: SignUpProps) => {
  try {
    const result: IResult = await client.post("/users/create", props);
    alert(result.data.message);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error);
    } else {
      console.log("unexprected error", error);
    }
  }
};
