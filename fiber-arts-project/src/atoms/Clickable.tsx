

export default function Clickable (props:{name: string}) {
    console.log(props.name)
    return (
        <div>
            <div>{props.name}</div>
        </div>
    )
}