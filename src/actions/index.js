import axios from 'axios'
const URL = 'http://api.openweathermap.org/data/2.5/forecast?q='
    //London,US&appid='
const API_KEY = 'ca0001bc5b999da2ec0909887b778106'

export const FETCH_FORECASTS = 'FETCH_FORECASTS'

export default function getForeCasts(term) {
    const fullUrl = `${URL}${term},us&appid=${API_KEY}`
    var request = axios.get(fullUrl);
    return {
        type: FETCH_FORECASTS,
        payload: request
    }
}