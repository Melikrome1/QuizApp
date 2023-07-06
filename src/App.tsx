import React from 'react';
import './index.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionList from './components/QuestionList';
import Register from './components/Register';
import LoginForm from './components/LoginForm';
import EditQuizQuestion from './components/EditQuizQuestions';
import DeleteQuestions from './components/DeleteQuestions';
import DeleteUserAccount from './components/DeleteUserAccount';
import CreateQuizQuestions from './components/CreateQuizQuestions';
import ProfileEdits from './components/ProfileEdits';

const App: React.FC = () => {
  return (
    <>
      <div>Quiz Up Today!</div>
      <Router>
        <Routes>
          <Route path="/" element={<QuestionList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile/edit" element={<ProfileEdits />} />
          <Route path="/questions/create" element={<CreateQuizQuestions />} />
          <Route path="/questions/edit/:questionId" element={<EditQuizQuestion />} />
          <Route path="/questions/delete" element={<DeleteQuestions />} />
          <Route path="/account/delete" element={<DeleteUserAccount />} />
        </Routes>
      </Router>
    </>
  );
};






export default App;


