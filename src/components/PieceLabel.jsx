function PieceLabel(props){
    return (
        <div className="label-container">
            <div className="label" style={{backgroundColor: props.color}}>
                <p>{props.pieceType}</p>
            </div>
        </div>
    )
}

export default PieceLabel;