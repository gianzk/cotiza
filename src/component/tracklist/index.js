import React from "react";
import "./style.scss";

const optionsMenu = [
  { id: 1, name: "Datos" },
  { id: 2, name: "Arma tu plan" },
];

const TrackList = () => {
  return (
    <div className="Container">
      <div className="Container-List">
        {optionsMenu.map((e) => (
          <li className="Container-List-Item" key={e.id}>
            <p className="Container-List-Item-Id">{e.id}</p>
            <p className="Container-List-Item-Name">{e.name}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
