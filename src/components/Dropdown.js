import React , {useState} from "react";
import "./components.css";

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown" onMouseMove={handleClose}>
            <div className="dropdown-trigger" onClick={handleToggle}>
               <span className="trigger-text Darker Grotesque-bold">Menu</span>
               <span className="material-symbols-outlined">{isOpen ? "Joe":"Kaleli"}</span>
            </div>
            {isOpen && (
            <div className="dropdown-menu">
                    <a className="dropdown-item Darker Grotesque" href="/About">
                    About
                    </a>
                    <a className="dropdown-item Darker Grotesque" href="/Experience">
                    Experience
                    </a><a className="dropdown-item Darker Grotesque" href="/Projects">
                    Projects
                    </a><a className="dropdown-item Darker Grotesque" href="/Contact">
                    Contact
                    </a>
            </div>
            )}
        </div>)
        
        
}

export default Dropdown;