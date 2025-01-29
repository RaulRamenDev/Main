import './Header.css'
import logo from '../assets/img/logo.jpeg'
export function Header({isLogged}){
    return(
        <header className="hd-main">
            <nav className="hd-main-nav">
                <a className="hd-main-nav-logo" href="">
                    <img className="hd-main-nav-logo-img" src={logo} alt="imagen" />
                </a>
                
                <ul className='hd-main-nav-ul'>
                    <li className="hd-main-nav-li"><a  href="">
                        <span>Citas</span>
                    </a></li>
                    <li className="hd-main-nav-li"><a  href="">
                        <span>Log in</span>
                    </a></li>
                </ul>
            </nav>
        </header>
    )
}