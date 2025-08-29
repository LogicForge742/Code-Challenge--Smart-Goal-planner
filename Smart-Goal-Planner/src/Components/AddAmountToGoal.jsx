// AddAmountToGoal.jsx
import { useState } from "react";

export const AddAmountToGoal = ({ goals = [], updateGoal }) => {
  const [selectedGoalId, setSelectedGoalId] = useState("");
  const [amountToAdd, setAmountToAdd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedGoalId) {
      alert("Select a valid goal");
      return;
    }

    const goal = goals.find((g) => String(g.id) === String(selectedGoalId));

    if (!goal) {
      alert("Selected goal not found");
      return;
    }

    const addedAmount = parseFloat(amountToAdd);

    if (isNaN(addedAmount) || addedAmount <= 0) {
      alert("Enter a valid amount");
      return;
    }

    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + addedAmount,
    };

    updateGoal(goal.id, updatedGoal);

    setSelectedGoalId("");
    setAmountToAdd("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedGoalId}
        onChange={(e) => setSelectedGoalId(e.target.value)}
        required
      >
        <option value="">Select a goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Amount to add"
        value={amountToAdd}
        onChange={(e) => setAmountToAdd(e.target.value)}
        min="0.01"
        step="any"
        required
      />

      <button type="submit">Add Amount</button>
    </form>
  );
};
