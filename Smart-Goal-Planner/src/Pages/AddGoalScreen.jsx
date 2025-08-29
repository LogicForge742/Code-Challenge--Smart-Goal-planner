import { useState } from "react";
import { AddGoal } from "../Components/AddGoal";
import { useGoalsStore } from "../store/useGoalsStore";

export const AddGoalScreen = () => {
  const addGoal = useGoalsStore((state) => state.addGoal);

  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState(0);
  const [savedAmount, setSavedAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  return (
    <div style={styles.container}>
      <div style={styles.bigCard}>
        <h2 style={styles.title}>Add New Goal</h2>
        <div style={styles.formCard}>
          <AddGoal
            name={name}
            setName={setName}
            targetAmount={targetAmount}
            setTargetAmount={setTargetAmount}
            savedAmount={savedAmount}
            setSavedAmount={setSavedAmount}
            category={category}
            setCategory={setCategory}
            deadline={deadline}
            setDeadline={setDeadline}
            createdAt={createdAt}
            setCreatedAt={setCreatedAt}
            addGoal={addGoal}
            inputStyle={styles.input}
            labelStyle={styles.label}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "3rem auto",
    padding: "1rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  bigCard: {
    backgroundColor: "#fff",
    borderRadius: "18px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    padding: "30px 40px",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  formCard: {
    backgroundColor: "#f9faff",
    borderRadius: "14px",
    padding: "30px 35px",
    boxShadow: "inset 0 0 14px rgba(0,0,0,0.05)",
  },
  label: {
    display: "block",
    fontWeight: "700",
    marginBottom: "10px",
    fontSize: "1.2rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "18px 22px",
    marginBottom: "24px",
    borderRadius: "14px",
    border: "2px solid #ccc",
    fontSize: "1.3rem",
    fontFamily: "inherit",
    backgroundColor: "#fff",
    color: "#333",
    boxShadow: "inset 0 1px 6px rgba(0,0,0,0.1)",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  },
  inputFocus: {
    borderColor: "#4a90e2",
    boxShadow: "0 0 12px #4a90e2",
  },
};
