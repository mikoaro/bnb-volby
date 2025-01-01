"use client"
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";

const Home = () => {
  const trendingVideos = [
    {
      id:1,
      title: "Top 10 YouTube Videos",
      creator: "Miklehigh",
      thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/311877497/original/c124f8078d77d9ff5ea44eb31ec9e22edbff9ad5/design-futuristic-youtube-thumbnail-ec37.png",
    },
    {
      id:2,
      title: "Logo Design in 30mins",
      creator: "Miklehigh",
      thumbnail: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-time-youtube-thumbnail-design-template-f9d2d8708538c1b8dac1279b304b68ad_screen.jpg?ts=1732464130",
    },
    {
      id:3,
      title: "PSD",
      creator: "Miklehigh",
      thumbnail: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/190181428/original/ed6cb64d540d2f80ae788983ec2a4851c81e446b/youtube-thumbnail-coming-soon-movies-full-hd-and-action-2021.jpg",
    },
    {
      id:4,
      title: "Gaming Never Dies",
      creator: "Miklehigh",
      thumbnail: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/254550011/original/622b0085270b7889c6cad37b94996c2626781196/design-a-movie-thumbnail-for-your-movie-edit.jpg",
    },
  ];

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
      <Hero />
      <main className="flex flex-col mx-auto container">
        <Carousel title="Trending" videos={trendingVideos} />
        <Carousel title="Movies" videos={movieVideos} />
        <Carousel title="Nfts" videos={nftVideos} />
        <Carousel title="Tik-tok" videos={tikTokVideos} />
        <Carousel title="Youtube-Shorts" videos={shortVideos} />
      </main>
    </>
  );
};

export default Home;
