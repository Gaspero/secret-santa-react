import React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";

// мы используем react-router и хотим иметь доступ к параметрам пути
// поэтому наследуемся от RouteComponentProps
type GiftItemProps = {

    id: number;

    name: string;

    url: string;
}

type GiftItemState = {

}

class GiftItem extends React.Component<GiftItemProps, GiftItemState> {


    constructor(props: GiftItemProps) {
        super(props);
    }

    routeChange() {
        console.log('Pushed');
    }

    render(): React.ReactNode {
        return (
            <tr onClick={this.routeChange} className="tr-boardered">
                <th scope="row"></th>
                <td className="text-align-custom">
                    <span>{this.props.name}</span>
                </td>
                <td>
                    <img src={this.props.url} alt="" className="card-img-custom"></img>
                </td>
            </tr>
    )
    }

};

export default GiftItem;
