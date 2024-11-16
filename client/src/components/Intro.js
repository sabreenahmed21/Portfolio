import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import screen from "../assets/screen-removebg.png";
import dots from "../assets/side-dots.png";
import "../styledComponents/Intro.css";
import purple from "../assets/purple_romb1.png";
import purplee from "../assets/Grou-removebg-preview.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <>
      <Container>
        <Grid container position={"relative"}>
          <Box position={"relative"}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img src={dots} alt="img" className="dot" loading="lazy"/>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection:{xs:'column-reverse', md:'row'},
                alignItems: "center",
                justifyContent: "center",
                mr: 6,
              }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  sx={{
                    mt:{xs:'0.1rem', md:'0'},
                    textTransform: "capitalize",
                    mb: { xs: "15px", md: "20px" },
                    fontSize: { xs: "1.5rem",sm:'2.5rem', md: "3.5rem" },
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
                  I specialize in full-stack development with expertise in
                  Node.js, React.js, and building interactive web applications.
                  I also have experience in database management and CMS
                  integration, using tools like Git and Webpack.
                </Typography>
                <Box>
                  <Button
                    style={{
                      color: "#9c27b0",
                      textDecoration: "none",
                      textTransform: "capitalize",
                      fontWeight: 900,
                      fontSize: "1.1rem",
                      marginTop: { xs: "0.8rem", md: "1rem" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 3,
                      padding:0
                    }}
                  >
                    <Link
                      to={"/#about"}
                      style={{
                        textDecoration: "none",
                        color: "#9c27b0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      About me <IoIosArrowForward />
                    </Link>
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <img
                  alt="screen"
                  src={screen}
                  width={"100%"}
                  height={"100%"}
                  className="screen"
                  loading="lazy"
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
            <img src={purple} alt="img" width={"190px"} height={"210px"} loading="lazy"/>
          </Box>
        </Grid>
      </Container>
      <Box sx={{ width: "100%", position:'absolute', bottom:0, left:0, zIndex:-1 }}>
        <img
          src={purplee}
          alt="img"
          className="purplee"
          width={"200px "}
          height={"180px"}
          loading="lazy"
        />
      </Box>
    </>
  );
}
