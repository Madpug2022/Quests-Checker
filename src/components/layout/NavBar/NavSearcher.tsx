import { SlMagnifier } from "react-icons/sl";

const NavSearcher = () => {
    return (
        <div className="navbar__searchbar">
            <button className="navbar__searchbar__button"><SlMagnifier /></button>
            <input type="text" placeholder="Search for companies on CareerOS" className="navbar__searchbar__input" />
        </div>
    )
}

export default NavSearcher
