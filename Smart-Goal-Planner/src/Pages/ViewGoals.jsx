import { GoalList } from '../Components/GoalList';
import { useGoalsStore } from '../store/useGoalsStore';
import { useEffect } from 'react';
import { AddAmountToGoal } from '../Components/AddAmountToGoal'; // import it

export const ViewGoals = () => {
  const { goals, fetchAllGoals, updateGoal, deleteGoal } = useGoalsStore();

  useEffect(() => {
    fetchAllGoals();
  }, [fetchAllGoals]);

  return (
    <div>
      <h1>All Goals</h1>

      {/* Render the GoalList as usual */}
      <GoalList goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} />

      <h2>Add Amount to Goal</h2>

      {/* Render the AddAmountToGoal component */}
      <AddAmountToGoal goals={goals} updateGoal={updateGoal} />
    </div>
  );
};

