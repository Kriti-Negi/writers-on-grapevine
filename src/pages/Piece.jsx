import { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import files from "../Pieces";

function Piece(){
    const [content, setContent] = useState([]);
    const [fileObject, setFileObject] = useState(findFileName);

    function findFileName(){
        let url = window.location.href.split("/");
        let fileIndex = url[url.length - 1];

        setContent(files[fileIndex].content.split("\n"))
        return (files[fileIndex]);
    }

    function createContent(){
        if(content.length > 0){
            return (
                <div>{content.map((elem, index) => <p key = {index}> {elem} &nbsp; </p>)}</div>
            )
        }else{
            return <p> </p>
        }
    }

    return (
        <div className="main-page">
            <Navbar/>
            <main>
                <h3 className="title">{fileObject.title}</h3>
                <p className="author">{fileObject.author}</p>
                <p className="published">{fileObject.published}</p>
                <div className="content">{createContent()}</div>
            </main>
            <Footer/>
        </div>
    )
}

export default Piece;