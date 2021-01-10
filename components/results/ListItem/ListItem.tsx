import cn from "classnames";
import Image from "next/image";
import regions from "@assets/constants/regions.json";
import s from "./ListItem.module.css";

const ListItem = ({
  className = '',
  title,
  description,
  answer,
  correctAnswer,
}) => {
  const isValid = answer === correctAnswer;
  return (
    <div className={cn(s.root, className)}>
      <div className={s.content}>
        <span className={s.title}>{title}</span>
        <span className={s.description}>{description}</span>
      </div>
      <div className={s.answerBlock}>
        <span
          className={cn(s.answer, {
            [s.answerValid]: isValid,
            [s.answerInvalid]: !isValid,
          })}
        >
          {regions[answer].name}
        </span>
        {!isValid && (
          <span className={s.correctAnswer}>{regions[correctAnswer].name}</span>
        )}
      </div>
    </div>
  );
};

export default ListItem;
