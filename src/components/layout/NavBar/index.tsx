import LoginButton from "./LoginButton"
import NavSearcher from "./NavSearcher"
import NavTitle from "./NavTitle"
import "./styles.scss"
const NavBar = () => {
    return (
        <nav className="navbar__container">
            <NavTitle />
            <NavSearcher />
            <LoginButton />
        </nav>
    )
}

export default NavBar
