
import axios from 'axios';

const DeleteUserAccount = ({ userId={} }) => {
  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete(`https://cae-bookstore.herokuapp.com/users/${userId}`);

      console.log('User account deleted successfully!', response.data);

      
    } catch (error) {
      
      console.error('Failed to delete user account:', error);
    }
  };

  return (
    <div>
      <h2>Delete User Account</h2>
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      <button onClick={handleDeleteAccount}>Delete Account</button>
    </div>
  );
};

export default DeleteUserAccount;
