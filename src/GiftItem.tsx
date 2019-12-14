import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";

// мы используем react-router и хотим иметь доступ к параметрам пути
// поэтому наследуемся от RouteComponentProps
interface GiftItemProps extends RouteComponentProps {

}

interface GiftItemState {

    inputLogin: string;

    inputPassword: string;

}

class GiftItem extends React.Component<GiftItemProps, GiftItemState> {


    constructor(props: Readonly<GiftItemProps>) {
        super(props);
        this.state = {
            inputLogin: "",
            inputPassword: ""
        };
    }


    render(): React.ReactNode {
        return (
            <div>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">A gift #1</h5>
                                    <p className="card-text">This is a long description of the gift.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src="https://icon-library.net//images/santa-icon/santa-icon-18.jpg" alt="" className="card-img"></img>
                        </div>
                    </div>
                </div>
            </div>
    )
    }

};

export default GiftItem;
