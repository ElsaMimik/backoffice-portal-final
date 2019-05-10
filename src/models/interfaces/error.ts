export interface IError {
	traceId: string;
	error: IErrorData;
}

interface IErrorData {
	code: string;
	message: string;
}
