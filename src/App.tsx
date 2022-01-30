import React, { useState } from "react";
import Fretboard from "react-fretboard";
import "./App.css";
import intervals, { IntervalDefintion } from "./intervals";

function App() {
  const getRandomInterval = () =>
    intervals[Math.floor(Math.random() * intervals.length)];

  const [entry, setEntry] = useState<IntervalDefintion>(getRandomInterval());

  const selectOption = (option: string) => {
    if (option === entry.value) {
      setEntry(getRandomInterval());
    }
  };

  let options = Array.from(new Set(intervals.map((i) => i.value)).values());

  return (
    <>
      <h1>Intervallic Functions</h1>
      <div className="fretboard-container">
        <Fretboard
          skinType="strings"
          nrOfFrets={7}
          showPositionLabels={false}
          showSelectionLabels={true}
          selectedLocations={[
            {
              loc: { str: entry.root[0], pos: entry.root[1] },
              label: "R",
              status: "4A",
            },
            {
              loc: {
                str: entry.interval[0],
                pos: entry.interval[1],
              },
              status: "1P",
            },
          ]}
          theme={{
            dimensions: {
              openWidth: 0,
            },
          }}
        />
      </div>
      <div className="options">
        {options.map((option) => {
          return (
            <button value={option} onClick={() => selectOption(option)}>
              {option}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
