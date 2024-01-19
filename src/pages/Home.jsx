import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieceLabel from "../components/PieceLabel";

import files from "../Pieces";

function Home(){
    return (
        <div className="main-page">
            <Navbar/>
            <div className="cards">
            {files.map((piece, index) => {
                return <Card
                    key = {index}
                    index = {index}
                    cardTitle = {piece.title}
                    author = {piece.author}
                    piece = {piece.content.substring(0, 50) + "..."}
                    type = {piece.type.toUpperCase()}
                />
            })}

                
            </div>
            <Footer/>
        </div>
    )
}

export default Home;