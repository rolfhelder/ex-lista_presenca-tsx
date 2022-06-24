import './style.css'

export type CardProps = {
    name: string;
    time: string;
    date: string;
}

export function Card(props: CardProps){
    return (
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
            <small>{props.date}</small>
        </div>
    )
}