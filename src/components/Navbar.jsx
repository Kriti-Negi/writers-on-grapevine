import logo from '../images/circle-logo.png';
import '../styles/defaults.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return (
        <nav className="navbar">
            <Link to = "/">
                <img src = {logo} alt = "logo"/>
            </Link>
            <h1 className='main-heading'>Writer's on the Grapevine</h1>
        </nav>
    )
}

export default Navbar;