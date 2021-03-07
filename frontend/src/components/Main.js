import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import UserComponent from './UserComponent'
import TopMenu from './TopMenu';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            createAccountFlag: false
        }
        this.setCreateAccountFlag = this.setCreateAccountFlag.bind(this);
    }

    setCreateAccountFlag(flag) {
        this.setState({createAccountFlag: flag})
    }

    render() {
        return (
            <div>
                <TopMenu title={"Setup your own shop!"}/>
                {this.state.createAccountFlag ? <CreateAccount updateFlag={this.setCreateAccountFlag} /> : <SignIn updateFlag={this.setCreateAccountFlag} />}
                <UserComponent />
            </div>
        )
    }
}

 export default Main;