import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../styledComponents/skills.css";
import { Link } from "react-router-dom";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiReactquery } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import purplee from "../assets/Grou-removebg-preview.png";

import romb1 from "../assets/purple_romb2.png";
import romb2 from "../assets/dark_romb.png";

export default function Skills() {
  return (
    <>
      <Container>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "700px",
              m: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                textTransform: "capitalize",
                mb: 3,
                mt: 6,
                fontSize: "3.5rem",
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
            >
              Skills & Experience
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              The main area of expertise is front end development (client side
              of the web).
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              HTML, CSS, JS, building small and medium web applications with Vue
              or React, custom plugins, features, animations, and coding
              interactive layouts. I have also full-stack developer experience
              with one of the most popular open source CMS on the web -
              WordPress
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Visit my{" "}
              <Link
                to={"https://github.com/sabreenahmed21"}
                target="_blank"
                style={{ color: "#f4a949", textDecoration: "none" }}
              >
                Linkedin
              </Link>{" "}
              for more details.
            </Typography>
          </Box>
          <Box className="skills">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <IoLogoJavascript className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                Java Script
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <FaReact className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                react
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <RiNextjsFill className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                next js
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <SiTypescript className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                type Script
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <IoLogoNodejs className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                node
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <DiMongodb className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                mongo DB
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <SiReactquery className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                RTK Query
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <IoLogoHtml5 className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                html
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <IoLogoCss3 className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                css
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <BsFillBootstrapFill className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                bootstrap
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <RiTailwindCssFill className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                tailwind CSS
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <IoLogoSass className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                sass
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <FaGitAlt className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                git
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <IoLogoFigma className="icon" />
              <Typography
                variant="body2"
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "1rem",
                  mt: 1,
                }}
              >
                figma
              </Typography>
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
            top: "10%",
            right: "30%",
            opacity: "0.5",
          }}
        >
          <img src={romb1} alt="img" width={"120px"} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            position: "absolute",
            zIndex: -1,
            bottom: "30%",
            left: "20%",
          }}
        >
          <img src={romb2} alt="img" width={"200px"} />
        </Box>
      </Container>
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          display: "flex",
          justifyContent: "start",
        }}
      >
        <img
          src={purplee}
          alt="img"
          className="img2"
          width={"200px "}
          height={"180px"}
        />
      </Box>
    </>
  );
}
