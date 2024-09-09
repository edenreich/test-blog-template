'use client'

import React from 'react'
import NextVideo from 'next-video'

interface VideoProps {
  src: string
}

const Video: React.FC<VideoProps> = ({ src }) => {
  return <NextVideo src={src} />
}

export default Video
