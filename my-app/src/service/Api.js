import axios from "axios"; //npm install axios

//Здесь все сетевые запросы (если приложение без redux)
export default class Api {

    //Основной url к Api
    _apiBase = "https://swapi.dev/api/"

    //Запрос данных одной планеты исходя из переданного id
    async getPlanets(id) {
        return await axios.get(`${this._apiBase}planets/${id}`)
            .then(response => {
                return response.data
            })
    }

    //Запрос данных о человеке исходя из переданного id
    getPerson(id) {
        return axios.get(`${this._apiBase}people/${id}`)
            .then(response => {
                return response.data
            })
    }

    //Запрос данных о карабле исходя из переданного id
    async getStarship(id) {
        return await axios.get(`${this._apiBase}starships/${id}`)
            .then(response => {
                return response.data
            })
    }

    //Запрос данных о всех планетах
    async getAllPlanets() {
        return await axios.get(`${this._apiBase}planets`)
            .then(response => {
                return response.data
            })
    }

    //Запрос данных о всех караблях
    async getAllStarships() {
        return await axios.get(`${this._apiBase}starships`)
            .then(response => {
                return response.data
            })
    }

}