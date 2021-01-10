import cn from "classnames";
import { useEffect, useRef, useState } from "react";
import Reward from "react-rewards";
import regions from "@assets/constants/regions.json";
import Button from "@components/ui/Button";
import Card from "../Card";
import s from "./Question.module.css";

const Question = ({ className, answer, question, onSubmit }) => {
  const reward = useRef(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const hasAnswered = answer !== "";

  const isValid = hasAnswered && answer === question.region;

  useEffect(() => {
    setHasSubmitted(false);
  }, [question]);

  const checkAnswer = () => {
    setHasSubmitted(true);
    if (isValid) {
      reward.current.rewardMe();
    } else {
      reward.current.punishMe();
    }

    setTimeout(() => {
      onSubmit();
    }, 1000);
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
      <p
        className={cn(s.answer, {
          [s.answerValid]: hasSubmitted && isValid,
          [s.answerInvalid]: hasSubmitted && !isValid,
        })}
      >
        {!hasAnswered ? "-" : regions[answer].name}
      </p>
      <Reward config={{ lifetime: 100 }} ref={reward} type="confetti">
        <Button disabled={!hasAnswered} onClick={checkAnswer}>
          Valider
        </Button>
      </Reward>
    </div>
  );
};

export default Question;
