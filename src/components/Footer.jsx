import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "18px", xs: "10px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Copyright &#169; 2023 K Hafis. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
