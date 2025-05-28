"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function AudioMusic() {
  const audioPlayer = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (audioPlayer && audioPlayer.current) {
      setPlaying(true);
      audioPlayer.current.volume = 0.3;
      audioPlayer.current.play();
    }
  };

  const stop = () => {
    if (audioPlayer && audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0;
    }
  };

  const onPlaying = () => {
    if (audioPlayer && audioPlayer.current) {
      if (audioPlayer.current.paused) setPlaying(false);
    }
  };

  return (
    <figure className="flex gap-3 items-center">
      <div
        onClick={!playing ? play : stop}
        className="cursor-pointer flex gap-4"
      >
        <p className="hidden xl:block">Musik und Effekte</p>

        <Image
          src={"/Header/musicIcon.png"}
          width={40}
          height={23}
          alt="Музыка"
        />
      </div>
      <audio
        ref={audioPlayer}
        onTimeUpdate={onPlaying}
        src="/Audio/Downpour-Sad-Dramatic-Music-chosic.com_.mp3"
      ></audio>
    </figure>
  );
}
