"use client"
import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Home = () => {
    const tikTokVideos = [
        {
          id:1,
          title: "Avatar - James Cameron",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/5Zx6PvS6irc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0O9iz_EsYNivqogwuXxRka4GKdg",
        },
        {
          id:2,
          title: "Last Victims",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/5Zx6PvS6irc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0O9iz_EsYNivqogwuXxRka4GKdg",
        },
        {
          id:3,
          title: "John Carter",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/5Zx6PvS6irc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0O9iz_EsYNivqogwuXxRka4GKdg",
        },
        {
          id:4,
          title: "Coming to America",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/5Zx6PvS6irc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0O9iz_EsYNivqogwuXxRka4GKdg",
        },   
      ];

  return (
    <>
      <Header />
      <section className="bg-blue-200 text-center py-36">
      <h1 className="text-5xl font-bold text-gray-800">
      Tik-Tok Videos
      </h1>
    </section>
      <main className="flex flex-col mx-auto container">
        <Carousel title="Tik-tok" videos={tikTokVideos} />
      </main>
    </>
  );
};

export default Home;
