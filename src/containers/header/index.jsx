import { Link } from 'react-router-dom'
import useOnScreen from '../../config/useOnScreen';
import './header.sass'
import Navlinks from '../../components/navlinks';

const Header = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    return (
        <header className={`header ${isOnScreen ? 'visible' : ''}`} ref={ref}>
            <div className="header_logo">
                <Link className={'logo_link'} to="/">
                    <img src="/svg/logo.svg" alt="vinola_logo" />
                </Link>
            </div>

            <nav className='header_nav'>
                <Navlinks to='/'>
                    Home
                </Navlinks>
                <Navlinks to='/aboutme'>
                    Sobre mim
                </Navlinks>
            </nav>
        </header>
  )
}

export default Header
