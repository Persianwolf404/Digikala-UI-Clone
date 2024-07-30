"use client";
import React, {
  useState,
  MouseEvent,
  TouchEvent,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Image from "next/image";
import { IoClose, IoPlay } from "react-icons/io5";
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
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const playerRef = useRef<Player | null>(null);
  const videoNode = useRef<HTMLVideoElement | null>(null);
  const [isPaused, setPaused] = useState(true);

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

        player.on("ended", function () {
          player?.currentTime(0);
          player?.play();
        });

        player.on("pause", () => {
          setPaused(true);
        });

        player.on("play", () => {
          setPaused(false);
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

  // Horizontal Drag Scroll Logic
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const onMouseDown = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !containerRef.current) return;

      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const onMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
    }
  }, [isDragging]);

  const onTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].clientX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  }, []);

  const onTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (!isDragging || !containerRef.current) return;

      const x = e.touches[0].clientX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    },
    [isDragging, startX, scrollLeft]
  );

  const onTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="w-auto user-select-none overflow-hidden">
        <div className="relative bg-gray-900">
          <button
            onClick={onClose}
            className="absolute left-5 top-5 !z-[30] text-white"
          >
            <IoClose />
          </button>
          {isPaused && (
            <button
              onClick={() => playerRef.current?.play()}
              className="absolute bg-transparent text-white text-6xl  w-full h-[85%] flex items-center justify-center z-20"
            >
              <IoPlay />
            </button>
          )}
          <div className="absolute z-10 text-white w-full px-5 bottom-[18%]">
            <h2 className="text-[1.4rem] mb-4 font-bold">متن لورم ایپسوم</h2>
            <p className="font-light">لورم ایپسوم یک متن ساختگی است</p>
          </div>
          <video
            id="story-video"
            className="video-js w-[360px] h-[640px] vjs-default-skin"
            ref={videoNode}
          />
          <div
            ref={containerRef}
            className={`h-[80px] user-select-none w-[360px] overflow-x-scroll scrollbar-hide flex relative ${
              isDragging ? "cursor-grabbing" : "cursor-pointer"
            }`}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="scroll-container absolute flex overflow-x-auto h-full p-2 gap-2">
              <div className="w-[240px] flex bg-[#fff] rounded">
                <div className="w-[60px] flex h-[60px]">
                  <Image
                    src={
                      "https://dkstatics-public.digikala.com/digikala-products/fdd4a60200f77ab9c11bb15b7b4136d3243ecbe6_1692481392.jpg?x-oss-process=image/resize,m_lfit,h_115,w_115/quality,q_60"
                    }
                    width={60}
                    height={60}
                    alt="banner"
                  />
                </div>
                <div className="text-sm flex items-center">
                  <h3>لورم ایپسوم یک متن ساختگی است</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
