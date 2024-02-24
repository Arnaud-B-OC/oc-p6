import { Link, useLocation } from "react-router-dom"

function Navigation() {
    const location = useLocation()

    return <nav>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
        <Link to='/about/' className={location.pathname === '/about/' ? 'active' : ''}>A Propos</Link>
    </nav>
}

export default Navigation
