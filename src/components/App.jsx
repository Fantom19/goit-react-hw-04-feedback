import React, { useState } from "react";
import FeedbackOptions from "./Feedback/feedback";
import Notification from "./Notification/notification";
import Section from "./Section/section";
import Statistic from "./Statistics/statistics";
import css from "./App.module.css"


const App = () =>  {
  const [good, setGood] = useState(0);
  const [neutral, setNutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(e) {
    const name = e.target.name;
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  }

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100);

  const options = ["good", "neutral", "bad"];
  
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistic">
          {total !== 0 ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </div>
    );
  }

export default App;