import { useEffect, useState } from "react";
import Map from "@components/quiz/Map";
import Question from "@components/quiz/Question";
import ResultsView from "@components/results/ResultsView";
import generateQuestions from "@utils/generateQuestions";

const Quiz = () => {
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (!isOver) {
      setQuestions(generateQuestions(10));
      setCount(0);
      setAnswers([]);
    }
  }, [isOver]);

  const handleSubmit = () => {
    setAnswers([
      ...answers,
      {
        question: questions[count],
        answer,
      },
    ]);
    setAnswer("");
    if (count + 1 < questions.length) {
      setCount(count + 1);
    } else {
      setIsOver(true);
    }
  };

  const handleReplay = () => {
    setIsOver(false);
  };

  if (questions.length === 0) {
    return <div className="h-screen flex flex-col md:p-8">loading...</div>;
  }

  return (
    <div className="h-screen flex flex-col p-2 md:p-8">
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
        <ResultsView answers={answers} onReplayClick={handleReplay} />
      )}
    </div>
  );
};

export default Quiz;
