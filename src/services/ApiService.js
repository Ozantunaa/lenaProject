import { API_LINK } from "../constants";

export const fetchData = async () => {
    try {
        const response = await fetch(API_LINK);
        const json = await response.json();
        return json.result
    } catch (error) {
        console.log(error)
    };
};