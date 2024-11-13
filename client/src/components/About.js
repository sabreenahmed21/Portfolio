import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import cubic1 from "../assets/dark_cube1.png";
import cubic2 from "../assets/dark_romb.png";
import purplee from "../assets/Grou-removebg-preview.png";
import sabreenImg from "../assets/sJPG.JPG";
import "../styledComponents/about.css";

export default function About() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <img src={cubic2} alt="img" width={"250px"} height={"210px"} />
        </Box>

        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            columnGap: 3,
          }}
        >
          <img
            src={sabreenImg}
            alt="sabreenImg"
            width={"230px"}
            className="sabreenImg"
          />
          <Grid item xs={12} md={5.5}>
            <Typography
              variant="h2"
              sx={{
                textTransform: "capitalize",
                mb: "20px",
                fontSize: "3.5rem",
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
            >
              Hi, I'm Sabreen <br /> Web Developer
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#afb0b1",
                textTransform: "capitalize",
                letterSpacing: "0.05rem",
              }}
            >
              Front-End Developer / JavaScript / React & TypeScript Expert
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
              Passionate about building interactive and responsive web
              applications. Skilled in HTML, CSS, JavaScript, React, Next.js,
              and TypeScript.
            </Typography>
            <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
              Problem solver with a strong attention to detail and an organized
              approach to development.
            </Typography>
            <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
              Eager to work on ambitious front-end projects with creative and
              collaborative teams.
            </Typography>
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1MAczR8vPoBJtZV3X_43hnnduj5sMGuWf?usp=sharing",
                  "_blank"
                )
              }
              sx={{ p: 2, curser:'pointer', textTransform:'capitalize', fontWeight:'600' }}
              variant="contained"
              color="secondary"
              size="medium"
            >
              Download CV
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            width: "100%",
            textAlign: "center",
            position: "absolute",
            bottom: "90px",
            zIndex: -1,
            opacity: 0.8,
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
          <img src={cubic1} alt="img" width={"190px"} height={"210px"} />
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
        />
      </Box>
    </>
  );
}
