"use client";
import Show from "@/components/Show";
import { MutedOutlined, SoundOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "./test.css";

type Preview = {
  message: string;
};

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const BollanConfetti = ({ message }: Preview) => {
  const characters = Array.from(message);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isBoxOpened, setIsBoxOpened] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    // Display a new character every 500ms
    const interval = setInterval(() => {
      if (currentCharIndex < characters.length - 1) {
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval); // Stop the interval after the last character
      }
    }, 300); // Adjust timing as needed

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [currentCharIndex]);

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

  useEffect(() => {
    if (isBoxOpened) {
      const timer = setTimeout(() => {
        setShowContent(true); // Show the text after 2 seconds
      }, 4000);

      // Cleanup the timeout if the component is unmounted
      return () => clearTimeout(timer);
    }
  }, [isBoxOpened]);

  return (
    <Show>
      {/* <canvas id="canvas"></canvas> */}
      <div id="merrywrap" className="merrywrap">
        <div className="giftbox">
          <div className="cover">
            <div></div>
          </div>
          <div className="box"></div>
        </div>
        <div className="icons"></div>
      </div>
      <Show isTrue={showContent}>
        <div className="ant-card video-container">
          <ReactPlayer
            className="react-player"
            url="../images/birthday-tab/ballonConfettiExpo.mp4"
            playing
            muted
            loop
            controls={false}
          />
          <ReactPlayer
            className="!max-h-0"
            url="../music/ch/just_love_you.mp3" // Replace with your audio file URL
            playing
            loop
            muted={!soundOn} // Set to false if you want sound
            controls={false} // No controls for the audio player
          />
          <div className="message-overlay">
            {characters.slice(0, currentCharIndex + 1).join("")}
          </div>

          <Button
            shape="circle"
            icon={
              soundOn ? (
                <SoundOutlined className="!text-2xl" />
              ) : (
                <MutedOutlined className="!text-2xl" />
              )
            }
            onClick={() => {
              setSoundOn(!soundOn); // Toggle sound
            }}
            className="!absolute !top-2 !right-2 !z-50 !bg-transparent !border-none"
          />
        </div>
      </Show>
    </Show>
  );
};

export default BollanConfetti;
