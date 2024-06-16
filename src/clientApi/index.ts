import applyMockAdapter from "@/tests/axiosMocks/mockInit";
import axios, { AxiosResponse } from "axios";

// Inicializacion de un cliente de axios personalizado

export const QPClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        Accept: "application/json",
    },
    timeout: 15000,
    timeoutErrorMessage: "Request timed out",
});

const useMock = true;

if (useMock) {
    applyMockAdapter(QPClient);
}

const responseBody = (response: AxiosResponse) => response.data;

const addContentTypeHeader = (contentType: string) => {
    QPClient.defaults.headers.common["Content-Type"] = contentType;
};

const removeContentTypeHeader = () => {
    delete QPClient.defaults.headers.common["Content-Type"];
};

export const requests = {
    async request(
        method: "get" | "post" | "put" | "delete",
        url: string,
        body?: any,
        contentType?: string,
    ) {

        if (contentType) {
            addContentTypeHeader(contentType);
        } else {
            removeContentTypeHeader();
        }

        try {
            const response = await QPClient[method](url, body);
            return responseBody(response);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data || error.message);
            } else {
                console.error('Unknown error:', error);
            }
            throw error;
        }
    },

    get: (url: string, body?: any) => requests.request("get", url, body),
    post: (url: string, body?: any, contentType?: string) => requests.request("post", url, body, contentType),
    put: (url: string, body?: any, contentType?: string) => requests.request("put", url, body, contentType),
    delete: (url: string, body?: any) => requests.request("delete", url, body),
};
