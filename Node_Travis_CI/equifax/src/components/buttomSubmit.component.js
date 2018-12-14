import React from 'react';
import 'weui';
import {
    Button,
    Dialog
} from 'react-weui';


export default class ButtomSubmit extends React.Component {
    constructor(props) {
        super(props);

        
    }
    sendData(data, url, parentThis) {
        var varThis = this;
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data)
        }).then( (result) => {
            if(result.status == 200){
                varThis.cargarDialog("Everything is ok","Success", parentThis);
            }else{
                throw new Error(result.statusText)
            }
            
        }).catch( (error) => {
            varThis.cargarDialog(error.toString(),"Error", parentThis);
        })
    }

    cargarDialog(messageText, messageTitle, varThis){
        var icon;
        varThis.setState({ showIOS1: true,
                        messageText: messageText,
                        messageTitle: messageTitle
                      });
    }

    render() {
        var idRadio = this.props.questionNum;
        return (
            <div>
                <Button type="submit" className="buttom" >Submit</Button>
            </div>
        );
    }
}