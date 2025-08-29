import { useState } from "react";
export const EditGoal = ({ goal, onUpdate, onClose }) => {
    const [name, setName] = useState(goal.name);
    const [targetAmount, setTargetAmount] = useState(goal.targetAmount);
    const [savedAmount, setSavedAmount] = useState(goal.savedAmount);
    const [category, setCategory] = useState(goal.category);
    const [deadline, setDeadline] = useState(goal.deadline);
    const [createdAt, setCreatedAt] = useState(goal.createdAt);

    const handleUpdate = () => {
        const updatedGoal = { ... goal , name, targetAmount, savedAmount, category, deadline, createdAt };
        onUpdate ( goal.id,updatedGoal);
    }

    return (
        <div>
            <h2>Edit Goal</h2>
                   <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Target Amount:</label>
                    <input
                        type="number"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Saved Amount:</label>
                    <input
                        type="number"
                        value={savedAmount}
                        onChange={(e) => setSavedAmount(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Category:</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    <label>Deadline:</label>
                    <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>
                <div>
                    <label>Created At:</label>
                    <input
                        type="date"
                        value={createdAt}
                        onChange={(e) => setCreatedAt(e.target.value)}
                    />
                </div>
                <button onClick ={handleUpdate}>Update Goal</button>
                <button type="submit">Save Changes</button>
                <button type="button" onClick={onClose}>Cancel</button>
        
        </div>
    );
};