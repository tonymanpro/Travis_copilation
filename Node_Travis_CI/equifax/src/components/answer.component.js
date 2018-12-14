import React from 'react';
import 'weui';
import {
    CellBody, CellFooter, Radio, FormCell
} from 'react-weui';


export default class Answer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: [],
        }
    }

    render() {
        var idRadio = this.props.questionNum;
        return (

            <FormCell radio>
                <CellBody className="cellBodyFont" >{this.props.answer}</CellBody>
                <CellFooter>
                    <Radio name={"radio"+idRadio} value={this.props.answerNum}  />
                </CellFooter>
            </FormCell>
        );
    }
}