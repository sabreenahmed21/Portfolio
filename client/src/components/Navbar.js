import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "../styledComponents/Navbar.css";
import { RiArrowRightSLine } from "react-icons/ri";

export default function Navbar({ swiperRef }) {
  const handleNavigation = (index) => {
    if (swiperRef.current) {
      console.log(swiperRef.current);
      swiperRef.current.slideTo(index);
    } else {
      console.log('error');
    }
  };

  return (
    <Box sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          sx={{
            width: "35px",
            height: "24px",
            bgcolor: "#fff",
            mr: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          <RiArrowRightSLine style={{ fontSize: "xxx-large" , color:'#000'}} />
          <Box className="line"></Box>
        </Box>
        <Typography
          variant="h1"
          sx={{
            color: "#fff",
            fontSize: "2rem",
            letterSpacing: "0.5rem",
            fontWeight: 600,
          }}
        >
          DVLPR
        </Typography>
      </Box>

      <Button
        variant="outlined"
        onClick={() => handleNavigation(4)}
        sx={{
          textTransform: "capitalize",
          letterSpacing: "1px",
          fontWeight: 600,
          color: "#fff",
          border: "#fff solid 2px",
          fontSize: "1.3rem",
          "&:hover": {
            color: "#000",
            bgcolor: "#fff",
            border: "#fff solid 2px",
            transition: "all 0.6s",
          },
        }}
      >
        Contact
      </Button>
    </Box>
  );
}
