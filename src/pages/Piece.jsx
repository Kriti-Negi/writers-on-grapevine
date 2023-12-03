import { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieceLabel from "../components/PieceLabel";

const pieces = require.context('../JsonFiles', true);
const pieceList = pieces.keys().map(piece => pieces(piece));
const pieceValues = pieces.keys();

function Piece(){
    const [content, setContent] = useState([]);
    const [fileObject, setFileObject] = useState(findFileName);

    function findFileName(){
        let url = window.location.href.split("/")[5];
        const index = pieceValues.indexOf("./" + url);
        console.log(pieceList[index].default.content.split("\n"));
        setContent(pieceList[index].default.content.split("\n"))
        return (pieceList[index]);
    }

    function createContent(){
        if(content.length > 0){
            return (
                <div>{content.map((elem, index) => <p key = {index}>{elem}</p>)}</div>
            )
        }else{
            return <p></p>
        }
    }

    return (
        <div className="main-page">
            <Navbar/>
            <main>
                <h3 className="title">{fileObject.default.title}</h3>
                <p className="author">{fileObject.default.author}</p>
                <p className="published">{fileObject.default.published}</p>
                <div className="content">{createContent()}</div>
            </main>
            <Footer/>
        </div>
    )
}

export default Piece;