import React from 'react';
import {Box, Section, Form} from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';


class SignIn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Section style={{textAlign: "left"}} className="has-background-black-ter" >
                    <Box>
                        <form className="box" role="form">
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input className="input" type="text" required placeholder="e.g. usermame"/>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input class="input" type="password" required placeholder="********"/>
                                </div>
                            </div>
                        
                            <input class="button is-primary" value = "Sign in" type="submit"/>
                        </form>
                    </Box>

                    <a class = "has-text-white" href = "/createAccount">Click here to create an account</a>
                </Section>
            </div>
        )
    }
}

 export default SignIn;