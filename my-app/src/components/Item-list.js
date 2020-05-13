import React, {Component} from 'react';

class ItemList extends Component{
    render() {
        return(
            <div className="item-list">
                <ul className="item-list list-group">
                    <li className="list-group-item">
                        Петя
                    </li>
                    <li className="list-group-item">
                       Вася
                    </li>
                    <li className="list-group-item">
                        Мадам
                    </li>
                </ul>
            </div>
        )
    }
}

export default ItemList;
