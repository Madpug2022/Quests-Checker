import { QPClient } from "@/clientApi";
import MockAdapter from "axios-mock-adapter";
import QUESTS_MOCKS from "../mocks/questMocks";
import { GET_QUESTS_ROUTE } from "./mockRoutes";
import { AxiosInstance } from "axios";

export default function applyMockAdapter(axiosInstance: AxiosInstance) {
    const apiMock = new MockAdapter(QPClient, { delayResponse: 200 });

    apiMock.onGet(GET_QUESTS_ROUTE).reply(200, QUESTS_MOCKS);

    apiMock.onAny().passThrough();
}
