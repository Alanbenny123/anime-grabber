"use client";
import React, { forwardRef } from "react";
import ReactPlayer from "react-player";

const EpisodePlayer = forwardRef<any, { url: string; onEnded?: () => void }>(
  ({ url, onEnded }, ref) => (
    <div className="aspect-video w-full">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        onEnded={onEnded}
        ref={ref}
      />
    </div>
  )
);

export default EpisodePlayer;
