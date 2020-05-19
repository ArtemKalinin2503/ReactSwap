import React, {Component} from 'react';
import Api from "../service/Api";
import Loader from "./Loader";
import '../scss/itemList.scss';

class ItemListStarship extends Component{

    constructor(props) {
        super(props);
        this.state = {
            starShipsList: null
        }
    }

    //Создамим элемент класса c Api
    swapiAPI = new Api();

    componentDidMount() {
        this.swapiAPI.getAllStarships()
            .then(data => {
                this.setState({
                    starShipsList: data.results
                })
            })

    };

    render() {

        //Показать Loader - пока нет данных о персоонаже
        if (!this.state.starShipsList) {
            return <Loader/>
        }

        return(
            <div className="item-list">
                <ul className="item-list list-group">
                    {this.state.starShipsList.map((item, itemId) => {
                        return (
                            <li
                                key={itemId}
                                className="list-group-item"
                                onClick={() => this.props.onItemSelected(itemId+1)} //Принимаем метод в качестве props
                            >
                                {item.name}
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ItemListStarship;
