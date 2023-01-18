import React, { useState } from "react";
import "./App.css";
import { panels, Panel } from "./panels";

const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState<number>(0);

  return (
    <div className="container">
      {panels.map((panel: Panel, index: number) => (
        <div
          key={index}
          className={`panel ${index === activePanel ? "active" : "inactive"}`}
          style={{ backgroundImage: `url(${panel.background})` }}
          onClick={() => setActivePanel(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
