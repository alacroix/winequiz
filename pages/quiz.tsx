import { useEffect, useState } from "react";

import Map from "@components/quiz/Map";
import Question from "@components/quiz/Question";
import generateQuestions from '@utils/generateQuestions';

const Quiz = () => {
  const [answer, setAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    setQuestions(generateQuestions(10));
  }, []);

  const handleSubmit = () => {
    setAnswers([
      ...answers,
      {
        question: questions[count],
        answer,
      },
    ]);
    setAnswer(null);
    if (count + 1 < questions.length) {
      setCount(count + 1);
    } else {
      setTimeout(() => {
        setIsOver(true);
      }, 1500);
    }
  };

  if (questions.length === 0) {
    return(
      <div className="h-screen flex flex-col md:p-8">
        loading...
      </div>
    )
  }

  return (
    <div className="h-screen flex flex-col md:p-8">
      {!isOver ? (
        <>
          <div className="text-center">
            Question {count + 1} / {questions.length}
          </div>
          <div className="flex flex-col justify-around md:flex-row flex-1 p-2 md:p-16">
            <Map className="md:w-1/2 md:order-2" onLocationClick={setAnswer} />
            <Question
              className="md:w-1/2"
              question={questions[count]}
              answer={answer}
              onSubmit={handleSubmit}
            />
          </div>
        </>
      ) : (
        <div>
          result:
          <div>
            {answers.map(({ question, answer }) => (
              <span>
                {question.name}-{question.region} {answer.id}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
