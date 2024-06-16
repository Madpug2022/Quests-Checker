import { requests } from ".."

const QUESTS_API = {
    getMockedQuests: async () => {
        try {
            const response = await requests.get("/quests");
            return response;
        } catch (error) {
            throw error
        }
    }
}

export default QUESTS_API;
