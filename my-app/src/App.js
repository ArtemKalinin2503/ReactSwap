import React, {Component} from 'react';
import Header from './components/Header';
import RandomPlanet from "./components/RandomPlanet";
import PagePersons from "./components/PagePersons";
import './scss/app.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <RandomPlanet/>
                <PagePersons/>
            </div>
        )
    }
}

export default App;
