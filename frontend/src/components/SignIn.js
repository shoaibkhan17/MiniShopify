import React from 'react';
import {Box, Section} from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.usernameOnChange = this.usernameOnChange.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.props.updateFlag(true);
    }

    usernameOnChange(event) {
        this.setState({username: event.target.value})
    }

    passwordOnChange(event) {
        this.setState({password: event.target.value})
    }

    handleSubmit() {
        var obj = {
            username: this.state.username,
            password: this.state.password
        }
        console.table(obj);
    }

    render() {
        return (
            <div>
                <Section style={{textAlign: "left"}} >
                    <Box className = "has-background-black-ter">
                        <form className="box">
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input value={this.state.username} onChange={this.usernameOnChange} className="input" type="text" required placeholder="e.g. username"/>
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input value={this.state.password} onChange={this.passwordOnChange} className="input" type="password" required placeholder="********"/>
                                </div>
                            </div>
                        
                            <input onClick={this.handleSubmit} className="button is-primary" value = "Sign in"/>
                        </form>
                        <a onClick={this.handleClick} className = "has-text-white" >Click here to create an account</a>
                    </Box>
                </Section>
            </div>
        )
    }
}

 export default SignIn;