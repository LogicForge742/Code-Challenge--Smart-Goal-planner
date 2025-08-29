export const AddGoal = ({name, setName,
     targetAmount, setTargetAmount, 
     savedAmount, setSavedAmount, 
     category, setCategory,
      deadline, setDeadline, 
      createdAt, setCreatedAt ,addGoal}) => {


        const handleAddGoal = () => {
            const newGoal = {
                name,
                targetAmount: parseFloat(targetAmount),
                savedAmount: parseFloat(savedAmount),
                category,
                deadline,
                createdAt : new Date().toISOString()
            };
            addGoal(newGoal);
            // Clear the form fields after adding the goal
            setName("");
            setTargetAmount(0);
            setSavedAmount(0);
            setCategory("");
            setDeadline("");
            setCreatedAt("");
        }
        return (
     <div>
        <form onSubmit={handleAddGoal}>
            <input 
            type="text" 
            placeholder="Goal Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input 
            type="number" 
            placeholder="Target Amount"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            />

            <input 
            type="number" 
            placeholder="Saved Amount"
            value={savedAmount}
            onChange={(e) => setSavedAmount(e.target.value)}
            />

            <input 
            type="text" 
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            />

            <input 
            type="date" 
            placeholder="Deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            />

             <input 

            type="date" 
            placeholder="Created At"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            />
            <button type="submit">Add Goal</button>
            </form>

    </div>
        )



    }