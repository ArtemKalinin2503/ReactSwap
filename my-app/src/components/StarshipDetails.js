import React, {Component} from 'react';
import Api from "../service/Api";
import '../scss/personDetails.scss';

class StarshipDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            starship: []
        }
    }

    //Создамим элемент класса c Api
    swapiAPI = new Api();

    //Метод получает id выбранного персоонажа в props.personId
    updatePerson = () => {
        if (!this.props.starshipId) {
            return;
        }
        //Метод который получает данные о персоонаже
        this.swapiAPI.getStarship(this.props.starshipId) //Props starshipId - передали в компоненте App.js
            .then(data => {
                this.setState({
                    starship: data
                })
            })
    };

    componentDidMount() {
        this.updatePerson();
    }

    //Метод сработает только при повторном изменение state (prevProps - это встроенный параметр)
    componentDidUpdate(prevProps) {
        //Если personId не равен предыдущему значению
        if (this.props.starshipId !== prevProps.starshipId) {
            this.updatePerson();
        }
    }

    render() {
        return(
            <div className="person-details">
                <div className="card-body">
                    <img src={`https://starwars-visualguide.com/assets/img/starships/${this.props.starshipId}.jpg`}
                         alt={this.state.starship.name}
                         className="person-details__img"
                    />
                    <div className="person-details__info">
                        <h4>{this.state.starship.name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item person-details__item">
                                <span className="term">Model: </span>
                                <span>{this.state.starship.model}</span>
                            </li>
                            <li className="list-group-item person-details__item">
                                <span className="term">Starship class: </span>
                                <span>{this.state.starship.starship_class}</span>
                            </li>
                            <li className="list-group-item person-details__item">
                                <span className="term">Length: </span>
                                <span>{this.state.starship.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default StarshipDetails;
