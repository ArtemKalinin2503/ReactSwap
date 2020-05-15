import React, {Component} from 'react';
import Loader from "./Loader";
//Api
import Api from "../service/Api";
import ErrorIndicator from "./ErrorIndicator";
import '../scss/randomPlanet.scss';
//Компонент выводит данные о планете
class RandomPlanet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
            loading: true,
            error: false
        }
    };

    //Создамим элемент класса c Api
    swapiAPI = new Api();

    //Метод который получает данные о планете
    loadedPlanet = (id) => {
        this.swapiAPI.getPlanets(id) //Метод getPlanets получает данные с Api (описан в Api.js)
            .then(data => { //В data прейдет ответ от сервера
                this.state.loading = false; //Скроем loader
                this.setState({
                    id: id,
                    name: data.name,
                    population: data.population,
                    rotationPeriod: data.rotation_period,
                    diameter: data.diameter
                })
            })
            .catch(this.onError); //Если будет ошибка вызовим данный метод
    };

    //Метод для показывания ошибки
    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    componentDidMount() {
       this.interval = setInterval((id) => {
            id = Math.floor(Math.random() *  25) + 2; //Для генерации случчайного id при каждой загрузке компонента
            this.loadedPlanet(id)
        }, 3500)

    };

    //Данный метод срабатывает когда компонент удаляеться
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="random-planet">
                {/*Если есть ошибка*/}
                {this.state.error ?
                    <ErrorIndicator/>
                    :
                    <div>
                        {this.state.loading ?
                            <Loader/>
                            :
                            <div className="random-planet__info">
                                <img className="planet-image"
                                     src={`https://starwars-visualguide.com/assets/img/planets/${this.state.id}.jpg`}
                                     alt={this.state.name}
                                />
                                <div>
                                    <h4 className="random-planet__name">{this.state.name}</h4>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <span className="term">Population: </span>
                                            <span>{this.state.population}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span className="term">Rotation Period: </span>
                                            <span>{this.state.rotationPeriod}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <span className="term">Diameter: </span>
                                            <span>{this.state.diameter}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default RandomPlanet;
