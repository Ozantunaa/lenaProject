export const fetchData = async (page) => {
    try {
        const response = await fetch(`https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=3`);
        const json = await response.json();
        return json.result
    } catch (error) {
        console.log(error)
    };
};