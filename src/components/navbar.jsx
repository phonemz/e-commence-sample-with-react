import react from "react";
import './navbar.css'

function Navbar() {

        const menuList = ['Collections','Men','Women','About','Contact','Kyaw Khaing Oo']
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
                                        <img className="icon" src="src/assets/images/icon-cart.svg" alt="" />
                                        <img className="avatar" src="src/assets/images/image-avatar.png" alt="" />
                                </div>
                        </div>
                </>

                )
}

export default Navbar