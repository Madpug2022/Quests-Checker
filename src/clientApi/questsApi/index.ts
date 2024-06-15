import { requests } from ".."

const QUESTS_API = {
    getMockedQuests: async () => {
        try {
            const response = await requests.get("/quests");
            return response;
        } catch (error) {
            console.error("Error getting quests", error);
            return error;
        }
    }
}

export default QUESTS_API;
