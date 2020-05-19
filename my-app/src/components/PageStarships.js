import React, {Component} from 'react';
import ItemListStarship from "./ItemListStarship";
import ErrorIndicator from "./ErrorIndicator";
import { withRouter } from 'react-router-dom';

//Компонент с данными о персоонаже
class PageStarships extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
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
                        <ItemListStarship
                            onItemSelected={(itemId) => { //Данный метод вызывается в компоненте ItemListStarship
                                this.props.history.push(`/starships/${itemId}`) //Props history - это встроенный props в withRouter (он позволит передать в url необходимый id )
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PageStarships)