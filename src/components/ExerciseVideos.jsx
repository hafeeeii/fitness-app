import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ name, exerciseVideos }) => {
  if (!exerciseVideos) return <Loader />;
  return (
    <Box sx={{ mt: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        alignItems="center"
        flexWrap="wrap"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            key={index}
            className="exercise-video"
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />

            <Box>
              <Typography variant="h5" color="black">
                {item.video.title}
              </Typography>
              <Typography variant="body2" color="grey">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
