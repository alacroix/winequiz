import cn from "classnames";
import { useRef } from "react";
import Reward from "react-rewards";
import s from "./Question.module.css";

import Card from "../Card";
import Button from '@components/ui/Button';

const Question = ({ className, answer, question, onSubmit }) => {
  const reward = useRef(null);

  const hasAnswered = !!answer;

  const checkAnswer = () => {
    if (answer.id === question.region) {
      reward.current.rewardMe();
    } else {
      reward.current.punishMe();
    }

    onSubmit();
  };

  return (
    <div className={cn(s.root, className)}>
      <span className={s.intro}>Où se situe...</span>
      <Card
        className={s.card}
        title={question.name}
        description={question.estate}
        imageUrl={question.picture}
      />
      <span className={s.answerLabel}>Votre réponse :</span>
      <p className={s.answer}>{!hasAnswered ? "-" : answer.name}</p>
      <Reward config={{ lifetime: 100 }} ref={reward} type="confetti">
        <Button
          disabled={!hasAnswered}
          onClick={checkAnswer}
        >
          Valider
        </Button>
      </Reward>
    </div>
  );
};

export default Question;
