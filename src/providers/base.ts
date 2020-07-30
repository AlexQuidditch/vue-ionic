/* eslint-disable no-shadow */
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

export const GET = 'get';
export const REMOVE = 'remove';
export const POST = 'post';
export const PUT = 'put';
export const PATCH = 'patch';

export type RequestConfig = AxiosRequestConfig
export type ResponseData<T = unknown> = AxiosResponse<T>
export type ErrorData<T = unknown> = AxiosError<T>

export function transformRequestConfig(config: RequestConfig) {
  return config;
}

export function transformRequestError(error: ErrorData<unknown>) {
  console.error(error.response);
  throw error.response;
}

export function transformResponseConfig(config: ResponseData<unknown>) {
  return config;
}

export function transformResponseError(error: any) {
  console.error(error.response);
  throw error.response;
}

export class BaseRestProvider {
  private readonly agent: AxiosInstance

  public constructor(
    baseURL: string,
    transformRequestConfig?: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>,
    transformRequestError?: (error: AxiosError<unknown>) => unknown,
    transformResponseConfig?: (value: AxiosResponse) => AxiosResponse | Promise<AxiosResponse>,
    transformResponseError?: (error: any) => unknown,
  ) {
    this.agent = axios.create({
      baseURL,
      responseType: 'json',
    });

    if (transformRequestConfig) {
      this.agent.interceptors.request.use(
        transformRequestConfig,
        transformRequestError,
      );
    }

    if (transformResponseConfig) {
      this.agent.interceptors.response.use(
        transformResponseConfig,
        transformResponseError,
      );
    }

    console.info('Provider for', baseURL, 'created at', new Date().toISOString());
  }

  // eslint-disable-next-line class-methods-use-this
  public getCancelToken() {
    return axios.CancelToken.source();
  }

  protected [GET]<T = unknown>(url: string, config?: AxiosRequestConfig) {
    return this.agent.get<T>(url, config);
  }

  protected [REMOVE]<T = unknown>(url: string, config?: AxiosRequestConfig) {
    return this.agent.delete<T>(url, config);
  }

  protected [POST]<T = unknown>(url: string, payload?: unknown, config?: AxiosRequestConfig) {
    return this.agent.post<T>(url, payload, config);
  }

  protected [PUT]<T = unknown>(url: string, payload?: unknown, config?: AxiosRequestConfig) {
    return this.agent.put<T>(url, payload, config);
  }

  protected [PATCH]<T = unknown>(url: string, payload?: unknown, config?: AxiosRequestConfig) {
    return this.agent.patch<T>(url, payload, config);
  }
}
