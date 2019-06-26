import React,{Component} from 'react'

class Form extends Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}> 
                <input type="text" name="city" placeholder="Enter city name"></input>
                <input type="text" name="country" placeholder="Enter country name"></input>
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;