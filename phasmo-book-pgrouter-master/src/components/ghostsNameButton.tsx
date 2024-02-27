import { ghosts } from "@/data/ghostsandevidences";
import React, { useEffect, useState } from "react";

export default function GhostsNameButton() {
  const [buttonStates, setButtonStates] = useState({});
  const [evidenceTrueArray, setEvidenceTrueArray] = useState([]);

  const ghostsNameArray = Object.keys(ghosts);
  const uniqueEvidenceSet = new Set(Object.values(ghosts).flat());
  const uniqueEvidence = Array.from(uniqueEvidenceSet);

  const handleClick = (evidence) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [evidence]: toggleState(prevStates[evidence]),
    }));
  };

  const toggleState = (currentState) => {
    if (currentState === true) return false;
    if (currentState === false) return null;
    return true; // if currentState is null or undefined, set it to true
  };

  useEffect(() => {
    // Verifica e armazena as evidências com valor true
    const trueEvidences = uniqueEvidence.filter(
      (evidence) => buttonStates[evidence] === true
    );

    if (trueEvidences.length > 0) {
      console.log("Evidências com valor true:", trueEvidences);

      // Pesquisa todos os fantasmas com base na evidência
      const matchingGhosts = ghostsNameArray.filter((ghost) =>
        trueEvidences.every((evidence) => ghosts[ghost].includes(evidence))
      );

      console.log("Fantasmas correspondentes:", matchingGhosts);
      setEvidenceTrueArray(matchingGhosts);
    } else {
      // Se não houver evidências verdadeiras, resete o estado para vazio
      setEvidenceTrueArray([]);
    }
  }, [buttonStates]);

  console.log(uniqueEvidence);
  console.log(buttonStates);

  return (
    <>
      <div className="grid grid-cols-2 pt-10 px-40">
        {uniqueEvidence.map((evidence) => (
          <button
            key={evidence}
            className={`${
              buttonStates[evidence] === true ? "bg-red-400" : ""
            } ${
              buttonStates[evidence] === false ? "bg-blue-400" : ""
            } + border-[1px] border-white m-2 rounded-full`}
            onClick={() => handleClick(evidence)}
          >
            {evidence}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 pt-10 px-40">
        {ghostsNameArray.map((ghost) => (
          <button
            key={ghost}
            className={`m-2 ${
              evidenceTrueArray.includes(ghost) ? "bg-red-400" : ""
            }`}
          >
            {ghost}
          </button>
        ))}
      </div>
    </>
  );
}
