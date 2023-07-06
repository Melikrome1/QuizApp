
import axios from 'axios';

const DeleteQuestion = ({ questionId={} }) => {
  const handleDeleteQuestion = async () => {
    try {
      const response = await axios.delete(`https://cae-bookstore.herokuapp.com/question/${questionId}`);

      console.log('Question deleted successfully!', response.data);

      
    } catch (error) {
     
      console.error('Failed to delete question:', error);
    }
  };

  return (
    <div>
      <h2>Delete Question</h2>
      <p>Are you sure you want to delete this question? This action cannot be undone.</p>
      <button onClick={handleDeleteQuestion}>Delete Question</button>
    </div>
  );
};

export default DeleteQuestion;
