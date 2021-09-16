import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const Nav = () => {
    return (
        <div className="Nav">
            <h3>Nav</h3>
            <ul className="navlinks">
                <li>
                    <Link to="" smoooth >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="" smoooth >
                        MyAccount
                    </Link>
                </li>
                <li>
                    <Link to="" smoooth >
                        Pokedex
                    </Link>
                </li>
                <li>
                    <Link to="" smoooth >
                        Userlist
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav
