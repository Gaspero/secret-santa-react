import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import { Link } from 'react-router-dom'

// мы используем react-router и хотим иметь доступ к параметрам пути
// поэтому наследуемся от RouteComponentProps
interface LoginPageProps extends RouteComponentProps {

}

interface LoginPageState {

    inputName: string;

    inputEmail: string;

}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {


    constructor(props: Readonly<LoginPageProps>) {
        super(props);
        this.state = {
            inputName: "",
            inputEmail: ""
        };
    }

    changeName(newName: string) {
        this.setState({
            inputName: newName
        });
    }

    changeEmail(newEmail: string) {
        this.setState({
            inputEmail: newEmail
        });
    }

    render(): React.ReactNode {
        return (
            <div>
            <div className="form-signin">
                <img className="mb-3" src={require('./santa-claus.png')} width="150" height="150"></img>
        <label htmlFor="inputEmail" className="sr-only">Name</label>

        <input onChange={event => this.changeName(event.target.value)}
        className="form-control"
        placeholder="Name"
        required={true}/>

        <label htmlFor="inputPassword" className="sr-only">Email</label>

            <input onChange={event => {
            this.changeEmail(event.target.value)
        }} type="inputEmail" id="email" className="form-control"
        placeholder="Email"
        required={true}/>
                <Link to={{ pathname: '/gift', state: { inputName: this.state.inputName, inputEmail: this.state.inputEmail} }}>
                    <button
            // onClick={() => this.login()}
                        className="btn btn-lg btn-primary btn-block" type="button">Continue
                    </button>
                </Link>
            </div>
            </div>
    )
    }

};

export default withRouter(LoginPage);
