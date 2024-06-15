import QUESTS_MOCKS from "../mocks/questMocks";
import apiMock from "./mockInit";
import { GET_QUESTS_ROUTE } from "./mockRoutes";

//RUTA GET QUESTS
apiMock.onGet(GET_QUESTS_ROUTE).reply(200, QUESTS_MOCKS);
