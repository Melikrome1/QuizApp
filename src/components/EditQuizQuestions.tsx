import { useState, useEffect } from 'react';
import axios from 'axios';

const EditQuizQuestions = ({ questionId={}}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
   
    axios.get(`https://cae-bookstore.herokuapp.com/question/${questionId}`)
      .then(response => {
        const { question, answer } = response.data;
        setQuestion(question);
        setAnswer(answer);
      })
      .catch(error => {
        console.error(error);
      });
  }, [questionId]);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    switch (name) {
      case 'question':
        setQuestion(value);
        break;
      case 'answer':
        setAnswer(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `https://cae-bookstore.herokuapp.com/question/${questionId}`,
        {
          question,
          answer,
        }
      );

   
      console.log('Question updated successfully!', response.data);

      setQuestion('');
      setAnswer('');
    } catch (error) {
      console.error('Failed to update question:', error);
    }
  };

  return (
    <div>
      <h2>Edit Quiz Question</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input
            type="text"
            name="question"
            value={question}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Answer:
          <input
            type="text"
            name="answer"
            value={answer}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditQuizQuestions;
