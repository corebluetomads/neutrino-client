export interface IErrorBase {
  messages: object | unknown
}

export interface IResponseError extends IErrorBase {
  status: string | number | unknown
}

export {}
