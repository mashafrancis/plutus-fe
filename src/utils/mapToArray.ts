/**
 * This function converts an array of object to an array of array
 * @returns array of array
 */
const mapToArray = (arr: Array<Record<string, any>>) =>
	arr.map((obj) => Object.keys(obj).map((key) => obj[key]));

export default mapToArray;
