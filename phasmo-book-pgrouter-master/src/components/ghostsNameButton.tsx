import { ghosts } from "@/data/ghostsandevidences";
import React, { useState } from "react";

export default function GhostsNameButton() {
  const [buttonStates, setButtonStates] = useState({});

  const ghostsNameArray = Object.keys(ghosts);
  const ghostsEvidencesArray = Object.values(ghosts).flat();
  const uniqueEvidenceSet = new Set(ghostsEvidencesArray);
  const uniqueEvidence = Array.from(uniqueEvidenceSet);

  const handleClick = (index: number) => {
    setButtonStates((prevStates: []) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };

  return (
    <>
      <div className="grid grid-cols-2 pt-10 px-40">
        {uniqueEvidence.map((evidence, index) => (
          <button
            key={evidence}
            className={`${buttonStates[index] ? "bg-red-400" : ""} `}
            onClick={() => handleClick(index)}
          >
            {evidence}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 pt-10 px-40">
        {ghostsNameArray.map((ghost) => (
          <button key={ghost} className="m-2">
            {ghost}
          </button>
        ))}
      </div>
    </>
  );
}
