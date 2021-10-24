import { useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import MenuIcon from "./icons/MenuIcon";
import Menu from "./Menu";

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    function alternateIcon() {
        console.log('Alternating');
        setIsOpen(!isOpen);
    }

    return(
        <nav className="w-full flex flex-col px-2 py-1 sticky">
            <div onClick={alternateIcon}>
                { isOpen ? 
                    <CloseIcon classes="ml-auto h-10    w-10 stroke text-white"/> 
                    :
                    <MenuIcon classes="ml-auto h-10 w-10 stroke text-white"/>
                }
            </div>
            { isOpen && <Menu /> }
        </nav>
    )
}

export default Navbar;