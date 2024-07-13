import { Box, Container, Grid, Typography } from "@mui/material";
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
              Front End Developer / JavaScript Fan / Wordpress Expert
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
              Professionally connected with the web development industry.
            </Typography>
            <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
              Problem solver, well-organised person, loyal employee with high
              attention to detail.
            </Typography>
            <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
              Fan of Boxing, outdoor activities, video games, and coding of
              course.
            </Typography>
            <Typography variant="body2" sx={{ my: 2, fontSize: "1.03rem" }}>
              Interested in the entire frontend spectrum and working on
              ambitious projects with interesting people.
            </Typography>
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
