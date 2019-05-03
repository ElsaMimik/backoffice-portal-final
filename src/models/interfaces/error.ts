export interface IError {
    traceId: string;
    error: IErrorData;
}

export interface IErrorData {
    code: string;
    message: string;
}
