import PieceLabel from "./PieceLabel";

function Card(props){
    return (
        <div className="card">
            <h3>{props.cardTitle}</h3>
            <p className="author">{props.author}</p>
            <p className="short">{props.piece.substring(0, 400)}</p>
            <PieceLabel
                pieceType = {props.type}
                color = '#B491D8'
            />
        </div>
    )
}

export default Card;