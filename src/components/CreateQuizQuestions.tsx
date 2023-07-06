import { useState } from 'react';
import axios from 'axios';

const CreateQuizQuestions = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

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
      const response = await axios.post('https://cae-bookstore.herokuapp.com/question', {
        question,
        answer,
      });

      
      console.log('Question created successfully!', response.data);

   
      setQuestion('');
      setAnswer('');
    } catch (error) {
    
      console.error('Failed to create question:', error);
    }
  };

  return (
    <div>
      <h2>Create Quiz Question</h2>
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
        <button type="submit">Create Question</button>
      </form>
    </div>
  );
};

export default CreateQuizQuestions;
