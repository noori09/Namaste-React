import {useState} from 'react';
import Logo from '../assets/Img/logo.avif';
import {Link} from 'react-router-dom'

const Title = () => (
    <a href='/'>
        <img src={Logo}
            alt="logo"
            className='logo' />
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <Link to="/" className='link-style'>
                    <li>Home</li>
                    </Link>
                    <Link to= '/about' className='link-style'>
                    <li>About</li>
                    </Link> 
                    <Link to= '/contact' className='link-style'>
                    <li>Contact</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            {isLoggedIn? 
            <button className='button' onClick={()=>setIsLoggedIn(false)}>Logout</button>
            :
             <button className='button' onClick={()=>setIsLoggedIn(true)}>Login</button>}   
        </div>
    )
}
export default Header;
