import {GoalCard} from './GoalCard';

 export const GoalList =({goals , onUpdate, onDelete})=>{

    const handleDeleteGoal =async (id)=>{
        if (window.confirm("Are you sure you want to delete this goal?")) {
        await onDelete(id)
    }
}
    const handleUpdateGoal = async (id, updatedGoal) =>{
        if (window.confirm("Are you sure you want to update this goal?")) {
        await onUpdate(id, updatedGoal)
    }
}


    return (
        <div className="goal-list">
            { goals &&  goals.length >0 ?
            
            <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
            {goals.map((goal) => (
                <GoalCard 
                    key={goal.id} 
                    goal={goal} 
                    onUpdate={handleUpdateGoal} 
                    onDelete={handleDeleteGoal} 
                />
            ))}
            </div>
        : <p>No goals available. Please add a goal.</p> 
    }
        </div>
    );
}
