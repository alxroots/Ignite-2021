import { RepoPropTypes } from "../types/repos"

export const RepositoryItem = (props: RepoPropTypes) => {
    return (
        <li>
            <strong>{props.name}</strong>
            <p>{props.description}</p>
            <a href={props.html_url}>Acessar Repositório</a>
        </li>
    )
}