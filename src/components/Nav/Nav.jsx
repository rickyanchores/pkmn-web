import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const Nav = () => {
    //CREATE NAVLIST
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
            name: "Sign-up",
            href: "/sign-up"
        },
    ]


    return (
        <div className="Nav">
            <h3>Nav</h3>
            <ul className="navlinks">
                {navList.slice(0,3).map(link => {
                    return(
                        <li>
                            <Link to={link.href}>{link.name}</Link>
                        </li>
                    )
                })}
            </ul>

            <div className="signBtns">
                {
                    navList.slice(3,5).map(link => {
                        return(
                            <button>
                                <Link to={link.href}>{link.name}</Link>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nav
