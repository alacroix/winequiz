import cn from "classnames";
import s from "./List.module.css";
import ListItem from "../ListItem";

const List = ({ answers, className = "" }) => {
  return (
    <div className={className}>
      <div className={s.list}>
        {answers.map(({ question, answer }) => (
          <ListItem
            title={question.name}
            description={question.estate}
            answer={answer}
            correctAnswer={question.region}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
