import { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Counter from "@components/results/Counter";
import List from "@components/results/List";
import Button from "@components/ui/Button";
import s from "./ResultsView.module.css";

const ResultsView = ({ answers, onReplayClick }) => {
  const { width, height } = useWindowSize();
  const [playConfetti, setPlayConfetti] = useState(false);

  const score = Math.floor(
    (answers.reduce((acc, { question, answer }) => {
      if (question.region === answer) {
        acc++;
      }

      return acc;
    }, 0) /
      answers.length) *
      100
  );

  const handleCounterRest = () => {
    if (score === 100) {
      setPlayConfetti(true);
    }
  };

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={100}
        run={playConfetti}
      />
      <span className={s.scoreLabel}>Votre score :</span>
      <Counter number={score} suffix="%" onRest={handleCounterRest} />
      <List className={s.list} answers={answers} />
      <div className={s.button}>
        <Button onClick={onReplayClick}>Rejouer</Button>
      </div>
    </>
  );
};

export default ResultsView;
