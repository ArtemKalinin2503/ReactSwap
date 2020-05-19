import React, {Component} from 'react';
import Api from "../service/Api";
import '../scss/personDetails.scss';

class PersonDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            person: null
        }
    }

    //Создамим элемент класса c Api
    swapiAPI = new Api();

    //Метод получает id выбранного персоонажа в props.personId
    updatePerson = () => {
        if (!this.props.itemId) {
            return;
        }
        //Метод который получает данные о персоонаже
        this.swapiAPI.getPerson(this.props.itemId)
            .then(data => {
                this.setState({
                    person: data
                })
            })
    };

    componentDidMount() {
        this.updatePerson();
    }

    //Метод сработает только при повторном изменение state (prevProps - это встроенный параметр)
    componentDidUpdate(prevProps) {
        //Если personId не равен предыдущему значению
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
    }

    render() {

        if(!this.state.person) {
            return <h3>Select person</h3>
            console.log('1111')
        }

        return(
            <div className="person-details">
                <div className="card-body">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${this.props.itemId}.jpg`}
                         alt={this.state.person.name}
                         className="person-details__img"
                    />
                    <div className="person-details__info">
                        <h4>{this.state.person.name}</h4>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item person-details__item">
                                <span className="term">Gender </span>
                                <span>{this.state.person.gender}</span>
                            </li>
                            <li className="list-group-item person-details__item">
                                <span className="term">Birth Year </span>
                                <span>{this.state.person.birth_year}</span>
                            </li>
                            <li className="list-group-item person-details__item">
                                <span className="term">Eye Color </span>
                                <span>{this.state.person.eye_color}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default PersonDetails;
