import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { xs: "20px", sm: "30px" },
        px: "20px",
      }}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0px 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" alignItems="flex-end" fontSize="24px">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3a1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
