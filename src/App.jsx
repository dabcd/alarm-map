import { useState, useEffect } from "react";
import "./App.css";
import Map from "./Map";
import data from "./statuses.json";

export default function App() {
  // const [data, setData] = useState(null);
  // const apiUrl = "https://emapa.fra1.cdn.digitaloceanspaces.com/statuses.json";

  // function getData() {
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  // }

  // useEffect(() => {
  //   getData();
  //   const interval = setInterval(() => {
  //     getData();
  //   }, 15000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="App">
      <h1>Карта повітряних тривог в Україні</h1>
      {data && <Map data={data} />}
    </div>
  );
}
