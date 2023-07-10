import { Component } from "react";

import { FeedbackOptions, Statistics, Section, Notification } from "../index";

import { Container } from "../index";

interface IAppState {
  good: number;
  neutral: number;
  bad: number;
}

export class App extends Component<{}, IAppState> {
  state: IAppState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option: keyof IAppState): void => {
    this.setState(
      (prevState) =>
        ({
          ...prevState,
          [option]: prevState[option] + 1,
        } as IAppState)
    );
  };

  countTotalFeedback(): number {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(): number {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good * 100) / total) || 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <Container>
        <Section title="Please, leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good.toString()}
              neutral={neutral.toString()}
              bad={bad.toString()}
              total={total.toString()}
              positivePercentage={this.countPositiveFeedbackPercentage().toString()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
