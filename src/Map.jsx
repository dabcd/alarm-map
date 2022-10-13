import React, { useState } from "react";
import * as paths from "./assets/paths";
import { pathsHelper } from "./assets/paths-helper";
import Tooltip from "./Tooltip";

export default function Map({ data }) {
  const [pathName, setPathName] = useState(null);
  // console.log(data);
  function getPath(name) {
    setPathName(name);
  }
  const pathsGenerator = pathsHelper.map((elem) => {
    let cssClass = data.states[elem.name].enabled ? "alert" : "quiet";
    return (
      <path
        d={paths[elem.pathName]}
        key={elem.id}
        id={elem.id}
        name={elem.name}
        className={cssClass}
        onClick={() => getPath(elem.name)}
      ></path>
    );
  });
  return (
    <div className="Map">
      <svg
        baseProfile="tiny"
        fill="#7c7c7c"
        height="670"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        version="1.2"
        viewBox="0 0 1000 670"
        width="1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        {pathsGenerator}
      </svg>
      <Tooltip pathName={pathName} data={data} />
    </div>
  );
}
