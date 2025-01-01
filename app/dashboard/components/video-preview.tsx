import React from 'react'

interface VideoPreviewProps {
  file: File | null
}

export function VideoPreview({ file }: VideoPreviewProps) {
  const videoUrl = file ? URL.createObjectURL(file) : null

  React.useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl)
      }
    }
  }, [videoUrl])

  if (!videoUrl) return null

  return (
    <video
      src={videoUrl}
      controls
      className="w-full h-auto rounded-lg"
    >
      Your browser does not support the video tag.
    </video>
  )
}

