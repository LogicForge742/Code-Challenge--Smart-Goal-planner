import { useNavigate } from "react-router-dom";

export  const GoalCard = ({ goal,  onDelete }) => {
    const navigate = useNavigate()


    const handleViewGoal = () => {
        navigate(`/goals/${goal.id}`);
    }

    const handleDeleteGoal = (goal) => {
        if (goal.id)  {
            onDelete(goal.id)
        }
    }

    // const handleUpdateGoal = (goal) =>{
    //     if (goal.id) {
    //         onUpdate(goal.id, goal)
    //     }
    // }


    return (
        <div className="goal-card">
            <h3>{goal.name}</h3>
            <p>{goal.targetAmount}</p>
            <p>{goal.savedAmount}</p>
            <p>{goal.category}</p>
            <p>{goal.targetAmount}</p>
            <p>{goal.deadline}</p>
            <p>{goal.createdAt}</p>
         <button onClick={() => handleViewGoal( goal)}>View Goal</button>
         {/* <button onClick={() => handleUpdateGoal(goal)}>Update Goal</button> */}
         <button onClick={() => handleDeleteGoal(goal)}>Delete Goal</button>

            </div>
    )
}