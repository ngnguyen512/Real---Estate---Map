import { useState } from "react";
import './navbar.scss';
function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="left">
                <a href='/' className='resize-image' >
                    <img src="/logo.png" alt=""  />
                    <span>Everland</span>
                </a>
                <a href ='/'>Home</a>
                <a href ='/'>About</a>
                <a href ='/'>Contact</a>
            </div>
            <div className="right">
                <a href='/'>Agents</a>
                <a href='/'>Sign In</a>
                <a href='/' className='sign-up'>Sign Up</a>
                <div className='menuIcon'>
                    <img src="/menu.png" alt="" onClick={()=>setOpen((prev) => !prev)} />
                </div>
                <div className={open ? 'menu active': "menu"}>
                    <a href ='/'>Home</a>
                    <a href ='/'>About</a>
                    <a href ='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/'>Sign In</a>
                    <a href='/'>Sign Up</a>
                </div>
            </div>
        </nav>
    )

}
export default Navbar;
