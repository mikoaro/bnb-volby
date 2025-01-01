"use client"
import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Home = () => {
    const shortVideos = [
        {
          id:1,
          title: "Avatar - James Cameron",
          creator: "Miklehigh",
          thumbnail: "https://www.vidyard.com/wp-content/uploads/canva-youtube-thumbnail-templates-1024x592.jpg",
        },
        {
          id:2,
          title: "Last Victims",
          creator: "Miklehigh",
          thumbnail: "https://www.vidyard.com/wp-content/uploads/canva-youtube-thumbnail-templates-1024x592.jpg",
        },
        {
          id:3,
          title: "John Carter",
          creator: "Miklehigh",
          thumbnail: "https://www.vidyard.com/wp-content/uploads/canva-youtube-thumbnail-templates-1024x592.jpg",
        },
        {
          id:4,
          title: "Coming to America",
          creator: "Miklehigh",
          thumbnail: "https://www.vidyard.com/wp-content/uploads/canva-youtube-thumbnail-templates-1024x592.jpg",
        },   
      ];

  return (
    <>
      <Header />
      <section className="bg-blue-200 text-center py-36">
      <h1 className="text-5xl font-bold text-gray-800">
       Youtube Short Videos
      </h1>
    </section>
      <main className="flex flex-col mx-auto container">
        <Carousel title="Youtube-Shorts" videos={shortVideos} />
      </main>
    </>
  );
};

export default Home;
