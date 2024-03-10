import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoUrl,
} from "../utils/constants";

export const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videosId,snippet)
  return (
    <Card
      sx={{
        width: { xs: "100%",sm:'358px',md:'320px' },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      {/* Here we are putting snippet?.thumbnail?. instead of sinppets.thumbnail , so that we do not get any error in the upcoming  */}
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {xs:'100%',sm:'358px',md:'320px'}, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        {/* for video title */}
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) + "..." ||
              demoVideoTitle.slice(0, 60) + "..."}
          </Typography>
        </Link>

        {/* For channel title  */}
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            fontSize="20px"
            color="gray"
            ml="5px"
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: "25px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
