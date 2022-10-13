import "./App.css";
import Map from "./Map";
import data from "./statuses.json";

export default function App() {
  return (
    <div className="App">
      <h1>Карта тривог в Україні</h1>
      <Map data={data}/>
    </div>
  );
}
