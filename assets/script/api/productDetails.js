
const getRequest = (productId) => {
    return {
        url: `${process.env.NEXT_PUBLIC_DATA_URL_BASE}/productDetails/${productId}`,
        obj: {
            method: "GET",
            headers: {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "text/plain"
            }
        }
    };
};

const getFetch = (productId) => {
    const request = getRequest(productId);

    return fetch(request.url, request.obj).then((response) => {
        return response.json();
    }).catch((err) => {
        throw err
    });
};

const app = {
    getRequest: getRequest,
    getFetch: getFetch
};

export default app;