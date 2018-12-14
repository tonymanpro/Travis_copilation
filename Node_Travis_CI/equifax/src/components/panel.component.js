import React from "react";
import Question from "./question.component";
import ButtomSubmit from "./buttomSubmit.component";
import 'weui';
import {
    Page,
    Icon, 
    IconBox,
    Dialog
} from 'react-weui';
import "../styles/answer.css";
import "../styles/question.css";

export default class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            showIOS1: false,
            messageText: "",
            messageTitle:"",
            icon:"",
            style1: {
                buttons: [
                    {
                        label: 'Ok',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            }
        }
        this.getData = this.getData.bind(this);
    }

    hideDialog() {
        this.setState({
            showIOS1: false,
        });
    }

    getData(e) {
        e.preventDefault();
        var questions;
        var answers;
        var forms = document.getElementsByClassName("weui-check");
        for (var index = 0; index < forms.length; index++) {
            var element = forms[index];
            if (element.checked) {
                var idQues = element.attributes.name.value.split('o')[1];
                if (answers === undefined) {
                    questions = idQues;
                    answers = element.attributes.value.value;
                } else {
                    questions += "," + idQues;
                    answers += "," + element.attributes.value.value;
                }
            }
        }
        var dataObject = {
                "reference": "",
                "questions": questions,
                "answers": answers
        }
        ButtomSubmit.prototype.sendData(dataObject, this.props.postUrl, this);
    }



    render() {
        return (
            <Page className="input" title="Input">
                <form id="frm1" onSubmit={this.getData} method="POST">
                    <Question data={this.props.data} />
                    <ButtomSubmit/> 
                </form>
                <Dialog type="ios" title={this.state.messageTitle} buttons={this.state.style1.buttons} show={this.state.showIOS1}>
                        {this.state.messageText}
                </Dialog>
            </Page>
        );
    }
}