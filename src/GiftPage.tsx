import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

// мы используем react-router и хотим иметь доступ к параметрам пути
// поэтому наследуемся от RouteComponentProps
interface GiftPageProps extends RouteComponentProps {

}

interface GiftPageState {

    inputName: string;

    inputEmail: string;

}

class GiftPage extends React.Component<GiftPageProps, GiftPageState> {


    constructor(props: Readonly<GiftPageProps>) {
        super(props);
        this.state = {
            inputName: props.location.state.inputName,
            inputEmail: props.location.state.inputEmail
        };
    }

    // TODO: вынести gift в отдельный компонент. получать доступный перечень gifts с псевдо-сервера

    render(): React.ReactNode {
        return (
            <div>
                <h1 className="text-center">WHAT YOU WANNA GET FOR CRISTMAS, {this.state.inputName.toUpperCase()}?</h1>

                <div className="container-sm col-md-4">
                <table className="table">
                    <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td className="text-align-custom">
                            <span>A gift #1</span>
                        </td>
                        <td>
                            <img src={require('./blanket.png')} alt="" className="card-img-custom"></img>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"></th>
                        <td className="text-align-custom">
                            <span>A gift #1</span>
                        </td>
                        <td>
                            <img src={require('./blanket.png')} alt="" className="card-img-custom"></img>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>

            </div>



    )
    }

};

export default withRouter(GiftPage);
// export default GiftPage;
