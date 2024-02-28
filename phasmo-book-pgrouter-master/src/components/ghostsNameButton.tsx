import { ghosts } from "@/data/ghostsandevidences";
import React, { useEffect, useState } from "react";

export const GhostsNameButton: React.FC = () => {
  const [buttonStates, setButtonStates] = useState<{
    [key: string]: boolean | null;
  }>({});
  const [evidenceTrueArray, setEvidenceTrueArray] = useState<string[]>([]);

  const ghostsNameArray = Object.keys(ghosts);
  const uniqueEvidenceSet = new Set(Object.values(ghosts).flat());
  const uniqueEvidence = Array.from(uniqueEvidenceSet);

  const handleClick = (evidence: string) => {
    setButtonStates((prevStates) => ({
      ...prevStates,
      [evidence]: toggleState(prevStates[evidence]),
    }));
  };

  const toggleState = (currentState: boolean | null) => {
    if (currentState === true) return false;
    if (currentState === false) return null;
    return true;
  };

  useEffect(() => {
    const trueEvidences = uniqueEvidence.filter(
      (evidence) => buttonStates[evidence] === true
    );

    if (trueEvidences.length > 0) {
      console.log("Evidências com valor true:", trueEvidences);

      const matchingGhosts: string[] = ghostsNameArray.filter((ghost) =>
        trueEvidences.every((evidence) => ghosts[ghost].includes(evidence))
      );

      console.log("Fantasmas correspondentes:", matchingGhosts);
      setEvidenceTrueArray(matchingGhosts);
    } else {
      setEvidenceTrueArray([]);
    }
  }, [buttonStates]);

  console.log(uniqueEvidence);
  console.log(buttonStates);

  return (
    <>
      <div className="grid grid-cols-2 pt-10 px-40 justify-items-center">
        {uniqueEvidence.map((evidence) => (
          <button
            key={evidence}
            className={`${
              buttonStates[evidence] === true
                ? "border-[1px] border-white m-2 rounded-full bg-red-400"
                : ""
            } ${
              buttonStates[evidence] === false
                ? "line-through opacity-80 border-[1px]"
                : ""
            } m-2 border-[1pxt rounded-full w-[250px]`}
            onClick={() => handleClick(evidence)}
          >
            {evidence}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 pt-10 justify-items-center">
        {ghostsNameArray.map((ghost) => (
          <button
            key={ghost}
            className={`my-2 w-[250px] ${
              evidenceTrueArray.includes(ghost) ? "bg-red-400" : ""
            }`}
          >
            {ghost}
          </button>
        ))}
      </div>
    </>
  );
};
