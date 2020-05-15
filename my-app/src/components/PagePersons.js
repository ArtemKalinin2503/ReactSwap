import React, {Component} from 'react';
import ItemList from "./ItemList";
import PersonDetails from "./PersonDetails";
import ErrorIndicator from "./ErrorIndicator";

//Компонент с данными о персоонаже
class PagePersons extends Component{

    constructor(props) {
        super(props);
        this.state = {
            personSelected: 1,
            hasError: false
        }
    };

    //Метод получает id из компонента ItemList и получает id персоонажа по котрому прошел клик
    onItemSelected = (id) => {
        this.setState({
            personSelected: id
        })
    };

    //Метод позволяет отловить ошибки в компоненте (не сетевые) и не допустить упасть все приложению
    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    render() {

        //Если есть ошибка
        if (this.state.hasError) {
           return <ErrorIndicator/>
        }

        return (
            <div className="pagePersons__wrapper">
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onItemSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.personSelected}/> {/*Передаим id выбраннго персоонажа*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default PagePersons