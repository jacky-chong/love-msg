"use client";
import {
  CopyOutlined,
  LinkOutlined,
  MutedOutlined,
  PlaySquareOutlined,
  SearchOutlined,
  SoundOutlined,
} from "@ant-design/icons";
import { Button, Form, Space, Image, Card } from "antd";
import TextArea from "antd/es/input/TextArea";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

type Preview = {
  message: string;
};

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const BollanConfetti = ({ message }: Preview) => {
  const characters = Array.from(message);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
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

  return (
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
  );
};

export default BollanConfetti;
