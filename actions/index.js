const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAnimeResponse = async (endpoint, query) => {
    const response = await fetch(`${BASE_URL}/${endpoint}?${query}`);
    return response.json();
};

export const getNestedAnimeResponse = async (endpoint, objectProperty) => {
    const response = await getAnimeResponse(endpoint);
    return response?.data?.flatMap((item) => item.entry);
};
