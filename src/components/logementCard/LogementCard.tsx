import { Link } from "react-router-dom"

function LogementCard({ id, cover, title } : { id: string, cover: string, title: string }) {
    return <Link to={`/logements/${id}`}>
        <article>
            <img src={cover} alt=''/>
            <h2>{title}</h2>
        </article>
    </Link>
}

export default LogementCard
