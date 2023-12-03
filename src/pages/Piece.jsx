import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieceLabel from "../components/PieceLabel";

function Piece(){
    return (
        <div className="main-page">
            <Navbar/>
            <main>
                <h3 className="title">A piece</h3>
                <p className="author">autho</p>
                <p className="published">Published 1/12/24</p>
                <p className="content">asdfsadfsadf</p>
            </main>
            <Footer/>
        </div>
    )
}

export default Piece;