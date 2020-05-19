import React, {Component} from 'react';
import ItemListPeople from "./ItemListPeople";
import PersonDetails from "./PersonDetails";
import ErrorIndicator from "./ErrorIndicator";
import {withRouter} from 'react-router-dom';

//Компонент с данными о персоонаже
class PagePersons extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    };

    //Метод позволяет отловить ошибки в компоненте (не сетевые) и не допустить упасть всему приложению
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

        const {id} = this.props.match.params; //Получим id из url

        return (
            <div className="pagePersons__wrapper">
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemListPeople
                            onItemSelected={(itemId) => {
                                this.props.history.push(`/people/${itemId}`) //С помощью встроенного метода history пеередадим в url id выбраного персоонажа
                            }}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails itemId={id}/> {/*Передадим id выбраного персоонажа*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PagePersons)