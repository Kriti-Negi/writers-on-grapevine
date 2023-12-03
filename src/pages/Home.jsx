import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PieceLabel from "../components/PieceLabel";

function Home(){
    return (
        <div className="main-page">
            <Navbar/>
            <div className="cards">
                <Card
                    cardTitle = "A Poem"
                    author = "Men's Dess Shoes"
                    piece = "A piece. asdkfljsakdfj sadfklsd flksadj fklsd fksaldf "
                    type = "A Poem"
                />
                <Card
                    cardTitle = "A Poem"
                    author = "Men's Dess Shoes"
                    piece = "A piece. asdkfljsakdfj sadfklsd flksadj fklsd fksaldf "
                    type = "A Poem"
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Home;