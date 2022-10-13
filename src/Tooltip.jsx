import React from "react";

export default function Tooltip(props) {
  const areaData = props.data.states[props.pathName] || null;
  let region = [];
  if (areaData) {
    Object.keys(areaData.districts).forEach((key, index) =>
      region.push(
        <div key={index}>
          {areaData.enabled
            ? "🔴"
            : areaData.districts[key].enabled
              ? "🔴"
              : "🟢"}{" "}
          {key}
        </div>
      )
    );
  }
  return (
    <div className={props.pathName ? "Tooltip border" : "Tooltip"}>
      <h2>{areaData ? (areaData.enabled ? "🔴" : "🟢") : ""} {props.pathName}</h2>
      <div className="text">
        {region}
      </div>
    </div>
  );
}
