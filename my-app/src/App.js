import React, {Component} from 'react';
import Header from './components/Header';
import RandomPlanet from "./components/RandomPlanet";
import ItemList from "./components/Item-list";
import PersonDetails from "./components/PersonDetails";
//Api
import API from "./service/Api";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <RandomPlanet/>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
