"use client"

import * as React from "react"
import { useDropzone } from "react-dropzone"
import { Cloud, File, Loader2 } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface FileUploadProps {
  onChange: (file: File | null) => void
  value?: File | null
  accept?: string
  loading?: boolean
  className?: string
  previewComponent?: React.ReactNode
}

export function FileUpload({
  onChange,
  value,
  accept,
  loading,
  className,
  previewComponent,
}: FileUploadProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: accept ? { [accept]: [] } : undefined,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      onChange(acceptedFiles[0])
    },
  })

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(null)
  }

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "relative flex h-52 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50 hover:bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/50",
          isDragActive && "border-blue-500 bg-blue-500/10",
          className
        )}
      >
        <input {...getInputProps()} />
        {loading ? (
          <Loader2 className="h-10 w-10 animate-spin text-gray-400" />
        ) : value ? (
          <div className="flex flex-col items-center gap-2 text-center">
            <File className="h-10 w-10 text-blue-500" />
            <div className="text-xs font-medium">{value.name}</div>
            <div className="text-[10px] text-gray-500">
              Click or drag to replace
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-center">
            <Cloud className="h-10 w-10 text-gray-400" />
            <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Click or drag file to upload
            </div>
          </div>
        )}
      </div>
      {value && (
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">{value.name}</div>
          <Button variant="ghost" size="sm" onClick={handleRemove}>
            Remove
          </Button>
        </div>
      )}
      {previewComponent}
    </div>
  )
}

