import React, { Component } from "react";

import JeopardyService from "../../jeopardyService";
import JeopardyDisplay from "../../pages/JeopardyDisplay";
class Jeopardy extends Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
    };
  }
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data[0],
      });
    });
  }
  handleAnswer = () => {
    let score = this.state.score;
    if (
      this.state.answer.toLowerCase() === this.state.data.answer.toLowerCase()
    ) {
      score += this.state.data.value;
    } else {
      score -= this.state.data.value;
    }
    this.setState({
      score,
      answer: "",
    });
    this.getNewQuestion();
  };
  handleChange = (event) => {
    let data = { ...this.state };
    data[event.target.name] = event.target.value;
    this.setState(data);
  };
  componentDidMount() {
    this.getNewQuestion();
  }

  render() {
    console.log(this.state.data);

    return (
      <JeopardyDisplay
        category={this.state.data.category}
        question={this.state.data.question}
        pv={this.state.data.value}
        score={this.state.score}
        answer={this.state.answer}
        handleChange={this.handleChange}
        handleAnswer={this.handleAnswer}
      />
    );
  }
}
export default Jeopardy;
