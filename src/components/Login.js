import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state ={
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: ""
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

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(event)
    }

    render(){
        return(
            <div className="form-div">
            <form onSubmit={this.handleSubmit}>
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
<br/>
                
                <input 
                type="checkbox"
                name="isFriendly"
                checked={this.state.isFriendly}
                onChange={this.handleChange}
                /> Is friendly?
    <br/>

                <input 
                type="radio"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleChange}
                /> female?
            <br/>
            <input 
                type="radio"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleChange}
                /> male?
               <h2>You are a {this.state.gender}</h2>

            <label> What is your Favorite Color</label>
            <select
                value={this.state.favColor}
                onChange={this.handleChange}
                name="favColor"
            >
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>
            <h3> Your fav color is {this.state.favColor} </h3>
            <button>Submit</button>
            </form>
            </div>
        )
    }

}