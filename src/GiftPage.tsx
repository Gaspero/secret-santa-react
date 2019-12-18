import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import dataService, {Gift} from "./DataService";
import GiftItem from "./GiftItem";

// мы используем react-router и хотим иметь доступ к параметрам пути
// поэтому наследуемся от RouteComponentProps
interface GiftPageProps extends RouteComponentProps {

}

interface GiftPageState {

    inputName: string;

    inputEmail: string;

    gifts: Gift[];

}

class GiftPage extends React.Component<GiftPageProps, GiftPageState> {


    constructor(props: Readonly<GiftPageProps>) {
        super(props);
        // TODO: add exception when page is called directly and props.location.state were not passed
        this.state = {
            inputName: props.location.state.inputName,
            inputEmail: props.location.state.inputEmail,
            gifts: []
        };

        dataService.getGifts().then(value => {
            this.setState({
                gifts: value
            });
        });

    }

    render(): React.ReactNode {
        return (
            <div>
                <h1 className="text-center">WHAT YOU WANNA GET FOR CHRISTMAS, {this.state.inputName.toUpperCase()}?</h1>

                <div className="container-sm col-md-4">
                <table className="table table-hover">
                    <tbody>
                    {this.state.gifts.map(gift => {
                        return (
                            <GiftItem id={gift.id} name={gift.name} url={gift.url} />
                        )
                    })}
                    </tbody>
                </table>
                </div>

            </div>



    )
    }

};

export default withRouter(GiftPage);
// export default GiftPage;
