"use client";
import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import "video.js/dist/video-js.css";
import videojs from "video.js";
import Player from "video.js/dist/types/player";

const videoJsOptions = {
  controls: true,
  autoplay: false,
  controlBar: {
    fullscreenToggle: false,
    pictureInPictureToggle: false,
    volumePanel: { inline: false },
    autoHide: false,
    children: [
      "volumePanel",
      "progressControl",
      "liveDisplay",
      "seekToLive",
      "playbackRateMenuButton",
      "chaptersButton",
      "descriptionsButton",
      "subtitlesButton",
      "captionsButton",
      "audioTrackButton",
    ],
  },
  userActions: {
    doubleClick: () => {},
  },
};

export default function StoryModal({ title }: { title: string }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const playerRef = useRef<Player | null>(null);
  const videoNode = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const element = document.getElementById(title);
    const handleClick = () => {
      onOpen();
    };
    if (element) {
      element.addEventListener("click", handleClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", handleClick);
      }
    };
  }, [title, onOpen]);

  useEffect(() => {
    let player: Player | null = null;

    if (isOpen) {
      if (videoNode.current && !playerRef.current) {
        player = videojs(videoNode.current, videoJsOptions);
        player.src({
          src: "https://assets.mixkit.co/videos/39765/39765-720.mp4",
          type: "video/mp4",
        });

        // Add the event listener here
        player.on("ended", function () {
          player?.currentTime(0);
          player?.play();
        });

        player.play();
        playerRef.current = player;
      } else if (playerRef.current) {
        playerRef.current.play();
      }
    } else if (playerRef.current) {
      playerRef.current.pause();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.off("ended");
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="w-auto overflow-hidden">
        <div className="relative  bg-gray-900 ">
          <button className="absolute !z-[30] text-white">X</button>
          <div className="absolute z-10 text-white w-full px-5 bottom-[18%]">
            <h2 className="text-[1.4rem] mb-4 font-bold ">پدر و پسر خوشحال</h2>
            <p className="font-light">
              خب الان انتظار داری چه توضیحی اینجا بدم
            </p>
          </div>
          <video
            id="story-video"
            className="video-js w-[360px] h-[640px] vjs-default-skin"
            ref={videoNode}
          />
          <div className="h-[80px] w-[360px] overflow-x-scroll flex relative ">
            <div className="absolute flex overflow-x-visible h-full p-2 gap-2 ">
              <div className="w-[240px] inline-block bg-[#fff] rounded"></div>
              <div className="w-[240px] inline-block bg-[#fff] rounded"></div>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
