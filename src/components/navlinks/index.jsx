/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom'
import './navlinks.sass'

const Navlinks = ({ children, to }) => {   
    const location = useLocation();

    return (
        <Link className={`
                ${'nav_link'}
                ${location.pathname === to ? 'nav_link_active' : ""} 
            `}
            to={to}>
            {children}
        </Link>
    )
}

export default Navlinks
