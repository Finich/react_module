import './App.css';
import Launches from "./Launches/Launches";
import './Launch/Launch.css'
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
// mission_name":
// launch_year":
// "mission_patch_small":

function App() {
  return (
    <div className="App">
      <Launches />
    </div>
  );
}

export {App};
