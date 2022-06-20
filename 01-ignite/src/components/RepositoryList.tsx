import { useEffect, useState } from "react"
import "../styles/repositories.scss"
import { RepoPropTypes } from "../types/repos"

import { RepositoryItem } from "./RepositoryItem"


export const RepositoryList = () => {
    const [ repositories, setRepository ] = useState<RepoPropTypes[]>([])
    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepository(data))
    }, [])
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            {repositories.map(rep => <RepositoryItem key={rep.name} {...rep} />)}
        </section>
    )
}