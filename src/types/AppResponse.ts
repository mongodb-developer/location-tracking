/**
 * This is a recommended response structure which should be used in every res.send()
 * This will help maintain a uniform response format from API
 */
 export default interface AppResponse {
	data: any;
	isError: boolean;
	errMsg?: string;
	statusCode?: number;
}
