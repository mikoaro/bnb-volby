"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import { Heart, Gem, BotMessageSquare, ArrowUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Tip from "@/app/components/Tip";

const VideoDetails = () => {
  const [isBotSectionVisible, setIsBotSectionVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Trending"); // State to track active tab

  const toggleBotSection = () => {
    setIsBotSectionVisible(!isBotSectionVisible);
  };

  // Content for each tab
  const tabContent = {
    Trending: [
      { id: 1, title: "Trending Video 1", creator: "Creator A" },
      { id: 2, title: "Trending Video 2", creator: "Creator B" },
    ],
    Recommended: [
      { id: 1, title: "Recommended Video 1", creator: "Creator C" },
      { id: 2, title: "Recommended Video 2", creator: "Creator D" },
    ],
    Tips: [
      { id: 1, title: "Investment Tip 1", creator: "Expert X" },
      { id: 2, title: "Investment Tip 2", creator: "Expert Y" },
    ],
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Header />
      <main className="flex flex-col container justify-center mx-auto gap-7 py-10">
        <div className="flex justify-between gap-5">
          {/* Main Video Section */}
          <div className="w-full aspect-video">
            {/* Video Placeholder */}
            <video
              className="w-full h-50"
              controls
              src="https://www.youtube.com/watch?v=UwU2QG0zd60"
            />
            <h1 className="text-2xl font-bold text-gray-800 mt-2">
              Top 10 YouTube Videos
            </h1>
            <p className="text-md text-gray-500">22h</p>

            {/* Bottom Section */}
            <div className="flex mt-3">
              {/* Left Section */}
              <div className="w-full">
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <Image
                      src="/profile2.jpg"
                      alt="creator"
                      className="rounded-full"
                      width={50}
                      height={30}
                    />
                    <div>
                      <h3 className="font-bold text-gray-800">Miklehigh</h3>
                      <button className="text-blue-600 hover:underline text-sm">
                        + Follow
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={openDialog}
                      className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      <Gem className="text-white mr-2" /> Tip
                    </button>
                    {/* Dialog */}
                    {isDialogOpen && (
                      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-xl">
                          <div className="flex justify-between text-2xl text-blue-700 font-bold">
                          <h2 className="text-2xl font-semibold text-blue-700">
                          Tip
                          </h2>
                            {/* Close Button */}
                            <button
                              onClick={closeDialog}
                              className="text-gray-500 hover:text-red-600 text-lg"
                            >
                              X
                            </button>
                          </div>
                          {/* Tip Component */}
                          <Tip />
                        </div>
                      </div>
                    )}
                    <button className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
                      <Heart className="text-red-700 mr-2" /> Like
                    </button>
                    <button
                      onClick={toggleBotSection}
                      className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                    >
                      <BotMessageSquare className="text-green-700 mr-2" /> Volby
                      Bot
                    </button>
                  </div>
                </div>

                <div className="my-5">
                  <p className="mt-6 text-gray-700">
                    Top 10 YouTube Videos description goes here. Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit.
                  </p>
                  <button className="text-blue-600 hover:underline text-sm mt-2">
                    Show More
                  </button>
                </div>
                <hr />

                {/* Comment Section */}
                <div className="mt-4 flex">
                  <div className="flex gap-3">
                    <Image
                      src="/profile1.png"
                      alt="comment"
                      className="rounded-full"
                      width={50}
                      height={30}
                    />
                    <label htmlFor="Add Comment" className="mx-2 mt-3">
                      Add Comment
                    </label>
                  </div>

                  <div className="flex flex-1 justify-between mt-2 gap-2">
                    <Input className="w-full"></Input>
                    <Button className="bg-blue-500 hover:bg-blue-800">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 w-1/3">
            {/* Collapsible Right Section Bot Section */}
            {isBotSectionVisible && (
              <Card className="bg-gray-950 p-4 rounded-lg shadow-md h-[570]">
                <div className="flex">
                  <BotMessageSquare className="text-green-700 mr-2" />
                  <h2 className="font-bold text-lg text-white">Volby Bot</h2>
                </div>

                <p className="text-sm text-white mb-4">
                  Choose a question from the list below or ask your own:
                </p>
                <ul className="space-y-2">
                  <li className="text-white">What is the video about?</li>
                  <li className="text-white">
                    How does Investo AI simplify investing using AI?
                  </li>
                  <li className="text-white">
                    What services does Investo AI offer?
                  </li>
                  <li className="text-white">
                    How does Investo AI make investing accessible for everyone?
                  </li>
                  <li className="text-white">
                    What features are available for users on the Investo AI
                    platform?
                  </li>
                  <li className="text-white">
                    How can Investo AI help users achieve their financial goals?
                  </li>
                </ul>

                <div className="flex flex-1 justify-between mt-2 gap-2 border border-gray-400 rounded-md p-1">
                  <Input
                    className="w-full border-none bg-none text-white"
                    placeholder="Ask about this video"
                  ></Input>
                  <Button className="bg-gray-950 border-gray-950">
                    <ArrowUp />
                  </Button>
                </div>
              </Card>
            )}

            {/* Trending videos section */}
            <div className="w-full">
              <ul className="border-b mb-4">
                {["Trending", "Recommended", "Tips"].map((tab) => (
                  <li
                    key={tab}
                    className={`inline-block mr-4 pb-2 cursor-pointer ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                {tabContent[activeTab].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 border p-4 rounded-md"
                  >
                    <Image
                      src="/details.png"
                      alt="Video thumbnail"
                      className="object-cover"
                      width={120}
                      height={30}
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.creator}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default VideoDetails;
