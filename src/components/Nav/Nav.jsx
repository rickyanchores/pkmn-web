import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Pokedex",
            href: "/pokedex"
        },
        {
            name: "Poketrainer",
            href: "/poketrainer"
        },
        {
            name: "Sign-in",
            href: "/sign-in"
        },
        {
            name: "Sign-Up",
            href: "/sign-up"
        },
    ]

    return (
        <div className="Nav">
            <h3 className="logo">Pkmn-web</h3>
            <ul className="navlinks">
                {navList.slice(0,3).map(link => {
                    return(
                        <li>
                            <Link className="link" to={link.href}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>

            <div className="signBtns">
                {
                    navList.slice(3,5).map(link => {
                        return(
                            <button className="btn">
                                <Link className="link" to={link.href}>{link.name}</Link>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nav
