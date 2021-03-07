import React from 'react';
import {Section} from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import UserService from '../services/UserService';

class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            name: '',
            number: '',
            email: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.usernameOnChange = this.usernameOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.nameOnChange = this.nameOnChange.bind(this);
        this.numberOnChange = this.numberOnChange.bind(this);
        this.emailOnChange = this.emailOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.props.updateFlag(false);
    }

    handleSubmit() {
        var obj = {
            username: this.state.username,
            name: this.state.name,
            number: this.state.number,
            email: this.state.email,
            password: this.state.password
        }
        console.table(obj);
        UserService.createAccount(obj);
    }

    usernameOnChange(event) {
        this.setState({username: event.target.value})
    }

    passwordOnChange(event) {
        this.setState({password: event.target.value})
    }

    nameOnChange(event) {
        this.setState({name: event.target.value})
    }

    numberOnChange(event) {
        this.setState({number: event.target.value})
    }

    emailOnChange(event) {
        this.setState({email: event.target.value})
    }

    render() {
        return (
            <div>
                <Section style={{textAlign: "left"}}>
		            <div className="box has-text-white has-background-black-ter">
			            <form className="box">
				            <div className="field">
					            <lable className="label">Username</lable>
					                <div className="control">
						                <input value={this.state.username} onChange={this.usernameOnChange} className="input" type="text" id="username" name="username" required />
					                </div>
				            </div>

                            <div className="field">
                                <lable className="label">Name</lable>
                                <div className="control">
                                    <input value={this.state.name} onChange={this.nameOnChange} className="input" type="text" id="name" name="name" />
                                </div>
                            </div>

                            <div className="field">
                                <lable className="label">Number</lable>
                                <div className="control">
                                    <input value={this.state.number} onChange={this.numberOnChange} className="input" type="text" id="number" name="number" />
                                </div>
                            </div>

                            <div className="field">
                                <lable className="label">Email</lable>
                                <div className="control">
                                    <input value={this.state.email} onChange={this.emailOnChange} className="input" type="email" id="email" name="email" />
                                </div>
                            </div>

                            <div className="field">
                                <lable className="label">Password</lable>
                                <div className="control">
                                    <input value={this.state.password} onChange={this.passwordOnChange} className="input" type="password" id="password" name="password" required />
                                </div>
                            </div>

				            <input onClick={this.handleSubmit} className="button is-primary" value = "Create Account"/>
			            </form>
                        <a onClick={this.handleClick} className = "has-text-white" >If you already have an account, click here to sign in.</a>
		            </div>
	            </Section>
            </div>
        )
    }
}

 export default CreateAccount;