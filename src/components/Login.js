import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state ={
            firstName: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    render(){
        return(
            <div className="form-div">
            <form>
                <input type="text" placeholder="First Name" onChange={this.handleChange}/>
                <h1>{this.state.firstName}</h1>
            </form>
            </div>
        )
    }

}