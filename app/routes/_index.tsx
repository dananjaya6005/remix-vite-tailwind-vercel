import type { MetaFunction } from "@vercel/remix";
import { Suspense } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";



import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-screen min-h-screen  " style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-red-800 font-semibold text-xl " >Welcome to Remix js da </h1>

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
          <a className="text-green-500" target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs by new
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

      <Link className="text-blue-500 font-semibold" to="/myroute">my route </Link>



      <Button variant="outline" as="button">Button</Button>

    <div className=" w-fit" >

    <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
    </div>
 

<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>


    </div>
  );
}
