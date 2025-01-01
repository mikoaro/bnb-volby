"use client"
import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Home = () => {
    const nftVideos = [
        {
          id:1,
          title: "Avatar - James Cameron",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/Nz8g9WkKbqQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoLaoIz7kxZfTEKQJccnXYDG2CQA",
        },
        {
          id:2,
          title: "Last Victims",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/Nz8g9WkKbqQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoLaoIz7kxZfTEKQJccnXYDG2CQA",
        },
        {
          id:3,
          title: "John Carter",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/Nz8g9WkKbqQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoLaoIz7kxZfTEKQJccnXYDG2CQA",
        },
        {
          id:4,
          title: "Coming to America",
          creator: "Miklehigh",
          thumbnail: "https://i.ytimg.com/vi/Nz8g9WkKbqQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAoLaoIz7kxZfTEKQJccnXYDG2CQA",
        },   
      ];

  return (
    <>
      <Header />
      <section className="bg-blue-200 text-center py-36">
      <h1 className="text-5xl font-bold text-gray-800">
       Nft Videos
      </h1>
    </section>
      <main className="flex flex-col mx-auto container">
        <Carousel title="Nfts" videos={nftVideos} />
      </main>
    </>
  );
};

export default Home;
