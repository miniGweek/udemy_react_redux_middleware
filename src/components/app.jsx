import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import ForeCasts from '../containers/forecasts_table'

export default class App extends Component {
    render() {
        return ( 
        <div>
            <SearchBar />
            <ForeCasts />
        </div>
        );
    }
}