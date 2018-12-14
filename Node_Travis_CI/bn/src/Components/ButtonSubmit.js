import React from 'react';
import 'weui';
import { Button } from 'react-weui';

export default class ButtonSumbit extends React.Component {
    constructor(props) {
        super(props);
    }

    sendData(dataObject, url, parentThis) {
        if (dataObject != undefined) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    dataObject
                })
            }).then((result) => {
                if (result.status == 200) {
                    parentThis.setState({
                        showIOS1: true,
                        messageText: "Success",
                        messageTitle: "Everything is ok"
                    })
                } else {
                    throw new Error(result.statusText)
                }
            }).catch((error) => {
                parentThis.setState({
                    showIOS1: true,
                    messageTitle: "Error",
                    messageText: error.toString()
                });

            })
        }
    }

    render() {

        return (
            <div>
                <Button type="submit" className="button">Pay ${this.props.data.amount}</Button>
            </div>
        )
    }
}