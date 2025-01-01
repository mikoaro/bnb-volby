import React from 'react'
import Image from 'next/image'

interface ImagePreviewProps {
  file: File | null
}

export function ImagePreview({ file }: ImagePreviewProps) {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      return () => URL.revokeObjectURL(url)
    }
  }, [file])

  if (!imageUrl) return null

  return (
    <div className="relative w-full h-40">
      <Image
        src={imageUrl}
        alt="Thumbnail preview"
        fill
        className="object-cover rounded-lg"
      />
    </div>
  )
}

