"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Loader2 } from 'lucide-react'
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { FileUpload } from "./file-upload"
import { VideoPreview } from "./video-preview"
import { ImagePreview } from "./image-preview"
import { toast } from "sonner"

const videoCategories = [
  { id: "gaming", name: "Gaming" },
  { id: "music", name: "Music" },
  { id: "nft", name: "Nft" },
  { id: "entertainment", name: "Entertainment" },
  { id: "youtube", name: "Youtube" },
  { id: "tiktok", name: "Tiktok" },
  { id: "travel", name: "Travel" },
  { id: "vlog", name: "Vlog" },
] as const

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Please select a category"),
  video: z.custom<File>((v) => v instanceof File, "Please upload a video").nullable(),
  thumbnail: z.custom<File>((v) => v instanceof File, "Please upload a thumbnail").nullable(),
  visibility: z.enum(["public", "unlisted", "private"]),
})

type FormData = z.infer<typeof formSchema>

export function CreateVideoForm() {
  const [isUploading, setIsUploading] = React.useState(false)
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      visibility: "public",
      video: null,
      thumbnail: null,
    },
  })

  async function onSubmit(data: FormData) {
    try {
      setIsUploading(true)
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 3000))
      
      console.log(data)
      toast.success("Video uploaded successfully!")
      form.reset()
    } catch (error) {
      toast.error("Something went wrong while uploading")
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <FormField
              control={form.control}
              name="video"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video</FormLabel>
                  <FormControl>
                    <FileUpload
                      accept="video/*"
                      value={field.value}
                      onChange={field.onChange}
                      loading={isUploading}
                      previewComponent={<VideoPreview file={field.value} />}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload your video file (MP4, WebM, etc.)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <FileUpload
                      accept="image/*"
                      value={field.value}
                      onChange={field.onChange}
                      loading={isUploading}
                      previewComponent={<ImagePreview file={field.value} />}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload a thumbnail image (16:9 ratio recommended)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter video title" {...field} />
                  </FormControl>
                  <FormDescription>
                    Give your video a descriptive title
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter video description"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Describe what your video is about
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {videoCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Choose the category that best fits your video
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isUploading}>
            {isUploading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isUploading ? "Uploading..." : "Upload Video"}
          </Button>
        </div>
      </form>
    </Form>
  )
}

