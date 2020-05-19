import React, {Component} from 'react';
import '../scss/header.scss';
import {Link} from "react-router-dom";

class Header extends Component{
    render() {
        return(
            <div className="header d-flex">
                <h3 className="header__title">
                    <Link to="/">Star DB</Link>
                </h3>
                <ul className="d-flex header__nav">
                    <li>
                        <Link to="/people">People</Link>
                    </li>
                    <li>
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li>
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
