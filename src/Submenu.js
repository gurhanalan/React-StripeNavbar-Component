import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
    const {
        isSubmenuOpen,
        submenuPosition,
        submenuItem: { page, links },
    } = useGlobalContext();
    const [columns, setColumns] = useState("col-2");
    const container = useRef(null);

    useEffect(() => {
        setColumns("col-2");

        const { leftPosition, bottomPosition } = submenuPosition;

        container.current.style.left = `${leftPosition}px`;
        container.current.style.top = `${bottomPosition}px`;

        if (links && links.length === 3) {
            setColumns("col-3");
        }
        if (links && links.length > 3) {
            setColumns("col-4");
        }
    }, [submenuPosition, page, links]);
    return (
        <aside
            className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
            ref={container}
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {links &&
                        links.map((link, index) => {
                            const { url, icon, label } = link;
                            return (
                                <a key={index} href={url}>
                                    {icon}
                                    {label}
                                </a>
                            );
                        })}
                </div>
            </section>
        </aside>
    );
};

export default Submenu;
