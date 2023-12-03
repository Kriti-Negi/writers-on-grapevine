import PieceLabel from "./PieceLabel";
import { Link } from "react-router-dom";

function Card(props){
    return (
        <div className="card">
            <Link to = {"/" + props.index} style = {{textDecoration: 'none', color: '#000'}}>
                <h3>{props.cardTitle}</h3>
                <p className="author">{props.author}</p>
                <p className="short">{props.piece.substring(0, 400)}</p>
                <PieceLabel
                    pieceType = {props.type}
                    color = '#B491D8'
                />
            </Link>
        </div>
    )
}

export default Card;