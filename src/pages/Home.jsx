import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieceLabel from "../components/PieceLabel";

const pieces = require.context('../JsonFiles', true);
const pieceList = pieces.keys().map(piece => pieces(piece));
const pieceValues = pieces.keys();

function Home(){
    return (
        <div className="main-page">
            <Navbar/>
            <div className="cards">
            {pieceList.map((piece, index) => {
                if(pieceValues[index].substring(pieceValues[index].length - 2) == "js"){
                    return;
                }
                return <Card
                    key = {index}
                    index = {pieceValues[index]}
                    cardTitle = {piece.default.title}
                    author = "Men's Dess Shoes"
                    piece = "A piece. asdkfljsakdfj sadfklsd flksadj fklsd fksaldf "
                    type = "A Poem"
                />
            })}

                
            </div>
            <Footer/>
        </div>
    )
}

export default Home;