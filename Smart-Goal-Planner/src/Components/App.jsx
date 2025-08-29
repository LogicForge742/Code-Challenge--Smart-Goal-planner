import {Routes ,Route} from "react-router-dom"
import { AddGoalScreen } from "../Pages/AddGoalScreen";
import {ViewGoals} from "../Pages/ViewGoals"
import {ViewGoal} from "../Pages/ViewGoal"
import { Welcome} from "../Pages/Welcome";
// import './App.css';
// import { AddAmountToGoal } from "./AddAmountToGoal";




function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="/add-goal" element={<AddGoalScreen />} />
                <Route path="/view-goals" element={<ViewGoals />} />
                {/* <Route path="/add-amount" element={<AddAmountToGoal />} /> */}
                <Route path="/goals/:id" element={<ViewGoal />} />
            </Routes>
        </div>
    );

}

export default App;