import { VideoList } from "@/app/components/VideoList";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { VideoItem } from "../components/video-item"

const videos = [
  {
    id: "1",
    title: "Egyptian Pharaoh",
    thumbnail: "/egyptianpharaoh.png",
    views: 1500,
    uploadDate: "2023-05-15",
    category: "Nft"
  },
  {
    id: "2",
    title: "Guided by the Stars",
    thumbnail: "/guidedbythestars.png",
    views: 3200,
    uploadDate: "2023-06-02",
    category: "Music"
  },
  {
    id: "3",
    title: "Path of Honor",
    thumbnail: "/pathofhonor.png",
    views: 2800,
    uploadDate: "2023-06-20",
    category: "Youtube"
  },
]

export default function VideosRoute() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Videos</CardTitle>
            <CardDescription>Manage your videos</CardDescription>
          </div>
          <Link href="/dashboard/create-new" className={buttonVariants()}>
            <PlusIcon /> Create Video
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        {/* <Suspense fallback={<Skeleton className="w-full h-[500px]" />}>
          <VideoList />
        </Suspense> */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoItem key={video.id} {...video} />
        ))}
      </div>
      </CardContent>
    </Card>
  );
}
