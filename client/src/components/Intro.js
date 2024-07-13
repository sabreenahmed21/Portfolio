import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import screen from "../assets/screen-removebg.png";
import dots from "../assets/side-dots.png";
import "../styledComponents/Intro.css";
import purple from "../assets/purple_romb1.png";
import purplee from "../assets/Grou-removebg-preview.png";
import { IoIosArrowForward } from "react-icons/io";


export default function Intro() {
  return (
    <>
      <Container>
        <Grid container position={"relative"}>
          <Box position={"relative"}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img src={dots} alt="img" className="dot" />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 9,
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  sx={{
                    textTransform: "capitalize",
                    mb: "20px",
                    fontSize: "3.5rem",
                    fontWeight: "bold",
                    lineHeight: 1,
                  }}
                >
                  MERN-Stack Developer
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ textTransform: "capitalize", letterSpacing: "0.05rem" }}
                >
                  Resolving design problems, building smart user interfaces and
                  useful interactions, developing rich web applications and
                  seamless web experiences.
                </Typography>
                <Box>
                  <Button
                    style={{
                      color: "#9c27b0",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 3,
                    }}
                  >
                    About me <IoIosArrowForward />
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <img
                  alt="screen"
                  src={screen}
                  width={"100%"}
                  height={"100%"}
                  className="screen"
                />
              </Grid>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              position: "absolute",
              bottom: "-50px",
              zIndex: -1,
              opacity: 0.7,
              "@keyframes float": {
                "0%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-20px)" },
                "100%": { transform: "translateY(0)" },
              },
              img: {
                animation: "float 6s ease-in-out infinite",
              },
            }}
          >
            <img src={purple} alt="img" width={"190px"} height={"210px"} />
          </Box>
        </Grid>
      </Container>
      <Box sx={{ width: "100%" }}>
        <img
          src={purplee}
          alt="img"
          className="purplee"
          width={"200px "}
          height={"180px"}
        />
      </Box>
    </>
  );
}
