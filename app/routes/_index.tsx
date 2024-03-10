import type { MetaFunction } from "@vercel/remix";
import { Suspense } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="w-screen min-h-screen bg-blue-200 " style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-600 font-semibold " >Welcome to Remix js </h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial by dana
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>

      <Suspense   fallback={<div>Loading...</div>}>
        <AudioPlayer
          autoPlay
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      </Suspense>




    </div>
  );
}
