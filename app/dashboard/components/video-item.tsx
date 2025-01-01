"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Save } from 'lucide-react'
import Image from "next/image"

interface VideoItemProps {
  id: string
  title: string
  thumbnail: string
  views: number
  uploadDate: string
  category: string
}

export function VideoItem({ id, title, category, thumbnail, views, uploadDate }: VideoItemProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const [editedCategory, setEditedCategory] = useState(category)

  const handleSave = () => {
    // Here you would typically update the video title in your backend
    console.log(`Updating video ${id} with new title: ${editedTitle} and category: ${editedCategory}`)
    setIsEditing(false)
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
        <div className="p-4">
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor={`edit-title-${id}`}>Edit Title</Label>
                <Input
                  id={`edit-title-${id}`}
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor={`edit-category-${id}`}>Edit Category</Label>
                <Input
                  id={`edit-category-${id}`}
                  value={editedCategory}
                  onChange={(e) => setEditedCategory(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          ) : (
            <>
              <h3 className="font-semibold text-lg truncate">{title}</h3>
              <p className="text-sm text-gray-500 mt-1">{category}</p>
            </>
          )}
          <p className="text-sm text-gray-500">{views.toLocaleString()} views • {uploadDate}</p>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        {isEditing ? (
          <Button onClick={handleSave} size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
        ) : (
          <Button onClick={() => setIsEditing(true)} variant="ghost" size="sm">
            <Pencil className="w-4 h-4 mr-2" />
            Edit
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

// Placeholder for EditVideoDialog component.  Replace with your actual component.
const EditVideoDialog = ({id, initialTitle, initialCategory, onSave}) => {
  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState(initialCategory);

  const handleSave = () => {
    onSave(id, title, category);
  }

  return (
    <div>
      <Input value={title} onChange={e => setTitle(e.target.value)} />
      <Input value={category} onChange={e => setCategory(e.target.value)} />
      <Button onClick={handleSave}>Save</Button>
    </div>
  )
}

