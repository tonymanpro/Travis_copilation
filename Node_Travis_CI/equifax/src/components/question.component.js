import React from 'react';
import 'weui';
import {
    CellsTitle, Form
} from 'react-weui';
import Answer from './answer.component';


export default class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    buildAnswer(options, code) {
        var answers = [];
        let cont = 1;
        options.forEach((answer) => {
            answers.push(<Answer questionNum = {code} answerNum={cont} answer={answer} key={answer} />)
            cont++;
        }) 
        return answers;
    }

    buildQuestion() {
        var questions = [];
        var answers = [];
        this.props.data.forEach((element) => {
            questions.push(
                <div key={element.Code} className="">
                    <CellsTitle className ="questionTitle">{element.Text}</CellsTitle>
                    <Form radio className="formCell">
                        {answers = this.buildAnswer(element.Options, element.Code)}
                    </Form>
                </div>
            )
        })
        return questions;
    }

    render() {
        var questions = this.buildQuestion();
        return (
            <div>
                {
                    questions
                }
            </div>
        );
    }
}

