import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroImg from "../assets/images/banner.png";

const Hero = () => {
  return (
    <Box
      sx={{
        mt: { lg: "130px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography fontWeight={600} color="#ff2625" fontSize="35px">
        Fitto
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "50px", xs: "45px" }, mt: "10px" }}
      >
        Sweat,Smile <br />
        And Repeat
      </Typography>
      <Typography lineHeight="45px" fontSize="16px" mb="20px">
        Click out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        href="#exercises"
        sx={{ background: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        color="#ff2625"
        sx={{
          fontSize: "200px",
          fontWeight: "600",
          opacity: "0.1",
          mt: "-10px",
          display: { xl: "block", xs: "none" },
        }}
      >
        Exercises
      </Typography>

      <img src={HeroImg} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default Hero;
