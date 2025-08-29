import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const BASE_URL = 'http://localhost:3000'

  export const useGoalsStore = create(
  devtools(
    persist(
      (set) => ({
        goals: [],
          setGoal: (newGoals) => set ({goals :newGoals}),
          fetchAllGoals: async () => {
            try {
              const response = await fetch(`${BASE_URL}/goals`);
              const data = await response.json();
              set({ goals: data });
            } catch (error) {
              console.error("Failed to fetch goals:", error);
            }
          },
          addGoal: async (goal) => {
            try {
              const response = await fetch(`${BASE_URL}/goals`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(goal),
              });
              if (!response.ok) {
                throw new Error('Failed to add goal');
              }
              const newGoal = await response.json();
              set((state) => ({ goals: [...state.goals, newGoal] }));
            } catch (error) {
              console.error("Failed to add goal:", error);
            }
          },
          updateGoal: async (id, updatedGoal) => {
            try {
              const response = await fetch(`${BASE_URL}/goals/${id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedGoal),
              });
              if (!response.ok) {
                throw new Error('Failed to update goal');
              }
              const newGoal = await response.json();
              set((state) => ({
                goals: state.goals.map((goal) =>
                  goal.id === id ? newGoal : goal
                ),
              }));
            } catch (error) {
              console.error("Failed to update goal:", error);
            }
          },
          deleteGoal: async (id) => {
            try {
              const response = await fetch(`${BASE_URL}/goals/${id}`, {
                method: 'DELETE',
              });
              if (!response.ok) {
                throw new Error('Failed to delete goal');
              }
              set((state) => ({
                goals: state.goals.filter((goal) => goal.id !== id),
              }));
            } catch (error) {
              console.error("Failed to delete goal:", error);
            }
          }
      }),
      {
        name: "goals-storage", // unique name
      getStorage: () => window.localStorage, // use localStorage as the storage
      }
    )
  )
);