import React from "react";

import { Row, Button } from "./FeedbackOptions.styled";

interface IAppState {
  good: number;
  neutral: number;
  bad: number;
}

interface IFeedbackOptions {
  options: IAppState;
  onLeaveFeedback: (option: keyof IAppState) => void;
}

export const FeedbackOptions: React.FC<IFeedbackOptions> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <>
      <Row>
        {Object.keys(options).map((buttonName) => {
          return (
            <Button
              key={buttonName}
              onClick={() => onLeaveFeedback(buttonName as keyof IAppState)}
            >
              {buttonName}
            </Button>
          );
        })}
      </Row>
    </>
  );
};
