"use client";

import { useEffect, useState } from "react";
import "./test.css";
import Show from "@/components/Show";

const Page = () => {
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  useEffect(() => {
    const merrywrap = document.getElementById("merrywrap")!;
    const box = merrywrap.getElementsByClassName(
      "giftbox"
    )[0] as HTMLDivElement;
    let step = 1;
    const stepMinutes = [2000, 2000, 1000, 1000];

    const openBox = () => {
      setIsBoxOpened(true); // Set the state when the box is clicked
      if (step === 1) {
        box.removeEventListener("click", openBox);
      }
      stepClass(step);
      if (step === 4) {
        reveal();
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    };

    const stepClass = (step: number) => {
      merrywrap.className = "merrywrap";
      merrywrap.className = `merrywrap step-${step}`;
    };

    const reveal = () => {
      const merrywrapEl = document.querySelector(
        ".merrywrap"
      ) as HTMLDivElement;
      if (merrywrapEl) merrywrapEl.style.backgroundColor = "transparent";

      let w: number, h: number;
      if (window.innerWidth >= 1000) {
        w = 295;
        h = 185;
      } else {
        w = 255;
        h = 155;
      }
    };

    box.addEventListener("click", openBox);

    return () => {
      box.removeEventListener("click", openBox); // Cleanup listener
    };
  }, []);
  return (
    <Show>
      <canvas id="canvas"></canvas>
      <div id="merrywrap" className="merrywrap">
        <div className="giftbox">
          <div className="cover">
            <div></div>
          </div>
          <div className="box"></div>
        </div>
        <div className="icons"></div>
      </div>
      {/* Conditionally render something based on the box being opened */}
      <Show isTrue={isBoxOpened}>
        <div>
          <h2>The gift box is opened!</h2>
          {/* Add more elements here as needed */}
        </div>
      </Show>
    </Show>
  );
};

export default Page;
