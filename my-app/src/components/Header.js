import React, {Component} from 'react';
import '../scss/header.scss';

class Header extends Component{
    render() {
        return(
            <div className="header d-flex">
                <h3 className="header__title">Star DB</h3>
                <ul className="d-flex header__nav">
                    <li>
                        <a href="https://www.yandex.ru">People</a>
                    </li>
                    <li>
                        <a href="https://www.yandex.ru">Planets</a>
                    </li>
                    <li>
                        <a href="https://www.yandex.ru">Starships</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;
