import './style.css'
import img from './img_avatar2.png'
function Card(props){
    return(
        <div className="card">
            <img src={img} alt="not available" width="100%"/>
            <div className="container">
            <h1>{props.name}</h1>
            <p>{props.branch}</p>
            <p>{props.special}</p>
            </div>
        </div>
    )
}

export default Card;