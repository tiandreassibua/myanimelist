"use client";

import { useState } from "react";
import Youtube from "react-youtube";
import { LuVideo } from "react-icons/lu";

import { Button } from "../ui/button";
import { FaTimes, FaTimesCircle } from "react-icons/fa";

export default function VideoPlayer({ youtubeId }) {
    const [show, setShow] = useState(false);

    const options = {
        width: "350",
        height: "200",
    };

    const handleClick = (e) => {
        e.preventDefault();
        setShow((prev) => !prev);
    };

    return (
        <>
            <div className="fixed bottom-2 left-2 z-50">
                {show ? (
                    <span
                        onClick={handleClick}
                        className="hover:cursor-pointer hover:text-red-500 duration-200 absolute -top-9 left-0 p-2 bg-neutral-900 text-white"
                    >
                        <FaTimes />
                    </span>
                ) : (
                    <Button
                        variant="secondary"
                        className={`absolute bottom-2 left-2 rounded-full z-50`}
                        onClick={handleClick}
                    >
                        <LuVideo size={20} className="mr-2" />
                        Tonton trailer
                    </Button>
                )}
                <div className={!show ? "hidden" : "block"}>
                    <Youtube
                        videoId={youtubeId}
                        onReady={(e) => e.target.pauseVideo()}
                        opts={options}
                    />
                </div>
            </div>
        </>
    );
}
