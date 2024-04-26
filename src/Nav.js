import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();

    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar);
        return () => window.removeEventListener("click", transitionNavbar);
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contains">
                <img
                    onClick={() => navigate('/')}
                    className='nav__logo'
                    src="https://imgs.search.brave.com/o_Qfx8kjPHmgW0HIEMncXFwKp9f3nxAjtmPl3sBE9lU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubmZseGV4dC5j/b20vZmZlL3NpdGV1/aS9hY3F1aXNpdGlv/bi9ob21lL25mbHhs/b2dvLnBuZw"
                    alt=""
                />

                <img
                    onClick={() => navigate('/profile')}
                    className='nav__avatar'
                    src="https://imgs.search.brave.com/aU6CeYBb4NgwoFxaVOrM96ESHutGwLRthGVpbClZjzk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvbmV0/ZmxpeC1wcm9maWxl/LXBpY3R1cmVzLTEw/MDAteC0xMDAwLTJm/ZzkzZnVuaXB2cWZz/OWkuanBn"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav