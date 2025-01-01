"use client"
import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

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

  return (
    <>
      <Header />
      <section className="bg-blue-200 text-center py-36">
      <h1 className="text-5xl font-bold text-gray-800">
       Trending Videos
      </h1>
    </section>
      <main className="flex flex-col mx-auto container">
        <Carousel title="Trending" videos={trendingVideos} />
      </main>
    </>
  );
};

export default Home;
