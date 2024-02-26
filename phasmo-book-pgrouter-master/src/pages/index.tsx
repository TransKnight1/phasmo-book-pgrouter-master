import { useState } from "react";
import { ghosts } from "@/data/ghostsandevidences";
import GhostsNameButton from "@/components/ghostsNameButton";

export default function Home() {
  return (
    <>
      <div className="flex text-white font-bold justify-center">
        Olá fantasminha
      </div>
      <div>
        <GhostsNameButton />
      </div>
    </>
  );
}
