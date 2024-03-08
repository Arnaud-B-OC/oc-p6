import Navigation from "./NavigationMenu"
import './header.scss'

function Header() {
    return <header>
        <img src='/assets/logo.svg' alt="kasa logo"/>
        <Navigation/>
    </header>
}

export default Header
