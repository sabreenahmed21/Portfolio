import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import purplee from "../assets/Grou-removebg-preview.png";
import sphere1 from "../assets/sphere_md.png";
import sphere3 from "../assets/sphere_sm.png";
import sphere2 from "../assets/sphere_lg.png";

import "../styledComponents/Project.css";

export default function Projects() {
  return (
    <>
      <Container>
        <Box mr={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              maxWidth: "550px",
              m: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textTransform: "capitalize",
                mb: 3,
                fontSize: { xs: "1.5rem", md: "2.25rem", lg: "3.25rem" },
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
            >
              Portfolio & Previous Projects
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              I have built various different projects to fit different aspects
              of the client's business. If you want to see more examples of my
              work than the ones showcased in this site, please{" "}
              <Link
                to={"https://www.linkedin.com/in/sabreen-ahmed-35bb54264"}
                target="_blank"
                style={{ color: "#f4a949", textDecoration: "none" }}
              >
                {" "}
                contact me!
              </Link>
            </Typography>
            <Box>
              <Link
                to={"my-project"}
                target="_self"
                style={{
                  color: "#9c27b0",
                  fontWeight: 900,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 3,
                  textTransform:'capitalize'
                }}
              >
                {" "}
                see projects <IoIosArrowForward />
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            position: "absolute",
            zIndex: -1,
            bottom: "80%",
            left: "30%",
          }}
        >
          <img src={sphere3} alt="img" width={"80px"} loading="lazy"/>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            position: "absolute",
            zIndex: -1,
            bottom: "50%",
            right: "10%",
          }}
        >
          <img src={sphere2} alt="img" width={"150px"} loading="lazy"/>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            position: "absolute",
            zIndex: -1,
          }}
        >
          <img src={sphere1} alt="img" width={"100px"} loading="lazy"/>
        </Box>
      </Container>

      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "end",
        }}
      >
        <img
          src={purplee}
          alt="img"
          className="img"
          width={"200px "}
          height={"180px"}
          loading="lazy"
        />
      </Box>
    </>
  );
}
