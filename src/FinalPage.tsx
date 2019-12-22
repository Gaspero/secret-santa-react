import React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import dataService, {User} from "./DataService";

interface FinalPageProps extends RouteComponentProps {

}

interface FinalPageState {

    inputName: string;
    inputEmail: string;
    desiredGift: number;
    receiver: User;
    currentUser: User;

}


class FinalPage extends React.Component<FinalPageProps, FinalPageState> {


    constructor(props: Readonly<FinalPageProps>) {
        super(props);

        this.state = {
            inputName: "Ivan",
            inputEmail: "Ivan@mail.ru",
            desiredGift: 2,
            receiver: new User(0,'',0,0),
            currentUser: new User(0,'',0,0)
        };
        // this.setState({
        //     inputName: "Ivan",
        //     inputEmail: "Ivan@mail.ru",
        //     desiredGift: 2
        //     }
        // );




        // dataService.getReceiver().then(value => {
        //     this.setState({
        //         receiver: value
        //     });
        //     this.loadData()
        // });

        dataService.getReceiver().then(value => {
            this.setState({
                receiver: value[0]
            });

            console.log(value);

            let name = this.state.inputName;
            let giftId = this.state.desiredGift;

            let currentUser = new User(10, name, giftId, value[0].id);

            dataService.createUser(currentUser)
                .then(newUser => value[0].secretSantaId = newUser.id)
                .then(finalParam => dataService.updateUser(value[0]))


        })

    }


     async loadData() {

        let name = this.state.inputName;
        let giftId = this.state.desiredGift;
        let receiver = this.state.receiver;


        let currentUser = new User(10, name, giftId, receiver.id);
        console.log(currentUser);

        // let newUser = await dataService.createUser(currentUser);
        //
        // receiver.secretSantaId = newUser.id;
        // let updatedReceiver = await dataService.updateUser(receiver);
        // console.log(updatedReceiver)


         dataService.createUser(currentUser)
             .then(newUser => receiver.secretSantaId = newUser.id)
             .then(finalParam => dataService.updateUser(receiver))


        // let receiver = this.state.receiver[0];
        // receiver.secretSantaId = user;
        //
        // let override = await dataService.updateUser(receiver);
        // console.log(override)

    }

    // async loadData2(user: User) {
    //
    //     let receiver = this.state.receiver[0];
    //     receiver.secretSantaId = user.id
    //
    //     let override = await dataService.updateUser(receiver);
    // }

    //TODO: pass props to amazon url, image and receiver name    onLoad={() => this.loadData()}
    render(): React.ReactNode {
        return (
            <div>

                <h1 className="text-center">YOU HAVE TO BE A SECRET SANTA FOR {this.state.inputName.toUpperCase()}</h1>

                <div className="container-sm col-md-4">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <h2 className="text-center">{this.state.inputName}'s desired gift is Blanket</h2>
                            </tr>
                            <tr>
                                <img src="http://localhost:3000/blanket.png" className="card-img-custom-big"></img>
                            </tr>
                            <tr>
                                <h3 className="text-center">You can buy it <a href={"https://www.amazon.com/s?k="+this.state.inputName}>here</a></h3>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }


};

export default withRouter(FinalPage);
