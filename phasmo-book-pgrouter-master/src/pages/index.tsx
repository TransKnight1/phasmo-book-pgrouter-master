import { useState } from "react";
import { ghosts } from "@/data/ghostsandevidences";
import GhostsNameButton from "@/components/ghostsNameButton";

export default function Home() {
  return (
    <>
      <div className="flex text-white font-bold justify-center mt-4">
        Hello fellow ghost hunters!
      </div>
      <div>
        <GhostsNameButton />
      </div>
      <footer className="absolute w-full bottom-0 flex justify-center mb-4">
        Clone made by Leonardo Zanini
      </footer>
    </>
  );
}
