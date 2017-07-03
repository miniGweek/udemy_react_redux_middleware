import React,{Component} from 'react'
import Chart from '../components/charts'
import {connect} from 'react-redux'
import GoogleMaps from '../components/google_maps'

class ForeCasts extends Component{
    
    renderList(data){
      const cityName = data.city.name;
      const temperatures = data.list.map( l =>{ return l.main.temp;})
      const pressure = data.list.map( l =>{ return l.main.pressure;})
      const humidity = data.list.map( l =>{ return l.main.humidity;})
      const lat = data.city.coord.lat;
      const lon = data.city.coord.lon;
      

      return(
          <tr key={cityName}>
              <td><GoogleMaps lat={lat} lon={lon}/></td>
              <td>
                  <Chart data = {temperatures} color = "blue" />
              </td>
              <td>
                   <Chart data = {pressure} color = "orange" />
              </td>
                <td>
                    <Chart data = {humidity} color = "red" />
              </td>
          </tr>
      )
    }
    
    render(){
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.foreCastData.map(this.renderList)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({foreCastData}){
    return{foreCastData}
}

export default connect(mapStateToProps)(ForeCasts)