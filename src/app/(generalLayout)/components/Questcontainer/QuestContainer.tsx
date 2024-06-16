"use client"
import "./style.scss"
import QUESTS_API from "@/clientApi/questsApi"
import Box from "@/components/ui/Box/Box"
import Loader from "@/components/ui/Loader/Loader"
import { QuestI } from "@/interfaces/quest"
import { Fragment, useState, useCallback, useEffect } from "react"
import QuestCard from "../QuestCard/QuestCard"

//Se que en nextjs pueden hacerse peticiones a traves de metodos SSR, pero como no se ha especificado el framework que se utilizara
//He decidido hacerlo de la manera clasica, ya que no se especifica si se utilizara nextjs o no.

const QuestContainer = () => {
    const [quests, setQuests] = useState<QuestI[] | []>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchQuests = useCallback(async () => {
        try {
            setLoading(true)
            const response = await QUESTS_API.getMockedQuests();
            setQuests(response)
        } catch (error) {
            setError("An error occurred while fetching quests.")
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchQuests()
    }, [])

    return (
        <Fragment>
            <Box title="Quests" tutorial="Quests are a way to earn rewards." >
                {loading && <Loader />}
                {error && <p>{error}</p>}
                {quests.length === 0 && !loading && !error && <QuestCard completed />}
                {quests.length > 0 &&
                    <ul className="quests__list custom-scrollbar">
                        {quests.map((quest) => (
                            <QuestCard key={quest.id} quest={quest} />
                        ))}
                    </ul>
                }
            </Box>
        </Fragment>
    )
}

export default QuestContainer
