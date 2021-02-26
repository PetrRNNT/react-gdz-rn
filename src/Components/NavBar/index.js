import {NavLink} from "react-router-dom";

import style from './style.module.css'

const NavBar = () => {
    return (
        <nav>
            <ul className={style.navbar}>
                <li className={style.navItem}>
                    <NavLink className={style.navLink} to="/" exact>
                        Форма
                    </NavLink>
                </li>
                <li className={style.navItem}>
                    <NavLink className={style.navLink} to="/palette">
                        Палитра
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar