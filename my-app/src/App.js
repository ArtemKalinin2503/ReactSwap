import React, {Component} from 'react';
import Header from './components/Header';
import RandomPlanet from "./components/RandomPlanet";
import PagePersons from "./components/PagePersons";
import StarshipDetails from "./components/StarshipDetails";
import PageStarships from "./components/PageStarships";
import {BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom'; //npm install react-router-dom
import './scss/app.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Header/>
                    <RandomPlanet/>
                    {/*Роутинг*/}
                    <Switch>
                        <Route path="/" exact/>
                        <Route path="/people/:id?" component={PagePersons} exact/> {/*параметр ? - означает не обязательный параметр */}
                        <Route path="/starships" component={PageStarships} exact/>
                        <Route path="/starships/:id" //Динамический route (который позволит делать переход в описание корабля по переданному id)
                               render={({match}) => {
                                   const {id} = match.params; //id - получаем из url (match встроенный параметр)
                                   return <StarshipDetails starshipId={id}/>
                               }}
                        />
                        <Redirect to="/"/> {/*Отработает когда url не верный (как 404)*/}
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
