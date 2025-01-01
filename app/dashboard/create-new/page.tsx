"use shell"
import React from 'react'
import { CreateVideoForm } from "../components/create-video-form"
import { Shell } from "../components/shell"

const NewVideoRoute = () => {
  return (
    <Shell>
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Create New Video</h1>
        <p className="text-muted-foreground">
          Upload and publish your video to share with viewers
        </p>
      </div>
    </div>
    <CreateVideoForm />
  </Shell>
  )
}

export default NewVideoRoute