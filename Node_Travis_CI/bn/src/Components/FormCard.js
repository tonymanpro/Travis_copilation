import React from 'react';
import ButtonSubmit from './ButtonSubmit';
import 'weui';
import {
    Dialog, CellsTitle, Form, FormCell, CellHeader, Select, CellBody, Input, Label, Button
} from 'react-weui';
import '../style/style.css';


export default class FormCard extends React.Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

        this.state = {
            showIOS1: false,
            messageTitle: "",
            messageText: "",
            style1: {
                buttons: [
                    {
                        label: 'Ok',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            }
        }

    }

    monthEnglish = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    cont = 1;

    hideDialog() {
        this.setState({
            showIOS1: false,
        });
    }

    buildMonth() {
        var months = [];
        var cont = 1;
        this.monthEnglish.forEach(function (element) {
            months.push(<option key={cont} value={cont}>{element}</option>);
            cont++;
        })
        return months;
    }

    buidYear() {
        var d = new Date();
        var actualYear = d.getFullYear();
        var endYear = actualYear + 10;
        var years = [];

        for (var year = actualYear; year < endYear; year++) {
            years.push(<option key={year} value={year}>{year}</option>)
        }
        return years;
    }

    getData(e) {
        e.preventDefault();
        var ccNumber = document.getElementsByName("ccNumber")[0].value;
        var ccName = document.getElementsByName("ccName")[0].value;
        var ccCvv = document.getElementsByName("ccCvv")[0].value;
        var monthDate = document.getElementsByName("monthDate")[0].value;
        var yearDate = document.getElementsByName("yearDate")[0].value;

        var dataObject =
            {
                "ccNumber": ccNumber,
                "ccName": ccName,
                "ccC": ccCvv,
                "expirationMonth": monthDate,
                "expirationYear": yearDate

            };

        ButtonSubmit.prototype.sendData(dataObject, this.props.url, this);
    }

    render() {
        var content = (
            <div>
                <CellsTitle className="mainTitle">{this.props.data.title}</CellsTitle>
                <form onSubmit={this.getData} method="POST" id="formCard">

                    {/* Card number */}
                    <CellsTitle className="title">Number</CellsTitle>
                    <FormCell className="cellBody">
                        <CellBody>
                            <Input name="ccNumber" type="text" placeholder="Card number" />
                        </CellBody>
                    </FormCell>

                    {/* Card name */}
                    <CellsTitle className="title">Name</CellsTitle>
                    <FormCell className="cellBody">
                        <CellBody>
                            <Input name="ccName" type="text" placeholder="Card name" />
                        </CellBody>
                    </FormCell>

                    {/* Card cvv  */}
                    <CellsTitle className="title">CVV</CellsTitle>
                    <FormCell className="cellBody">
                        <CellBody>
                            <Input name="ccCvv" type="number" placeholder="CVV" />
                        </CellBody>
                    </FormCell>

                    {/* Card expiration date */}
                    <CellsTitle className="title">Expires</CellsTitle>
                    <FormCell className="">
                        <CellBody className="cellBody">
                            <Select name="monthDate" defaultValue="1">
                                {
                                    this.buildMonth()
                                }
                            </Select>
                        </CellBody>
                        <CellBody className="cellBody">
                            <Select name="yearDate" defaultValue="1">
                                {
                                    this.buidYear()
                                }
                            </Select>
                        </CellBody>
                    </FormCell>

                    <ButtonSubmit type="submit" className="button" value="Pay" data={this.props.data} />
                </form>

                {/* Dialog */}
                <Dialog type="ios" title={this.state.messageTitle} buttons={this.state.style1.buttons} show={this.state.showIOS1}>
                    {this.state.messageText}
                </Dialog>

            </div>
        )
        return content;
    }

}


