import Axios, { AxiosResponse } from "axios";

type MethodTypes = "post" | "get";

interface FetchReturnNode {
  status?: number | undefined;
  data?: any | undefined;
  message?: string | undefined;
  hasError?: boolean;
}

interface ResponseNode {
  name: string;
  token: string;
}

const axiosFetch = async (
  url: string,
  method: MethodTypes,
  body: object,
  options?: object
) => {
  let res;
  switch (method) {
    case "post":
      res = await Axios.post<ResponseNode>(url, body, options);
      return res;
    case "get":
      res = await Axios.post<ResponseNode>(url, body, options);
      return res;
  }
};

export const customFetch = async (
  url: string,
  body: Object,
  method: MethodTypes,
  options?: Object
) => {
  try {
    const fetchData: AxiosResponse<ResponseNode> = await axiosFetch(
      url,
      method,
      body,
      options
    );

    const { data } = fetchData;
    const successResponse: FetchReturnNode = {
      status: fetchData.status,
      data: data,
    };

    return successResponse;
  } catch (error) {
    const errorResponse: FetchReturnNode = {
      hasError: true,
      message: error.response.data.message,
    };

    return errorResponse;
  }
};
