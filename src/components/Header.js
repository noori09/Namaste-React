import {useState} from 'react';
import Logo from '../assets/Img/Logo.jpg';
import {Link} from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Title = () => (
    <a href='/'>
        <img src={Logo}
            alt="logo"
            className='h-36 p-2' />
    </a>
)

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const isOnline = useOnline();
    return (
        <div className='flex justify-between bg-purple-100 shadow-lg items-center'>
            <Title />
            <div className='nav-items'>
                <ul className='flex py-10'>
                    <Link to="/" className='link-style'>
                    <li className='px-2 text-purple-400 font-bold'>Home</li>
                    </Link>
                    <Link to= '/about' className='link-style'>
                    <li className='px-2 text-purple-400 font-bold'>About</li>
                    </Link> 
                    <Link to= '/contact' className='link-style'>
                    <li className='px-2 text-purple-400 font-bold'>Contact</li>
                    </Link>
                    <Link to= '/instamart' className='link-style'>
                    <li className='px-2 text-purple-400 font-bold'>Instamart</li>
                    </Link>
                    <li className='px-2 text-purple-400 font-bold'>Cart</li>
                </ul>
            </div>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            {isLoggedIn? 
            <button className='text-white font-bold bg-purple-700 rounded-lg p-2 m-6 h-10 w-20' onClick={()=>setIsLoggedIn(false)}>Logout</button>
            :
             <button className='text-white font-bold bg-purple-700 rounded-lg p-2 m-6 h-10 w-20' onClick={()=>setIsLoggedIn(true)}>Login</button>}   
        </div>
    )
}
export default Header;
