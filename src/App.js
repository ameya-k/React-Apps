import React, { Component}from 'react'
import Titles from './components/Titles'
import Form from './components/Form';
import Weather from './components/Weather'

const API_KEY="1616f42d0c99bf513cb7769a5da53142";
const API_URL="https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=";

class App extends Component{

  state={
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    error:undefined
  }

  getWeather = async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api_call= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data= await api_call.json();
    console.log(data);
  }

  render(){
      return( 
        <div>
      
        <Titles></Titles>
        <Form getWeather={this.getWeather}></Form>
        <Weather></Weather>
        </div>
      )
  }
}

export default App;