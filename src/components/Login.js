import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state ={
            firstName: "",
            lastName: ""
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        // this.setState({
        //     [event.target.name]: event.target.value
        // })
    }

    render(){
        return(
            <div className="form-div">
            <form>
                <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange}/>
                <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
            </div>
        )
    }

}