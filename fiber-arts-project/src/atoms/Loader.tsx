import './atoms-styles/Loader.css'

// resource for loader: https://loading.io/css/

export default function Loader () {
    return (
        <div>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}