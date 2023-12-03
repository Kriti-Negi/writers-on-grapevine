import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieceLabel from "../components/PieceLabel";

function Piece(){
    return (
        <div className="main-page">
            <Navbar/>
            <h3>A piece</h3>
            <p className="author">autho</p>
            <p className="short">asdfsadfsadf</p>
            <Footer/>
        </div>
    )
}

export default Piece;