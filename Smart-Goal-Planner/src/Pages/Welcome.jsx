import { Link } from 'react-router-dom';
import './Welcome.css';

export const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to the Smart Goal Planner</h1>
      <p>The ultimate platform for organizing and planning your Goals.</p>

      <div className="button-group">
        <Link to="/add-goal">
          <button>Add Goal</button>
        </Link>

        <Link to="/view-goals">
          <button>View Goals</button>
        </Link>


        <Link to="/add-amount">
          <button>Add Amount</button>
        </Link>

      </div>
    </div>
  );
};

