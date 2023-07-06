import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Question {
  id: number;
  question: string;

}

const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    axios.get<{questions:Question[]}>('https://cae-bookstore.herokuapp.com/question/all')
      .then(response => {
        setQuestions(response.data.questions);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {questions.map(question => (
        <div key={question.id}>{question.question}</div>
      ))}
    </div>
  );
};

export default QuestionList;