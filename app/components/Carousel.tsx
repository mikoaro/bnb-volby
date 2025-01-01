"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface VideoCardProps {
  id: string; // Added an ID for dynamic routing
  title: string;
  creator: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, creator, thumbnail }) => {
  return (
    <Link href={`/details/${id}`}>
      <Card className="h-[300px] w-[350px] cursor-pointer transition-transform hover:scale-105">
        <img
          src={thumbnail}
          alt={title}
          className="w-full object-cover rounded-t-lg"
        />
        <div className="p-4">
        <p className="text-sm text-gray-500">By {creator}</p>
          <h3 className="text-lg font-semibold text-gray-800 mt-3">{title}</h3>
        </div>
      </Card>
    </Link>
  );
};

interface CarouselProps {
  title: string;
  videos: VideoCardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ title, videos }) => {
  return (
    <section className="pt-9">
      <div className="flex flex-col p-5">
        <div className="flex justify-between container px-6">
          <div className="flex gap-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <Link href={`/${title}`}>
            <Button className="bg-blue-400 bg-opacity-0 rounded-full hover:bg-gray-400">
            <ChevronRight className="text-5xl text-blue-800" />
            </Button>
            </Link>
            
          </div>
        
          <div className="flex gap-2">
            <Button className="">
            <ChevronLeft className="size-10" />
            </Button>
            <Button className="">
            <ChevronRight className="size-10" />
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mx-auto">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              title={video.title}
              creator={video.creator}
              thumbnail={video.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
