import React, {Component} from 'react';
import Api from "../service/Api";
import Loader from "./Loader";
import '../scss/itemList.scss';

class ItemListPeople extends Component{

    constructor(props) {
        super(props);
        this.state = {
            peopleList: null
        }
    }

    //Создамим элемент класса c Api
    swapiAPI = new Api();

    componentDidMount() {
        this.swapiAPI.getAllPerson()
            .then(data => {
                this.setState({
                    peopleList: data.results
                })
            })

    };

    render() {

        //Показать Loader - пока нет данных о персоонаже
        if (!this.state.peopleList) {
            return <Loader/>
        }

        return(
            <div className="item-list">
                <ul className="item-list list-group">
                    {this.state.peopleList.map((item, itemId) => {
                        return (
                                <li
                                    key={itemId}
                                    className="list-group-item"
                                    onClick={() => this.props.onItemSelected(itemId+1)} //Принимаем метод в качестве props и переадем ItemId в компонент PagePerson
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

export default ItemListPeople;
