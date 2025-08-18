import MenuList from "./menu-list"
import { useState } from "react";

export default function MenuItem({ item }) {

    const [isOpen, setIsOpen] = useState(false);

    function handleToggleChildren() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="menu-item">
            <div className="menu-item-header" onClick={handleToggleChildren}>
                <p className="menu-item-label">{item.label}</p>
                {
                    item && item.children && item.children.length > 0 ?
                        <span className="toggle-button">
                            {isOpen ? '-' : '+'}
                        </span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && isOpen ? (
                    <div className="menu-children">
                        <MenuList list={item.children} />
                    </div>
                ) : null
            }
        </div>
    )
}