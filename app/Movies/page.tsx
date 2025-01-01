"use client"
import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

const Home = () => {
    const movieVideos = [
        {
          id:1,
          title: "John Carter",
          creator: "Miklehigh",
          thumbnail: "https://i.pinimg.com/736x/04/35/b5/0435b5740ec9edcbe7dc003247495c72.jpg",
        },
        {
          id:2,
          title: "Coming to America",
          creator: "Miklehigh",
          thumbnail: "https://i.pinimg.com/736x/04/35/b5/0435b5740ec9edcbe7dc003247495c72.jpg",
        },
        {
          id:3,
          title: "Avatar - James Cameron",
          creator: "Miklehigh",
          thumbnail: "https://i.pinimg.com/736x/04/35/b5/0435b5740ec9edcbe7dc003247495c72.jpg",
        },
        {
          id:4,
          title: "Last Victims",
          creator: "Miklehigh",
          thumbnail: "https://i.pinimg.com/736x/04/35/b5/0435b5740ec9edcbe7dc003247495c72.jpg",
        },
      ];

  return (
    <>
      <Header />
      <section className="bg-blue-200 text-center py-36">
      <h1 className="text-5xl font-bold text-gray-800">
       Movies
      </h1>
    </section>
      <main className="flex flex-col mx-auto container">
        <Carousel title="Movies" videos={movieVideos} />
      </main>
    </>
  );
};

export default Home;
