import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state ={
            firstName: "",
            lastName: "",
            isFriendly: true
        }
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
        this.setState({ [name]: checked})
        :
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
                <input 
                    type="text" 
                    name="firstName" 
                    value={this.state.firstName} 
                    placeholder="First Name" 
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    name="lastName" 
                    value={this.state.lastName} 
                    placeholder="Last Name" 
                    onChange={this.handleChange}
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>

                <textarea value={"Some default value"}/>

                
                <input 
                type="checkbox"
                name="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange}
                /> Is friendly?
            </form>
            </div>
        )
    }

}