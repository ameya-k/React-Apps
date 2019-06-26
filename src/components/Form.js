import React,{Component} from 'react'

class Form extends Component{

    state={
        searchCity:undefined,
        searchCountry:undefined
    }

    handleChange(e){
        this.setState({
            searchCity:e.target.elements.city.value,
            searchCountry:e.target.elements.country.value
        })
    }

    render(){
        return(
            <form onSubmit={this.props.getWeather}> 
                <input type="text" name="city" placeholder="Enter city name"></input>
                <input type="text" name="country" placeholder="Enter country name"></input>
                <button disabled={!this.state.searchCity&&this.state.searchCountry}>Get Weather</button>
            </form>
        )
    }
}

export default Form;