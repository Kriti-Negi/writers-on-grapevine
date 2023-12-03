import logo from '../images/circle-logo.png';
import '../styles/defaults.css';

function Navbar(){
    return (
        <nav className="navbar">
            <img src = {logo} alt = "logo"/>
            <h1 className='main-heading'>Writer's on the Grapevine</h1>
        </nav>
    )
}

export default Navbar;