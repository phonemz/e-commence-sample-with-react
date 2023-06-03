import react from "react";
import './navbar.css'
import cartImage from '../assets/images/icon-cart.svg'
import avatarImage from '../assets/images/image-avatar.png'

function Navbar() {

        const menuList = ['Collections','Men','Women','About','Contact']
        return (
                <>
                        <div className="navbar">
                                <div className="first-nav">
                                        <header className="logo">sneakers</header>
                                        <ul className="menu">
                                                {
                                                        menuList.map(item => (
                                                                <li key={item}><a href="">{item} </a></li>
                                                        ))
                                                }
                                        </ul>
                                </div>
                                <div className="second-nav">
                                        <img className="icon" src={cartImage} alt="" />
                                        <img className="avatar" src={avatarImage} alt="" />
                                </div>
                        </div>
                </>

                )
}

export default Navbar