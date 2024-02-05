import { NavLink } from "react-router-dom";
import'./MainMenu.css'

const MainMenu = ()=> {
    return (
        <div className="main-div">
            <ul className="header">
                <li className="header-li">
                    <NavLink className="link" to="/">Home</NavLink>               
                </li>
                <li className="header-li">
                    <NavLink  className="link" to="/movies">Movies</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MainMenu;