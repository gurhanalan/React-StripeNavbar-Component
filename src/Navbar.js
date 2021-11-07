import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("link-btn")) {
            closeSubmenu();
        }
    };

    const displaySubmenu = (e) => {
        const text = e.target.textContent;
        const { left, right, bottom } = e.target.getBoundingClientRect();
        const leftPosition = (left + right) / 2;
        const bottomPosition = bottom - 3;
        const position = { leftPosition, bottomPosition };
        openSubmenu(text, position);
    };
    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="" />
                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            products
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            developers
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseOver={displaySubmenu}
                        >
                            company
                        </button>
                    </li>
                </ul>
                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    );
};

export default Navbar;
