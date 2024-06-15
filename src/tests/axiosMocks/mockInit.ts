import { QPClient } from "@/clientApi";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(QPClient, { delayResponse: 200 });

export default apiMock;
