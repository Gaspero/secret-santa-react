import React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import dataService, {User, Gift} from "./DataService";

interface FinalPageProps extends RouteComponentProps {

}

//TODO: currentUser пропа кажется не нежуна

interface FinalPageState {

    inputName: string;
    inputEmail: string;
    desiredGiftId: number;
    receiverDesiredGift: Gift;
    receiver: User;
    currentUser: User;

}


class FinalPage extends React.Component<FinalPageProps, FinalPageState> {


    constructor(props: Readonly<FinalPageProps>) {
        super(props);

        this.state = {
            inputName: "Ivan",
            inputEmail: "Ivan@mail.ru",
            desiredGiftId: 2,
            receiverDesiredGift: new Gift(0, '', ''),
            receiver: new User(0, '', 0, 0),
            currentUser: new User(0, '', 0, 0)
        };

        dataService.getReceiver().then(value => {
            this.setState({
                receiver: value[0]
            });

            // console.log(value);

            let name = this.state.inputName;
            let giftId = this.state.desiredGiftId;

            let currentUser = new User(10, name, giftId, value[0].id);

            dataService.createUser(currentUser)
                .then(newUser => value[0].secretSantaId = newUser.id)
                .then(finalParam => dataService.updateUser(value[0]));

            let receiverGiftId = value[0].giftId;

            dataService.getGift(receiverGiftId).then(gift => {
                this.setState({
                    receiverDesiredGift: gift
                });
            })

        });
    }

    //TODO: pass props to amazon url, image and receiver name    onLoad={() => this.loadData()}
    render(): React.ReactNode {
        return (
            <div>

                <h1 className="text-center">YOU HAVE TO BE A SECRET SANTA FOR {this.state.receiver.name.toUpperCase()}</h1>

                <div className="container-sm col-md-4">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <h2 className="text-center">{this.state.receiver.name}'s desired gift is {this.state.receiverDesiredGift.name}</h2>
                            </tr>
                            <tr>
                                <img src={this.state.receiverDesiredGift.url} className="card-img-custom-big"></img>
                            </tr>
                            <tr>
                                <h3 className="text-center">You can buy it <a href={"https://www.amazon.com/s?k="+this.state.receiverDesiredGift.name}>here</a></h3>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }


};

export default withRouter(FinalPage);
