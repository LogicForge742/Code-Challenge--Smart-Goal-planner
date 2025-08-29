import { useParams } from "react-router-dom";
import { useGoalsStore } from "../store/useGoalsStore";
import { EditGoal } from "../Components/EditGoal";
import { useState } from "react";

export const ViewGoal = () => {
  // useParams returns an object; destructure id from it
  const { id } = useParams();

  // useGoalsStore returns an object, destructure what you need
  const { goals, updateGoal } = useGoalsStore();

  const [isEditing, setIsEditing] = useState(false);

  // Find the goal by id (parsed to int)
  const goal = goals.find(goal => goal.id === parseInt(id));

  const handleGoalUpdate = (updatedGoal) => {
    updateGoal(id, updatedGoal);
    setIsEditing(false);
  };

  if (!goal) {
    return <p>Goal not found.</p>;
  }

  return (
    <div>
      <h2>{goal.name}</h2>
      <p>{goal.targetAmount}</p>
      <p>{goal.savedAmount}</p>
      <p>{goal.category}</p>
      <p>{goal.deadline}</p>
      <p>{goal.createdAt}</p>

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Cancel" : "Edit Goal"}
      </button>

      {isEditing && (
        <EditGoal
          goal={goal}
          onUpdate={handleGoalUpdate}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};
